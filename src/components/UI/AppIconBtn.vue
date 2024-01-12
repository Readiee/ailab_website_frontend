<template>
  <button class="button" @click="toggleVar = !toggleVar">
    <div class="icon">
      <svg
        v-if="props.icon=='switch'"
        id="Layer_1"
        :class="{ 'rot': toggleVar }"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
      >
        <path
          d="M64,256H0C0,114.8,114.8,0,256,0c68.4,0,133.4,27.4,181,75l52.8-52.8v124.4c0,13.5-10.9,24.4-24.4,24.4H341l50.7-50.7
	C356,84.6,307.3,64,256,64C150.1,64,64,150.1,64,256z M448,256c0,105.9-86.1,192-192,192c-51.3,0-100.1-20.6-135.8-56.2L171,341
	H42.5c-11.2,0-20.4,9.1-20.4,20.4v128.4L75,437c47.6,47.6,112.6,75,181,75c141.2,0,256-114.8,256-256H448z"
        />
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	icon: { type: String, default: 'switch'}
})

const toggleVar = ref(false)
</script>

<style scoped lang="scss">
.button {
    background: rgb(7, 0, 21, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    border: 1px solid var(--ghost-grey);
    width: 46px;
    height: 46px;
    min-width: 0;
    transition: 0.15s ease-in-out;

    &:hover {
        filter: brightness(170%)
    }
    &:active {
        filter: brightness(200%)
    }

    .icon {
        svg {
            width: 20px;
            height: 20px;
            transition: 0.35s ease-in-out;

            path {
                fill: white;
            }
        }
    }
}
</style>