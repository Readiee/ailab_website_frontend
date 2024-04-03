<template>
  <div id="new-card" class="new-item cursor-pointer" @click="routeToNew()">
    <div class="start py-1">
      <div class="img-container">
        <img class="aspect-[16/9] cursor-pointer" :src="props.new.photo" alt="image" @click="routeToNew()">
      </div>
    </div>
    <div class="end mt-1">
      <div class="end__top">
        <!-- <h4 class="primary mb-3">{{ formatDate(props.new.date) }}</h4> -->
        <h3>{{ props.new.title }}</h3>
        <p class="mt-3 mb-4">{{ props.new.desc }}</p>
      </div>
      <div class="end__bottom mt-auto">
        <AppBtnWithIcon size="medium" variant="plain" @click="routeToNew()">Читать статью</AppBtnWithIcon>
        <!-- <p class="text-base font-semibold">{{ formatDate(props.new.date) }}</p> -->
        <p class="text-base font-semibold">22 февраля, 2023</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBtnWithIcon from '@/components/UI/AppBtnWithIcon.vue'
import type { New } from '@/api/types'
import { useRouter } from 'vue-router'
import formatDate from '@/hooks/useDateFormat'

const props = defineProps({
	new: { type: Object as () => New, required: true }
})

const router = useRouter()

const routeToNew = () => {
	const path = '/news/' + props.new.id
	router.replace({ path: path })
}

</script>

<style scoped lang="scss">
.new-item {
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--ghost-grey);
  background: var(--dark);
  // backdrop-filter: blur(37.5px);
}

.img-container {
  position: relative;
  width: 100%;
  // max-width: 480px;
}

.img-container::before {
  transition: 0.15s ease-in-out;

  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(97, 0, 255, 0.25); 
  pointer-events: none; 
  border-radius: 6px;
}

.img-container img {
  width: 100%;
  // height: auto;
//   height: 270px;
  display: block;
  border-radius: 6px;
} 


#new-card {
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 402px;
  min-width: 350px;
  // max-width: calc(50% - 20px); 
  // max-width: 402px;  
  padding: 20px 24px;

  .end {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0 4px;
    .end__top {
    margin-top: 10px;
      h3 {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.25em;
        text-transform: uppercase;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; 

        -webkit-line-clamp: 4; 
      }
      P {
        font-size: 16px;
        line-height: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; 

        -webkit-line-clamp: 3;
      }
    }

  .end__bottom {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    h4 {
      font-size: 11px;
    }

    button {
        padding: 8px 0;
    }
  }
  }

  @media screen and (max-width: 959px) {
      display: flex;
      flex-grow: 1;
      min-width: 350px;
      flex-basis: 0;

      padding: 20px 24px;
      
      button {
        font-size: 13px;
    }
  }

  
  @media screen and (max-width: 448px) {
    padding: 14px 18px;
  }
}
</style>