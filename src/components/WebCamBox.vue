<template>
  <div
    class="base-box relative flex justify-center items-center" 
    :class="{'border-r-bottom-0': isStarted }" 
    style="padding-top: 57.25%; height: 0; background-color: rgba(0, 0, 0);"
  >
    <div class="start-button absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20">
      <AppSpinner v-if="loading" />
      <div v-else>
        <transition name="fade">
          <AppBtnWithIcon
            v-if="!isStarted"
            id="start"
            :disabled="fetchScriptError != false"
            class="btn-start"
            icon="play-circle"
            onclick="start()"
            @click="getStarted()"
          >
            Начать
          </AppBtnWithIcon>
        </transition>
      </div>
    </div>

    <div id="media" class="absolute top-0 left-0 right-0 bottom-0 min-w-full min-h-full rounded-md z-10 flex justify-center items-center">
      <audio id="audio" autoplay="true" />
      <video id="video" class="rounded-md" autoplay="true" playsinline="true" />
    </div>
  </div>

  <div v-if="isStarted && loaded" class="actions flex items-center mb-6 p-4 base-box">
    <div class="actions__start mr-auto overflow-hidden max-w-full">
      <!-- <div v-if="loading" class="loading flex items-center gap-3">
        <h5 class="overflow-hidden text-ellipsis">Подключение...</h5>
      </div> -->
      <div class="success flex items-center gap-2">
        <img src="@/assets/icons/check-circle.svg" alt="ok">
        <h5 class="overflow-hidden text-ellipsis">Соединение установлено</h5>
      </div>
    </div>
        
    <div class="actions__end flex items-center">
      <div id="y-line-2" class="y-line mx-4" />
      <AppBtnWithIcon
        id="stop"
        variant="primary"
        icon="stop-circle"
        class="btn-stop"
        onclick="stop()"
        size="small"
        @click="getStopped()"
      >
        Остановить
      </AppBtnWithIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppBtn from '@/components/UI/AppBtn.vue'
import AppBtnWithIcon from '@/components/UI/AppBtnWithIcon.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import useProject from '@/hooks/useProject'
import { onBeforeRouteLeave } from 'vue-router'

// onMounted(() => {
// 	// Подключение скрипта с обработкой
// 	const script = document.createElement('script')
// 	script.setAttribute('src', '/src/components/dedsad.js')
// 	document.head.appendChild(script)
// })
const isStarted = ref(false)
const loading = ref(false)
const getStarted = () => {
	isStarted.value = true
	loading.value = true
}
const getStopped = () => {
	isStarted.value = false
	loading.value = false
	loaded.value = false
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

const { fetchScriptError } = useProject()

const loaded = ref(false)

onMounted(() => {
	loading.value = false
	loaded.value = false
  
	const targetNode = document.getElementById('answer-sdp')
	const mutate = (mutations:MutationRecord[]) => {
		mutations.forEach((mutation) => {
			loading.value = false
			loaded.value = true
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
})


onBeforeRouteLeave((to, from) => {
	if(isStarted.value == true) {
		window.stop()
	}
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

.actions {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.border-r-bottom-0 {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>