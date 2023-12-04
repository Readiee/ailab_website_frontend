<template>
  <input v-model="modelValue">
</template>

<script setup lang="ts">
const modelValue = defineModel()
</script>

<style scoped lang="scss">
input {
  padding: 8px;
  border: none;
  border-bottom: 2px solid var(--ghost-grey);
  background-color: transparent;
  color: white;
  transition: 0.2s ease-in-out;

  &::placeholder {
    color: var(--dark-grey);
  }
  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid var(--purple);
  }
}
</style>