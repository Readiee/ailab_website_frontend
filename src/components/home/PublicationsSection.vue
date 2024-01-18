<template>
  <div id="publications-section" class="container">
    <div class="section">
      <SectionHeader title="Публикации" caption="Научные статьи и исследования, проведенные в нашей лаборатории" />

      <div class="publications-list">
        <template v-for="(publication, index) in publications.slice(0, 5)" :key="index">
          <PublicationCard :publication="publication" :number="index + 1" />
        </template>
      </div>
      <a class="mt-12" href="https://structure.sfu-kras.ru/node/4384#achieves">
        <AppBtnWithIcon variant="plain">Все публикации</AppBtnWithIcon>
      </a>
    </div>

    <div class="design">
      <img class="light-1" src="@/assets/images/light-3.png" alt="design">
      <img class="light-2" src="@/assets/images/light-2.png" alt="design">
      <img class="light-3" src="@/assets/images/light-2.png" alt="design">
    </div>
  </div>
</template>

<script setup lang="ts">
// import ProjectsGrid from '@/components/ProjectsGrid.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import PublicationCard from '@/components/PublicationCard.vue'
import usePublications from '@/hooks/usePublications'
import AppBtnWithIcon from '@/components/UI/AppBtnWithIcon.vue'

const { publications } = usePublications()

</script>

<style scoped lang="scss">
.section {
  width: 100%;
  .publications-list {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 16px;

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

    .light-1 {
      top: -4rem;
      right: 0rem;
    }

    .light-2 {
      width: 320px;
      top: 18rem;
      left: -12rem;
    }

    .light-3 {
      width: 320px;
      top: 46rem;
      right: 0rem;
    }

}


</style>