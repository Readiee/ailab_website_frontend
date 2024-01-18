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

        <div v-if="fileIsLoaded" class="file-loaded-view w-full h-full flex p-4">
          <img class="rounded-md m-auto" :src="previewImageSrc" alt="imgPreview">
        </div>
      </div>
    </div>

    <div v-if="fileIsLoaded" class="actions flex flex-col mb-6 p-4 base-box gap-6">
      <div class="flex items-center">
        <h5 class="overflow-hidden whitespace-nowrap text-ellipsis">{{ files[0].name }}</h5>
        <p class="text-sm whitespace-nowrap ml-2">{{ fileSize }}</p>

        <div class="y-line mx-6" />

        <AppBtn type="submit" size="small">Отправить</AppBtn>
      </div>

      <label for="fileInput" class="w-full">
        <h3 class="hover text-sm whitespace-nowrap">Выбрать файл</h3>
      </label>
    </div>

    <select name="video_transform" class="hidden">
      <option value="none">No transform</option>
      <option value="edges" selected>Edge detection</option>
      <option value="cartoon">Cartoon effect</option>
      <option value="rotate">Rotate</option>
    </select>
  </form>

  <img id="processed-image" ref="processedImage" alt="proccessedImage" src="123">
  <a id="download-link" href="">Скачать</a>
  {{ fileIsProcessed }} - src
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import AppBtn from '@/components/UI/AppBtn.vue'
import useFileSize from '@/hooks/useFileSize'

const isDragging = ref(false)
const files = ref<File[]>([])
const file = ref<HTMLInputElement>()

// const imgPreview = document.getElementById('imgPreview')
const previewImageSrc = ref('')

const backgroundStyle = computed(() => {
	return {
		backgroundRepeat: 'repeat',
		backgroundSize: 'cover',
		backgroundImage: 'url(' + previewImageSrc.value + ')',
		filter: 'blur(10px) brightness(50%)'
	}
})

const fileSize = computed(() => {
	return useFileSize(files.value[0].size)
})

const onChange = () => {
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

onMounted(() => {
	const script = document.createElement('script')
	script.setAttribute('src', '/src/components/test_photo.js')
	document.head.appendChild(script)

	const processedImage = document.querySelector('processed-image')
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type === 'attributes') {
				mutation.target.textContent = 'Attribute of the element changed'
				fileIsProcessed.value = true
			}
		})
	})

	if (processedImage) {
		observer.observe(processedImage, {
			attributes: true
		})
	}
})

const fileIsProcessed = ref(false)


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
}

img {
  max-width: 100%;
  max-height: 100%;
}


</style>