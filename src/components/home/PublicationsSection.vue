<template>
  <div class="container">
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

</style>