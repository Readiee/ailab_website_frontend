<template>
  <div class="home-view">
    <HomeHeader />
    <PartnersSection />
    <ProjectsSection />
    <PublicationsSection />
    <EmployeesSection />
    <ContactUsSections />
  </div>
</template>

<script setup lang="ts">
import HomeHeader from '@/components/home/HomeHeader.vue'
import PartnersSection from '@/components/home/PartnersSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import PublicationsSection from '@/components/home/PublicationsSection.vue'
import EmployeesSection from '@/components/home/EmployeesSection.vue'
import ContactUsSections from '@/components/home/ContactUsSections.vue'
</script>

<style scoped lang="scss">
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    width: 100%;
    margin-top: 120px;
  }
  & > *:first-child {
    margin-top: 110px;
  }
}
</style>