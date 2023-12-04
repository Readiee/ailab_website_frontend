<template>
  <div :class="imgClasses">
    <img :src="props.img" alt="image">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
	size: { type: String, default: 'small' },
	img: { type: String, required: true },
})

const imgClasses = computed(() => {
	return {
		'img-container': true,
		'img-small': props.size == 'small',
		'img-medium': props.size == 'medium',
		'img-large': props.size == 'large',
	}
})
</script>

<style scoped lang="css">
.img-container {
      position: relative;
      border-radius: 100%;
      overflow: hidden;
 }

.img-container::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(98, 0, 255, 0.4);
      mix-blend-mode: normal;
      pointer-events: none; 
      border-radius: 100%;
}

.img-container img {
      width: 100%;
      mix-blend-mode: luminosity;
      filter: contrast(200%) brightness(90%);
}

.img-small {
        width: 24px;
        height: 24px;
      }
      .img-medium {
        width: 56px;
        height: 56px;
      }
      .img-large {
        width: 200px;
        height: 200px;
      }
</style>