<template>
  <div class="img-container">
    <img :class="`aspect-[${props.x}/${props.y}] object-cover`" :src="props.img" alt="image">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
	img: { type: String, required: true },
	x: {
		type: Number,
		default: 16
	},
	y: {
		type: Number,
		default: 9
	}
})
</script>

<style scoped>
.img-container {
  position: relative;
  width: 100%;
}

.img-container::before {
  transition: 0.15s ease-in-out;

  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(97, 0, 255, 0.25); 
  pointer-events: none; 
  border-radius: 6px;
}

.img-container img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 6px;
} 
</style>