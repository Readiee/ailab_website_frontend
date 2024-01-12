<template>
  <textarea :value="props.modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<script setup lang="ts">
const props = defineProps({
	modelValue: { type:String, required: true }
})

const emit = defineEmits(['update:modelValue'])

</script>

<style scoped lang="scss">
textarea {
  padding: 8px;
  border: 2px solid var(--ghost-grey);
  outline: none;
  color: white;
  border-radius: 4px;
  background-color: var(--dark);
  transition: 0.15s ease-in-out;

  &::placeholder {
    color: var(--dark-grey);
  }

  &:focus {
    border: 2px solid var(--purple);
  }
}
</style>