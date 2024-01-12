<template>
  <div class="menu-burger">
    <input id="menu" v-model="isMenuOpen" type="checkbox" style="display: none;">
    <label for="menu" :class="buttonClasses" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isMenuOpen = defineModel()

const buttonClasses = computed(() => {
	return {
		'menu-toggle': true,
		'is-active': isMenuOpen.value,
	}
})
</script>

<style scoped lang="scss">
$buttonWidth: 20px;
$buttonHeight: 16px;
$buttonColor: white;
$lineThickness: 2px;
$transitionSpeed: .2s;
$transitionEasing: ease-in-out;

// Demo
.menu-toggle {
  position: relative;
  display: block;
  width: $buttonWidth;
  height: $buttonHeight;
  
  background: transparent;
  border-top: $lineThickness solid;
  border-bottom: $lineThickness solid;
  
  color: $buttonColor;
  font-size: 0;
  
  transition: all $transitionSpeed $transitionEasing;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: $lineThickness;
    
    position: absolute;
    top: 50%;
    left: 50%;
    
    background: currentColor;
    
    transform: translate(-50%, -50%);
    transition: transform $transitionSpeed $transitionEasing;
  } 
}

label:hover {
  color: lighten($buttonColor, 15%);
}

label.is-active {
  border-color: transparent;

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

label {
  border: none;
  cursor: pointer;
  outline: none;
}
</style>