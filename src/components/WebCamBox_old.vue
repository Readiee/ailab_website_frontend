<template>
  <div class="base-box relative flex justify-center items-center" style="padding-top: 57.25%; height: 0; background-color: rgba(0, 0, 0);">
    <div class="hidden">
      <div class="option">
        <select id="video-codec">
          <option value="default" selected>Default codecs</option>
          <option value="VP8/90000">VP8</option>
          <option value="H264/90000">H264</option>
        </select>
      </div>

      <div class="option">
        <input id="use-stun" type="checkbox">
        <label for="use-stun">Use STUN server</label>
      </div>

      <h2>State</h2>
      <p>
        ICE gathering state: <span id="ice-gathering-state" />
      </p>
      <p>
        ICE connection state: <span id="ice-connection-state" />
      </p>
      <p>
        Signaling state: <span id="signaling-state" />
      </p>

      <h2>Data channel</h2>
      <pre id="data-channel" style="height: 200px;" />

      <h2>SDP</h2>

      <h3>Offer</h3>
      <pre id="offer-sdp" />

      <h3>Answer</h3>
      <pre id="answer-sdp" />
    </div>

    <div
      class="start-button absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20" 
      @mousemove="showHUD()"
      @mouseleave="isStopButtonVisible = false"
    >
      <AppSpinner v-if="loading" />
      <div v-else>
        <transition name="fade">
          <AppBtnWithIcon v-if="!isStarted" id="start" class="btn-start" icon="play-circle" onclick="start()" @click="getStarted()">Начать</AppBtnWithIcon>
        </transition>

        <transition name="fade">
          <AppBtnWithIcon
            v-if="isStarted && isStopButtonVisible"
            id="stop"
            icon="stop-circle"
            class="btn-stop"
            onclick="stop()"
            @click="getStopped()"
          >
            Остановить
          </AppBtnWithIcon>
        </transition>
      </div>
    </div>

    <div id="media" class="absolute top-0 left-0 right-0 bottom-0 min-w-full min-h-full rounded-md z-10 flex justify-center items-center">
      <audio id="audio" autoplay="true" />
      <video id="video" class="rounded-md" autoplay="true" playsinline="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppBtn from '@/components/UI/AppBtn.vue'
import AppBtnWithIcon from '@/components/UI/AppBtnWithIcon.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'

onMounted(() => {
	// Подключение скрипта с обработкой
	const script = document.createElement('script')
	script.setAttribute('src', '/src/components/dedsad.js')
	document.head.appendChild(script)
})
const isStarted = ref(false)
const loading = ref(false)
const getStarted = () => {
	isStarted.value = true
	loading.value = true
}
const getStopped = () => {
	isStarted.value = false
}
const isStopButtonVisible = ref(false)

let timeoutId: NodeJS.Timeout | undefined

const showHUD = () => {
	const show = () => {
		timeoutId = setTimeout(() => { 
			isStopButtonVisible.value = false
		}, 3000 )
	}

	if (timeoutId !== null) {
		clearTimeout(timeoutId)
	}

	isStopButtonVisible.value = true
	show()
}


onMounted(() => {
	const targetNode = document.getElementById('answer-sdp')
	const mutate = (mutations:MutationRecord[]) => {
		mutations.forEach((mutation) => {
			loading.value = false
		})
	}

	const observer = new MutationObserver(mutate)
	const config = {
		characterData: true,
		attributes: false,
		childList: true,
		subtree: false
	}

	if(targetNode) {
		observer.observe(targetNode, config)
	}

	if(targetNode) {
		setTimeout(() => {
			targetNode.textContent = 'hello world'
		}, 1000)	}
})
</script>

<style scoped>
.base-box:hover .btn-stop.hover-show {
  visibility: visible;
  opacity: 1;
  display: inline-block;
}

.base-box:not(hover) .btn-stop.hover-show {
  visibility: hidden;
  opacity: 0;
  display: inline-block;
}

.btn-stop {
  /* display: none; */
  transition: 0.2s ease-in-out;
}

.visible {
  visibility: visible;
  opacity: 1;
  display: inline-block;
}

video {
  max-height: 90%;
}
</style>