<template>
  <AppNavigation />
  <div class="main">
    <RouterView />
  </div>
  <AppFooter id="footer" />
</template>

<script setup lang="ts">
import AppNavigation from '@/components/AppNaviagtion.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  flex-grow: 1;
  padding-top: 120px;
}

#footer {
  flex-shrink: 0;
}
</style>
