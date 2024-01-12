<template>
  <form id="form" enctype="multipart/form-data" method="post">        
    <div 
      class="box"
      :class="{ 'active-drag': isDragging, 'file-loaded': fileIsLoaded, 'border-r-bottom-0': fileIsLoaded }"
      @dragover="dragover($event)"
      @dragleave="dragleave"
      @drop="drop"
    >
      <div v-if="fileIsLoaded" class="rounded-md m-auto absolute top-0 right-0 left-0 bottom-0" :src="previewImageSrc" alt="bgr" :style="backgroundStyle" />
      <div class="content top-0 left-0 right-0 bottom-0 absolute flex justify-center items-center flex-col gap-2">
        <input
          id="fileInput"
          ref="file"
          type="file"
          name="file"
          class="hidden"
          accept=".jpg,.jpeg,.png"
          @input="onChange"
        >

        <label v-if="files.length == 0" for="fileInput" class="file-label">
          <div v-if="isDragging">+</div>
          <div v-else class="text-center">Перетащите файл в это поле <br> или <span class="primary cursor-pointer">нажмите сюда</span>.</div>
        </label>

        <div v-show="fileIsLoaded && !isShownProccessedImage" class="file-loaded-view w-full h-full flex p-4">
          <img ref="originalImage" class="rounded-md m-auto" :src="previewImageSrc" alt="imgPreview">
        </div>
        <div v-show="isShownProccessedImage" class="file-loaded-view w-full h-full flex p-4">
          <img id="processed-image" ref="processedImage" alt="proccessedImage" src="123" class="rounded-md m-auto">
        </div>
      </div>

      <div v-if="fileIsProcessed" class="img-switcher absolute right-3 bottom-3">
        <AppIconBtn @click.prevent="isShownProccessedImage = !isShownProccessedImage" />
      </div>
    </div>


    <!-- Меню, когда файл загружен -->
    <div v-if="fileIsLoaded && !fileIsProcessed" class="actions flex mb-6 p-4 base-box">
      <div class="actions__start flex items-center mr-auto overflow-hidden max-w-full">
        <h5 class="overflow-hidden whitespace-nowrap text-ellipsis">{{ files[0].name }}</h5>
        <p class="text-sm whitespace-nowrap ml-3">{{ fileSize }}</p>
      </div>
        
      <div class="actions__end flex items-center">
        <div id="y-line-1" class="y-line mx-8" />

        <label for="fileInput" class="w-fit">
          <h3 class="hover text-sm whitespace-nowrap">Выбрать файл</h3>
        </label>

        <div id="y-line-2" class="y-line mx-8" />
        
        <AppBtn type="submit" size="small" class="" :loading="loading" @click="loading = true">Отправить</AppBtn>
      </div>
    </div>

    <!-- Меню, когда файл обработан -->
    <div v-if="fileIsProcessed" class="actions flex justify-end mb-6 p-4 base-box">
      <div class="actions__end flex items-center">
        <label for="fileInput" class="w-fit">
          <h3 class="hover text-sm whitespace-nowrap">Выбрать файл</h3>
        </label>

        <div id="y-line-2" class="y-line mx-8" />
        
        <a class="btn btn-small btn-primary" :href="proccesedImageUrl" download="processed_image">
          Скачать
        </a>
      </div>
    </div>

    <select name="video_transform" class="hidden">
      <option value="none">No transform</option>
      <option value="edges" selected>Edge detection</option>
      <option value="cartoon">Cartoon effect</option>
      <option value="rotate">Rotate</option>
    </select>
  </form>

  <a id="download-link" href="" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import AppBtn from '@/components/UI/AppBtn.vue'
import useFileSize from '@/hooks/useFileSize'
import AppIconBtn from '@/components/UI/AppIconBtn.vue'

const isDragging = ref(false)
const files = ref<File[]>([])
const file = ref<HTMLInputElement>()

// const imgPreview = document.getElementById('imgPreview')
const previewImageSrc = ref('')

const backgroundStyle = computed(() => {
	const backgroundImage = computed(() => {
		return isShownProccessedImage.value ? processedImage?.getAttribute('src') : previewImageSrc.value
	})
	return {
		backgroundRepeat: 'repeat',
		backgroundSize: 'cover',
		backgroundImage: 'url(' + backgroundImage.value + ')',
		filter: 'blur(10px) brightness(50%)'
	}
})

const fileSize = computed(() => {
	return useFileSize(files.value[0].size)
})

const onChange = () => {
	fileIsProcessed.value = false
	isShownProccessedImage.value = false
	proccesedImageUrl.value = ''

	if (file.value instanceof HTMLInputElement && file.value.files) {
		// files.value.push(...Array.from(file.value.files))
		files.value = Array.from(file.value.files)
	}

	//image preview
	previewImageSrc.value = URL.createObjectURL(files.value[0])

}

const dragover = (e:Event) => {
	e.preventDefault()
	isDragging.value = true
}

const dragleave = () => {
	isDragging.value = false
}

const drop = (e: DragEvent) => {
	e.preventDefault()
	if (file.value) {
		file.value.files = e.dataTransfer?.files || null
		onChange()
		isDragging.value = false
	}
}

const fileIsLoaded = computed(() => {
	return files.value.length > 0
})

const isShownProccessedImage = ref(false)
const fileIsProcessed = ref(false)
const proccesedImageUrl = ref('')
const loading = ref(false)

let processedImage: HTMLElement | null
// let downloadLink = document.getElementById('download-link')


onMounted(() => {
	// Подключение скрипта с обработкой
	const script = document.createElement('script')
	script.setAttribute('src', '/src/components/test_photo.js')
	document.head.appendChild(script)
  
	// Отслеживание изменения src у изображения
	processedImage = document.getElementById('processed-image')
	let prevSrc = ''
	const imgObserver = new MutationObserver((mutationsList) => {
		for(let mutation of mutationsList) {
			if (mutation.type == 'attributes' && mutation.attributeName == 'src') {
				if (processedImage) {
					let src = processedImage.getAttribute('src')
					if (src != prevSrc && src != null) {
						// downloadLink?.setAttribute('href', src)
						fileIsProcessed.value = true
						isShownProccessedImage.value = true
						proccesedImageUrl.value = src
						loading.value = false
						prevSrc = src
					}
				}  
			}
		}
		alert(mutationsList.length)
	})
	if (processedImage) {
		imgObserver.observe(processedImage, {
			attributes: true
		})
	}
})



</script>

<style scoped lang="scss">
.box {
    position: relative;
    width: 100%;
    height: 240px;
    // min-height: 520px;
    border-radius: 8px;
    background-color: var(--dark);
    // border: 1px solid var(--ghost-grey);
    border: 1px dashed var(--purple);

    overflow: hidden;
}

.box.active-drag {
    border-style: solid;
}

.box.file-loaded {
    border: 1px solid var(--ghost-grey);
    padding-top: 57.25%;
}

.box.border-r-bottom-0 {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.actions {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  @media screen and (max-width: 700px) {
      flex-direction: column;
      gap: 16px;

      #y-line-1 {
        display: none;
      }

      .actions__end {
        #y-line-2 {
          margin-left: auto;
        }
      }
  }
}

img {
  max-width: 100%;
  max-height: 100%;
}


</style>