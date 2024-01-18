// get DOM elements
var iceConnectionLog = document.getElementById('ice-connection-state'),
	iceGatheringLog = document.getElementById('ice-gathering-state'),
	signalingLog = document.getElementById('signaling-state')

// peer connection
var pc = null

// data channel
var dc = null, dcInterval = null

function createPeerConnection() {
	var config = {
		sdpSemantics: 'unified-plan'
	}

	if (document.getElementById('use-stun').checked) {
		config.iceServers = [{urls: ['stun:stun.l.google.com:19302']}]
	}

	pc = new RTCPeerConnection(config)

	// register some listeners to help debugging
	pc.addEventListener('icegatheringstatechange', function() {
		iceGatheringLog.textContent += ' -> ' + pc.iceGatheringState
	}, false)
	iceGatheringLog.textContent = pc.iceGatheringState

	pc.addEventListener('iceconnectionstatechange', function() {
		iceConnectionLog.textContent += ' -> ' + pc.iceConnectionState
	}, false)
	iceConnectionLog.textContent = pc.iceConnectionState

	pc.addEventListener('signalingstatechange', function() {
		signalingLog.textContent += ' -> ' + pc.signalingState
	}, false)
	signalingLog.textContent = pc.signalingState

	// connect audio / video
	pc.addEventListener('track', function(evt) {
		if (evt.track.kind == 'video')
			document.getElementById('video').srcObject = evt.streams[0]
		else
			document.getElementById('audio').srcObject = evt.streams[0]
	})

	return pc
}

function negotiate() {
	return pc.createOffer().then(function(offer) {
		return pc.setLocalDescription(offer)
	}).then(function() {
		// wait for ICE gathering to complete
		return new Promise(function(resolve) {
			if (pc.iceGatheringState === 'complete') {
				resolve()
			} else {
				function checkState() {
					if (pc.iceGatheringState === 'complete') {
						pc.removeEventListener('icegatheringstatechange', checkState)
						resolve()
					}
				}
				pc.addEventListener('icegatheringstatechange', checkState)
			}
		})
	}).then(function() {
		var offer = pc.localDescription
		var codec

		codec = document.getElementById('video-codec').value
		if (codec !== 'default') {
			offer.sdp = sdpFilterCodec('video', codec, offer.sdp)
		}

		document.getElementById('offer-sdp').textContent = offer.sdp
		return fetch('http://127.0.0.1:8080/webrtc/dedsad/offer', {
			body: JSON.stringify({sdp: offer.sdp,
				type: offer.type
			}
			),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		})
	}).then(function(response) {
		return response.json()
	}).then(function(answer) {
		document.getElementById('answer-sdp').textContent = answer.sdp
		return pc.setRemoteDescription(answer)
	}).catch(function(e) {
		alert(e)
	})
}

function start() {
	// document.getElementById('start').style.display = 'none'

	pc = createPeerConnection()

	var constraints = {
		video: {
			width: {exact: 1080},
			height: {exact: 720},
			frameRate: {
				ideal: 10,
				max: 15,
				min: 5
			}
		}
	}

	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
		stream.getTracks().forEach(function(track) {
			pc.addTrack(track, stream)
		})
		return negotiate()
	}, function(err) {
		alert('Could not acquire media: ' + err)
	})

	// document.getElementById('stop').style.display = 'inline-block'
}

function stop() {
	// document.getElementById('stop').style.display = 'none'

	if (dc) {
		dc.close()
	}

	if (pc.getTransceivers) {
		pc.getTransceivers().forEach(function(transceiver) {
			if (transceiver.stop) {
				transceiver.stop()
			}
		})
	}

	pc.getSenders().forEach(function(sender) {
		sender.track.stop()
	})

	setTimeout(function() {
		pc.close()
	}, 500)

	// document.getElementById('start').style.display = 'inline-block'
}

function sdpFilterCodec(kind, codec, realSdp) {
	var allowed = []
	var rtxRegex = new RegExp('a=fmtp:(\\d+) apt=(\\d+)\r$')
	var codecRegex = new RegExp('a=rtpmap:([0-9]+) ' + escapeRegExp(codec))
	var videoRegex = new RegExp('(m=' + kind + ' .*?)( ([0-9]+))*\\s*$')
    
	var lines = realSdp.split('\n')

	var isKind = false
	for (var i = 0; i < lines.length; i++) {
		if (lines[i].startsWith('m=' + kind + ' ')) {
			isKind = true
		} else if (lines[i].startsWith('m=')) {
			isKind = false
		}

		if (isKind) {
			var match = lines[i].match(codecRegex)
			if (match) {
				allowed.push(parseInt(match[1]))
			}

			match = lines[i].match(rtxRegex)
			if (match && allowed.includes(parseInt(match[2]))) {
				allowed.push(parseInt(match[1]))
			}
		}
	}

	var skipRegex = 'a=(fmtp|rtcp-fb|rtpmap):([0-9]+)'
	var sdp = ''

	isKind = false
	for (var i = 0; i < lines.length; i++) {
		if (lines[i].startsWith('m=' + kind + ' ')) {
			isKind = true
		} else if (lines[i].startsWith('m=')) {
			isKind = false
		}

		if (isKind) {
			var skipMatch = lines[i].match(skipRegex)
			if (skipMatch && !allowed.includes(parseInt(skipMatch[2]))) {
				continue
			} else if (lines[i].match(videoRegex)) {
				sdp += lines[i].replace(videoRegex, '$1 ' + allowed.join(' ')) + '\n'
			} else {
				sdp += lines[i] + '\n'
			}
		} else {
			sdp += lines[i] + '\n'
		}
	}

	return sdp
}

function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}
