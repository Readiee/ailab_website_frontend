<template>
  <div class="container flex gap-6">
    <div class="content__left w-full">
      <DropfileBox />
    
      <div class="project__main mt-8 mb-4">
        <span class="color-caption text-sm">Проект</span>
        <h3 class="my-2">{{ project?.title }}</h3>
        <p>{{ project?.description }}</p>
      </div>

      <div class="project__authors mt-8 mb-10">
        <span class="color-caption text-sm">Авторы</span>
        <div class="authors-list flex gap-8 mt-4">
          <template v-for="author in project?.authors" :key="author.link">
            <UserGroup :img="author.photo" :title="author.first_name + ' ' + author.last_name" caption="ИКИТ СФУ" />
          </template>
        </div>
      </div>

      <div class="project__instruction">
        <AppAccordion title="Инструкция" :content="project?.instruction">
          <div v-html="project?.instruction" />
        </AppAccordion>
      </div>
    </div>

    <!-- <div class="content__right w-1/3">
      <div class="other-projects-list flex flex-col gap-3">
        <template v-for="otherProject in projects" :key="otherProject.slug">
          <ProjectGroup :project="otherProject" />
        </template>
      </div>
    </div> -->
  </div>

  <ProjectsSection title="Другие проекты" style="margin-top: 120px;" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useProject from '@/hooks/useProject'
import UserGroup from '@/components/UserGroup.vue'
import DropfileBox from '@/components/DropfileBox.vue'
import AppAccordion from '@/components/UI/AppAccordion.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import ProjectGroup from '@/components/ProjectGroup.vue'
import useProjects from '@/hooks/useProjects'


const route = useRoute()
const slug = String(route.params.slug)
const { project } = useProject(slug)

const { projects } = useProjects()
</script>

<style scoped>
.container {
  max-width: 1120px;
}
</style>