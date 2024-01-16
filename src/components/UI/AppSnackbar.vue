<template>
  <div class="snackbar red base-box">
    <slot>Hahaha</slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.snackbar {
    position: fixed;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    min-width: 300px;
    padding: 24px;
    z-index: 100;
}

.snackbar.red {
    background-color: #de0000;
}
</style>