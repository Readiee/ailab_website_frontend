<template>
  <div id="news-section" class="container">
    <div class="section">
      <SectionHeader
        :title="props.title"
        caption="Оставайтесь в курсе последних достижений и событий нашей лаборатории"
      />

      <div class="news-list">
        <template v-for="n in news.slice(0, countOfNewsToShow)" :key="n">
          <NewCard :new="n" />
        </template>
      </div>

      <AppBtn v-if="!allNewsAreShowed" class="mt-12" variant="plain" @click="showMoreNews">Показать еще</AppBtn>
    </div>

    <div class="design">
      <img class="light-1" src="@/assets/images/light-3.png" alt="design">
      <img class="light-2" src="@/assets/images/light-2.png" alt="design">
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import NewCard from '@/components/NewCard.vue'
import AppBtn from '@/components/UI/AppBtn.vue'
import useNews from '@/hooks/useNews'
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { news, currentNewId } = useNews()

watch(() => route.params.id, (newVal) => {
	currentNewId.value = Number(newVal)
})

const props = defineProps({
	title: { type: String, default: 'Новости'}
})

const countOfCardsInARow = route.name == 'home' ? 3 : 2 
const countOfNewsToShow = ref(countOfCardsInARow)
const allNewsAreShowed = computed(() => {
	return countOfNewsToShow.value >= news.value.length
}) 

const showMoreNews = () => {
	if(countOfNewsToShow.value < news.value.length) {
		countOfNewsToShow.value += countOfCardsInARow
	}
}

</script>

<style scoped lang="scss">
.section {
  width: 100%;
  .news-list {
  // width: 100%;
  display: flex;
  justify-content: start;
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