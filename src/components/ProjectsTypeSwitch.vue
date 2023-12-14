
<template>
  <div class="switch-group">
    <input id="one" v-model="picked" type="radio" value="done">
    <label class="switch-button-start" :class="{ selected: picked == 'done'}" for="one">Реализованные</label>
    <input id="two" v-model="picked" type="radio" value="notDone">
    <label class="switch-button-end" :class="{ selected: picked != 'done'}" for="two">Текущие</label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const picked = ref('done')
const modelValue = defineModel()

watch(picked, (newValue) => {
	modelValue.value = newValue == 'done'
})
</script>

<style scoped lang="scss">
.switch-group {
    width: 100%;
    display: flex;
    justify-content: center;
    input {
        display: none;
    }

    label {
        padding: 12px;
        background: var(--dark);
        border: 2px solid var(--purple);

        width: 200px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;

        font-family: 'Xolonium';
        font-weight: 400;

        border-radius: 4px;
        box-shadow: 0px 0px 6px 0px var(--purple);
        color: #fff;
        transition: 0.15s ease-in-out;

        &.selected {
            transition: 0.15s ease-in-out;
            background: var(--purple);
        }

        @media screen and (max-width: 564px) {
            font-size: 14px;
            width: 170px;
        }
    }
    .switch-button-start {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
    }

    .switch-button-end {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: none;
    }
}

</style>