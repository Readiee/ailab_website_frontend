<template>
  <div class="circle-plus">
    <div class="circle">
      <div class="horizontal" />
      <div class="vertical" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.closed {
  .vertical {
    transition: all 0.5s ease-in-out;
    transform: rotate(-90deg);
  }
  .horizontal {
    transition: all 0.5s ease-in-out;
    transform: rotate(-90deg);
    opacity: 1;
  }
}

.opened {
  opacity: 1;
  .vertical {
    transition: all 0.5s ease-in-out;
    transform: rotate(90deg);
  }
  .horizontal {
    transition: all 0.5s ease-in-out;
    transform: rotate(90deg);
    opacity: 0;
  }
}

.circle-plus .circle {
    position: relative;
    width: 20px;
    height: 20px;
}

$thickness-1: 16px;
$thickness-2: 2px;

.circle-plus .circle .horizontal {
    position: absolute;
    background-color: white;
    width: $thickness-1;
    height: $thickness-2;
    
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.circle-plus .circle .vertical {
    position: absolute;
    background-color: white;
    width: $thickness-2;
    height: $thickness-1;
    
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}


</style>