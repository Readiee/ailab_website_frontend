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
    <div class="design">
      <img class="light-1" src="@/assets/images/light-3.png" alt="design">
      <img class="light-2" src="@/assets/images/light-2.png" alt="design">
      <img class="light-3" src="@/assets/images/light-3.png" alt="design">
      <img class="light-4" src="@/assets/images/light-2.png" alt="design">
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
.container {
  position: relative;
}
.section {
  width: 100%;
  .projects-list {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: 24px;

    transition: 0.2 ease-in-out;
  }
}

.design {
    & > img {
      position: absolute;
      pointer-events: none;
      z-index: -1;
    }

    .light-1 {
      top: -4rem;
      left: -12rem;
    }

    .light-2 {
      width: 430px;
      top: 6rem;
      right: 0rem;
    }

    .light-3 {
      width: 320px;
      top: 54rem;
      right: 0rem;
    }

    .light-4 {
      width: 440px;
      top: 98rem;
      left: -12rem;
    }
}

</style>