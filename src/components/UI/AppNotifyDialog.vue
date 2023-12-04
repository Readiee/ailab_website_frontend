<template>
  <transition name="fade">
    <div v-if="props.isVisible" class="notification">
      <slot>
        <h4>{{ message }}</h4>
      </slot>
    </div>
  </transition>
</template>
  
<script setup lang="ts">

const props = defineProps({
	isVisible: { type: Boolean, default: false },
	message: { type: String, default: 'Что-то пошло не так.' },
})
</script>
  
  <style scoped>
  .notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 24px;
    /* background-color: var(--dark); */
    background-color: #b73e3e;
    /* border: 2px var(--ghost-grey) solid; */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
  </style>
  