<template>
  <div class="container flex gap-6">
    <div class="content w-full">
      <div class="content__header mb-4">
        <span class="color-caption text-sm">Новость</span>
        <h3 class="mt-4 mb-4 uppercase">{{ newItem?.title }}</h3>
        <p v-if="newItem">{{ formatDate(newItem.date) }}</p>
      </div>

      <div class="mt-6">
        <AppImage v-if="newItem" :x="16" :y="9" :img="newItem.photo" />
      </div>

      <div class="text mt-8">
        <!-- <p>{{ newItem?.text }}</p> -->
        <div v-html="newItem?.text" />    
      </div>
    </div>
  </div>

  <NewsSection title="Другие новости" style="margin-top: 160px;" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useNew from '@/hooks/useNew'
import { watch } from 'vue'
import NewsSection from '@/components/home/NewsSection.vue'
import AppImage from '@/components/UI/AppImage.vue'
import formatDate from '../hooks/useDateFormat'

const route = useRoute()
const { newItem, id } = useNew()

watch(() => route.params.id, (newVal) => {
	id.value = Number(newVal)
})

watch(newItem, newValue => {
	if (newValue?.title) {
		document.title = newValue.title + ' — ' + 'НУЛ СИИ ИКИТ'
	}
})
</script>

<style scoped>
.container {
  max-width: 1120px;

  .content__header {
    margin-top: 24px;
    @media screen and (max-width: 510px) {
      margin-top: -8px;
    }

    h3 {
      font-size: 24px;
      line-height: normal;

      @media screen and (max-width: 510px) {
        font-size: 18px;
      }
    }

    span {
      letter-spacing: 10%;
      
      @media screen and (max-width: 510px) {
        /* font-size: 12px; */
      }
    }
  }
}

.text{
    div {
      font-size: 34px !important;
    }
  }
</style>