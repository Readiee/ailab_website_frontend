<template>
  <div class=" class-x employee-item hover-border">
    <AppAvatar :img="employee.photo" size="large" />
    <!-- <AppAvatar img="https://sun9-38.userapi.com/impg/6KYYGwuzqxo3up3iFgwr9XQcmwzzzPNxhODSGA/C3mNjb8S4qM.jpg?size=840x1080&quality=95&sign=6ad5d50114c7b105fcc7c77ea21fe3ce&type=album" size="large" />
    <AppAvatar img="https://instacks.sk/storage/articles/491/7ZsMCjSFVekbHkFqeq7HxtcUNnOKUQ5e3YsinYJW.jpg" size="large" />
    <AppAvatar img="https://gu.ru/guruuserpics/guru_yD45Pvn/275a4df3-87ca-4b1c-b379-5981ab800d3f/big.jpg" size="large" />
    <AppAvatar img="https://u-f.ru/sites/default/files/1_1420.jpg" size="large" /> -->
    <h5 class="caption uppercase primary mt-1">{{ props.employee.post }}</h5>
    <div class="title uppercase mb-6">
      <h3>{{ props.employee.first_name }}</h3>
      <h3>{{ props.employee.last_name }}</h3>
    </div>
    <a v-if="props.employee.link" class="mt-auto" :href="props.employee.link">
      <!-- <AppBtnWithIcon variant="plain" size="small">Узнать больше</AppBtnWithIcon> -->
      <button>
        Узнать больше
        <svg
          class="ml-2"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Forward">
            <path class="btn-icon" d="M9 5L15.9632 11.9632L9 18.9263" stroke="grey" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
          </g>
        </svg>
      </button>
    </a>
    <hr v-else class="w-1/2">
  </div>
</template>

<script setup lang="ts">
import type { Employee } from '@/api/types'
// import AppBtnWithIcon from '@/components/UI/AppBtnWithIcon.vue'
import AppAvatar from '@/components/UI/AppAvatar.vue'

const props = defineProps({
	employee: { type: Object as () => Employee, required: true }
})

</script>

<style scoped lang="scss">


.employee-item {
  min-width: 346px; // карточка

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;

  padding: 32px;

  border-radius: 8px;
  border: 1px solid var(--ghost-grey);
  background: var(--dark);
  // backdrop-filter: blur(37.5px);

  .caption {
    line-height: normal;
  }

  button {
    display: inline-flex;
    font-family: 'Xolonium';
    font-weight: 400;
    font-size: 14px;
    align-items: center;


    &:hover path {
      stroke: var(--purple);
    }
  }
}
</style>