<template>
  <div class="container flex gap-6">
    <div class="content w-full">
      <div class="content__header mt-4">
        <span class="color-caption text-sm">Новость</span>
        <h3 class="mt-4 mb-4 uppercase text-lg">{{ articleItem?.title }}</h3>
        <p v-if="articleItem" class="text-base">
          {{ formatStringDate(articleItem.date) }}
        </p>
      </div>
      <div class="image mt-6">
        <AppImage v-if="articleItem" class="h-96" :x="16" :y="9" :img="articleItem.photo" />
      </div>
      <div class="text-base mt-8">
        <div v-html="articleItem?.text" />  
      </div>
    </div>
  </div>
  <ArticlesSection title="Другие новости" style="margin-top: 160px;" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useArticle from '@/hooks/useArticle'
import { watch } from 'vue'
import ArticlesSection from '@/components/home/ArticlesSection.vue'
import AppImage from '@/components/UI/AppImage.vue'
import formatStringDate from '@/hooks/useDateFormat'
const route = useRoute()
const { articleItem, slug } = useArticle()

watch(() => route.params.slug, (newVal) => {
	slug.value = String(newVal)
})

watch(articleItem, newVal => {
	if (newVal?.title) {
		document.title = newVal.title + ' — ' + 'НУЛ СИИ ИКИТ'
	}
})
</script>

<style scoped lang="scss">
.container {
  max-width: 980px;

  .content__header {
    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow: hidden;
    
    @media screen and (max-width: 510px) {
      margin-top: -8px;
    }

    h3 {
      /* font-size: 20px; */
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

/* .image {
  max-width: 500px;
} */
</style>