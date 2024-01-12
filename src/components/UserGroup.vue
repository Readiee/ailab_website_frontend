<template>
  <div class="flex items-center gap-3">
    <AppAvatar :img="$props.img" size="medium" class="start" />
    <div class="end">
      <h4 class="uppercase">{{ props.title }}</h4>
      <p class="text-sm">{{ props.caption }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppAvatar from '@/components/UI/AppAvatar.vue'

const props = defineProps({
	img: { type: String, required: true },
	title: { type: String, required: true },
	caption: { type: String, default: 'ИКИТ СФУ' },
})
</script>

<style lang="scss" scoped>

</style>