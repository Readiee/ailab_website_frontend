<template>
  <div class="container">
    <div class="section">
      <SectionHeader
        title="Команда"
        caption="Наша многогранная исследовательская команда профессионалов, объедининяющая  опыт и страсть к инновациям"
      />

      <div class="employess-list">
        <template v-for="employee in employees.slice(0, 6)" :key="employee">
          <EmployeeCard :employee="employee" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import ProjectsGrid from '@/components/ProjectsGrid.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import EmployeeCard from '@/components/EmployeeCard.vue'
import useEmployees from '@/hooks/useEmployees'

const { employees } = useEmployees()

</script>

<style scoped lang="scss">
.section {
  width: 100%;
  .employess-list {
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 24px;

  transition: 0.2 ease-in-out;
  }
}

</style>