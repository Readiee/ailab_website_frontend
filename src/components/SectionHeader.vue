<template>
  <div class="section-header">
    <h2 class="accent-reverse uppercase">{{ props.title }}</h2>
    <p class="mt-4">{{ props.caption }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
	title: { type: String, required: true },
	caption: { type: String, default: '' },
})
</script>

<style scoped lang="scss">
.section-header {
    text-align: center;
    margin-bottom: 40px;
}
</style>