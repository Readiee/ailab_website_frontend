<template>
  <div class="container">
    <div class="wrapper">
      <h1>
        <span class="plain">Лаборатория</span>
        <br>
        <span class="gradient-text"> искусственного<br>интеллекта </span>
        <span class="plain">ИКИТ СФУ</span>
      </h1>
      <p class="my-6">Добро пожаловать в лабораторию искусственного интеллекта,<br>где мы преображаем фантазии в инновации!</p>
      <AppBtnWithIcon class="mt-2" icon="forward" @click="router.push({ name: 'projects' })">К проектам</AppBtnWithIcon>
    </div>

    
    <div class="design">
      <img id="light-top" src="@/assets/images/light-2.png" alt="design">
      <img id="light-left" src="@/assets/images/light-1.png" alt="design">
      <img id="light-right" src="@/assets/images/light-2.png" alt="design">
      <img id="light-bottom" src="@/assets/images/light-3.png" alt="design">

      <img id="shape-left" src="@/assets/images/shape-left.png" alt="design">
      <img id="shape-right" src="@/assets/images/shape-right.png" alt="design">
      <img id="shape-bottom" src="@/assets/images/shape-bottom.png" alt="design">
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBtnWithIcon from '@/components/UI/AppBtnWithIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped lang="scss">
.wrapper {
  padding-bottom: 140px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-size: 3rem;
    font-family: 'Xolonium', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 3.2rem;
    letter-spacing: 1.5px;
  }

  p {
    line-height: normal;
    font-weight: 400;
  }

  .plain {
    background: white;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.gradient-text {
  background: linear-gradient(90deg, #5C24FF 0%, #d034ff 40%, #FFB8E3 80%, #5C24FF 100%);
  background-size: 300% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradientAnimation 7s infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 300% 0%;
  }
}


.container {
  position: relative;
  // border: 2px solid red;
  .design {
    // display: none;

    & > img {
      position: absolute;
      pointer-events: none;
      z-index: -1;
    }

    #light-top {
      top: -35rem;
      right: 5rem;
    }

    #light-left {
      top: -16rem;
      left: -20rem;
    }

    #light-right {
      width: 35%;
      top: -2rem;
      right: -11rem;
    }

    #light-bottom {
      top: 0;
      left: 5rem;
    }

    #shape-left {
      top: -6rem;
      left: -8rem;
    }

    #shape-right {
      bottom: 0;
      right: -5rem;
    }

    #shape-bottom {
      bottom: -3rem;
      left: 20rem;
    }
  } 
}

</style>