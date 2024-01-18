<template>
  <div id="team-section" class="container">
    <div class="section">
      <SectionHeader
        title="Команда"
        caption="Наша многогранная исследовательская команда профессионалов, объедининяющая  опыт и страсть к инновациям"
      />

      <!-- <div class="employess-list">
        <template v-for="employee in employees.slice(0, 6)" :key="employee">
          <EmployeeCard :employee="employee" />
        </template>
      </div> -->

      <EmployeesCarousel />
    </div>

    <div class="design">
      <img class="light-1" src="@/assets/images/light-3.png" alt="design">
      <img class="light-2" src="@/assets/images/light-2.png" alt="design">
    </div>
  </div>
</template>

<script setup lang="ts">
// import ProjectsGrid from '@/components/ProjectsGrid.vue'
import SectionHeader from '@/components/SectionHeader.vue'
// import EmployeeCard from '@/components/EmployeeCard.vue'
import EmployeesCarousel from '@/components/EmployeesCarousel.vue'
// import useEmployees from '@/hooks/useEmployees'

// const { employees } = useEmployees()

</script>

<style scoped lang="scss">
.section {
  width: 100%;
  .employess-list {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;

  transition: 0.2 ease-in-out;
  }
}

.carousel {
  width: 100%;
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