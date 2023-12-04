<template>
  <div class="spinner" />
</template>

<script setup lang="ts">

</script>

<style scoped>
  .spinner {
    cursor: default;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    /* border-right: 4px solid var(--purple); */
    /* border-top: 4px solid var(--purple); */
    border-right: 4px solid white;
    border-top: 4px solid white;
    width: 1.25rem;
    height: 1.25rem;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>