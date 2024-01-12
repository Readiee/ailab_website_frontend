<template>
  <div class="accordion base-box" :class="{ 'open': isOpen }">
    <div class="header" @click="toggleAccordion">
      <span class="color-caption text-sm">{{ props.title }}</span>
      <PlusMinusIcon :class="[isOpen ? 'opened' : 'closed']" />
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="isOpen" class="content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PlusMinusIcon from '@/components/UI/PlusMinusIcon.vue'

const props = defineProps({
	title: { type: String, default: 'Название заголовка'}
})

const isOpen = ref(false)

const toggleAccordion = () => {
	isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">

$padding: 12px 18px;
.accordion {
  overflow: hidden;

  .header {
    position: relative;
    padding: $padding;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.15s ease-in-out;

    &:hover {
      box-shadow: inset 0 0 100px 0 rgba(255, 255, 255, 0.03);
    }
  }

  .content {
    padding: $padding;
    border-top: 1px solid var(--ghost-grey);
  }
}
</style>