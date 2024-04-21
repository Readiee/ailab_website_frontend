<template>
  <div class="home-view">
    <HomeHeader />
    <PartnersSection />
    <ProjectsSection />
    <PublicationsSection />
    <EmployeesSection />
    <ArticlesSection />
    <ContactUsSections />
  </div>
</template>

<script setup lang="ts">
import HomeHeader from '@/components/home/HomeHeader.vue'
import PartnersSection from '@/components/home/PartnersSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import PublicationsSection from '@/components/home/PublicationsSection.vue'
import EmployeesSection from '@/components/home/EmployeesSection.vue'
import ArticlesSection from '@/components/home/ArticlesSection.vue'
import ContactUsSections from '@/components/home/ContactUsSections.vue'
// import AppSectionIndent from '@/components/AppSectionIndent.vue'
</script>

<style scoped lang="scss">
.home-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    width: 100%;
    margin-top: 120px;
  }
  & > *:first-child {
    margin-top: 110px;

    @media screen and (max-width: 767px) {
      margin-top: 70px;
    }

    @media screen and (max-width: 564px) {
      margin-top: 32px;
    }
  }
}

</style>