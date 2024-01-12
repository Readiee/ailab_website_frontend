<template>
  <button :class="buttonClasses">
    <slot v-if="!loading" key="1" /> 
    <AppSpinner v-else key="2" />
  </button>
</template>
  
<script setup lang="ts">
import { computed } from 'vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'

const props = defineProps({
	size: { type: String, default: 'medium' },
	kind: { type: String, default: 'primary' },
	loading: { type: Boolean, default: false },
	variant: { type: String, default: 'common' }, 
})
  
const buttonClasses = computed(() => {
	return {
		'btn': true,
		'btn-small': props.size == 'small',
		'btn-medium': props.size == 'medium',
		'btn-large': props.size == 'large',
		'btn-primary': props.kind == 'primary',
		'btn-secondary': props.kind == 'secondary',
		'btn-plain': props.variant == 'plain',
		'disabled': props.loading == true 
	}
})
</script>
  
<style lang="scss">
  
  .btn {
    width: fit-content;
    min-width: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    font-family: 'Xolonium';
    font-weight: 400;

    border-radius: 6px;
    box-shadow: 0px 0px 6px 0px #6F00FB;
    color: #fff;
    transition: 0.15s ease-in-out;
  }

  .disabled {
    // color: var(--grey);
    pointer-events: none;
  }
  
  .btn-small {
    height: 42px;
    padding: 12px 16px;
    font-size: 12px;
    border-radius: 4px;
  }
  .btn-medium {
    padding: 14px 24px;
    font-size: 16px;
    border-radius: 4px;
  }
  
  .btn-large {
    padding: 16px 28px;
    font-weight: 700;
    font-size: 18px;

  }
  
  .btn-primary {
    background: var(--primary);

    &:hover {
      box-shadow: 0px 0px 16px 0px #6F00FB;
      color: white
    }
  }
  
  .btn-secondary {
    border: 2px solid #6F00FB;
    background: var(--dark);

    &:hover {
      background: var(--purple);
      box-shadow: 0px 0px 16px 0px #6F00FB;
    }
  }

  .btn-plain {
    min-height: 36px;
    font-weight: 400;
    padding: 8px;
    background: none;
    box-shadow: none;

    &:hover {
      box-shadow: none;
      color: var(--purple)
    }
  }
  </style>
  