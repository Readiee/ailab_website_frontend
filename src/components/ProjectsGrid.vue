<template>
  <div class="projects-grid">
    <template v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" />
    </template>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import useProjects from '@/hooks/useProjects'

const { projects } = useProjects()

</script>

<style scoped>

</style>