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
  min-height: 100%;
  padding-top: 110px;
	flex: 1 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#footer {
	flex: 0 0 auto;
}
</style>
