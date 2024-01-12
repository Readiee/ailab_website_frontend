export default function useFileSize(bytes:number, si=true, dp=1) {
	const thresh = si ? 1000 : 1024
   
	if (Math.abs(bytes) < thresh) {
		return bytes + ' Б'
	}
   
	const units = si 
		? ['КБ', 'МБ', 'ГБ', 'TБ', 'PБ', 'EБ', 'ZБ', 'YБ'] 
		: ['KiБ', 'MiБ', 'GiБ', 'TiБ', 'PiБ', 'EiБ', 'ZiБ', 'YiБ']
	let u = -1
	const r = 10**dp
   
	do {
		bytes /= thresh
		++u
	} while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1)
   
	return bytes.toFixed(dp) + ' ' + units[u]
}
