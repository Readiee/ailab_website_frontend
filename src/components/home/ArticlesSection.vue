<template>
  <div id="articles-section" class="container">
    <div class="section">
      <SectionHeader
        :title="props.title"
        caption="Оставайтесь в курсе последних достижений и событий нашей лаборатории"
      />

      <div class="articles-list">
        <template v-for="n in articles.slice(0, countOfArticlesToShow)" :key="n">
          <ArticleCard :article="n" />
        </template>
      </div>

      <AppBtn v-if="!allArticlesAreShowed" class="mt-12" variant="plain" @click="showMoreArticles">Показать еще</AppBtn>
    </div>

    <div class="design">
      <img class="light-1" src="@/assets/images/light-3.png" alt="design">
      <img class="light-2" src="@/assets/images/light-2.png" alt="design">
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import AppBtn from '@/components/UI/AppBtn.vue'
import useArticles from '@/hooks/useArticles'
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { articles, currentArticleSlug } = useArticles()

watch(() => route.params.slug, (newVal) => {
	currentArticleSlug.value = String(newVal)
})

const props = defineProps({
	title: { type: String, default: 'Новости'}
})

// const countOfCardsInARow = route.name == 'home' ? 3 : 2 
// const countOfArticlesToShow = ref(countOfCardsInARow)
const countOfArticlesToShow = ref(6)
const allArticlesAreShowed = computed(() => {
	return countOfArticlesToShow.value >= articles.value.length
}) 

const showMoreArticles = () => {
	if(countOfArticlesToShow.value < articles.value.length) {
		// countOfArticlesToShow.value += countOfCardsInARow
		countOfArticlesToShow.value += 6
	}
}

</script>

<style scoped lang="scss">
.section {
  width: 100%;
  .articles-list {
  // width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  transition: 0.2 ease-in-out;
  }
}

.container {
  position: relative;
}
.design {
    & > img {
      position: absolute;
      pointer-events: none;
      z-index: -1;
    }

    .light-2 {
      top: -4rem;
      left: -12rem;
    }

    .light-1 {
      width: 320px;
      top: 23rem;
      right: 0rem;
    }


}

</style>