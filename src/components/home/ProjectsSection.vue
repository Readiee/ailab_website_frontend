<template>
  <div class="container">
    <div class="section">
      <SectionHeader title="Проекты" caption="Наши реализованные и текущие исследовательские проекты" />
      <ProjectsTypeSwitch v-model="isRealizedSwitch" class="mb-8" />

      <!-- <ProjectsGrid :projects="projects" /> -->
      <div class="projects-list">
        <template v-for="project in projects" :key="project">
          <ProjectCard :project="project" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import ProjectsGrid from '@/components/ProjectsGrid.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectsTypeSwitch from '@/components/ProjectsTypeSwitch.vue'
import useProjects from '@/hooks/useProjects'

const { projects, isRealizedSwitch } = useProjects()

</script>

<style scoped lang="scss">
.section {
  width: 100%;
  .projects-list {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 20px;

  transition: 0.2 ease-in-out;
  }
}

</style>