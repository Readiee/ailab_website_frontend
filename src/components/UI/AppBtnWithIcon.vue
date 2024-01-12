<template>
  <button :class="buttonClasses">
    <span v-if="!loading" class="flex items-center">
      <slot />
      <svg
        v-if="props.icon == 'forward'"
        class="icon ml-2"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Forward">
          <path class="btn-icon" d="M9 5L15.9632 11.9632L9 18.9263" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </g>
      </svg>
    </span>
    <!-- <AppSpinner v-if="loading" /> -->
  </button>
</template>
  
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
	size: { type: String, default: 'medium' },
	type: { type: String, default: 'primary' },
	loading: { type: Boolean, default: false },
	icon: { type: String, default: 'forward' }, 
	variant: { type: String, default: 'common' }, 
})
  
const buttonClasses = computed(() => {
	return {
		'btn': true,
		'btn-small': props.size == 'small',
		'btn-medium': props.size == 'medium',
		'btn-large': props.size == 'large',
		'btn-primary': props.type == 'primary',
		'btn-secondary': props.type == 'secondary',
		'btn-plain': props.variant == 'plain',
	}
})

const iconPath = computed(() => {
	return props.icon ? `/src/assets/icons/${props.icon}.svg` : ''
})
</script>
  
<style scoped lang="scss">
  
  .btn {
    width: fit-content;
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
  
  .btn-small {
    padding: 8px 12px 8px 16px;
    font-size: 12px;
    border-radius: 4px;

    .icon {
      width: 16px;
    }
  }
  .btn-medium {
    padding: 14px 16px 14px 24px;
    font-size: 16px;
    border-radius: 4px;
  }
  
  .btn-large {
    padding: 16px 28px;
    font-size: 18px;
  }
  
  .btn-primary {
    background: var(--primary);
    img {
      border: 2px solid red;
    }

    &:hover {
      box-shadow: 0px 0px 16px 0px #6F00FB;
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
    font-weight: 400;
    padding: 8px;
    background: none;
    box-shadow: none;

    &:hover {
      box-shadow: none;
      color: var(--purple)
    }

    &:hover path {
      transition: 0.15s ease-in-out;
      stroke: var(--purple);
    }
    &:not(hover) path {
      transition: 0.15s ease-in-out;
      stroke: white;
    }
  }
  
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 1.5rem;
    height: 1.5rem;
    animation: spin 1s linear infinite;
    position: absolute;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  