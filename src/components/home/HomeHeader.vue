<template>
  <div class="container pt-4">
    <div class="wrapper">
      <h1>
        <span class="plain">Лаборатория</span>
        <br>
        <span class="gradient-text"> искусственного<br>интеллекта </span>
        <span class="plain">ИКИТ СФУ</span>
      </h1>
      <p class="my-6">Добро пожаловать в лабораторию искусственного интеллекта, где мы преображаем фантазии в инновации!</p>
      <p class="mb-10 text-base">Наша лаборатория — часть <a class="text-white " href="https://ai-center.sfu-kras.ru/">Центра ИИ СФУ</a></p>
      <AppBtnWithIcon class="mt-2" icon="forward" @click="scrollTo('projects-section')">К проектам</AppBtnWithIcon>
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
import scrollTo from '@/hooks/scrollTo'
const router = useRouter()
</script>

<style scoped lang="scss">

.wrapper {
  padding-bottom: 130px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Xolonium', sans-serif;
    font-weight: bold;
    text-transform: uppercase;

  }

  p {
    max-width: 530px;
    line-height: normal;
    font-weight: 400;
  }

  .plain {
    background: white;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 1279px) {
    padding-bottom: 120px;
  }

  @media screen and (max-width: 1079px) {
    padding-bottom: 0;
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
      width: 430px;
      top: -10rem;
      left: -4rem;
    }

    #light-right {
      width: 360px;
      top: 1rem;
      right: 0;
    }

    #light-bottom {
      width: 600px;
      top: 4rem;
      left: 5rem;
    }

    #shape-left {
      width: 260px;
      top: -6.5rem;
      left: -2.5rem;
    }

    #shape-right {
      width: 240px;
      top: 8rem;
      right: 1rem;
    }

    #shape-bottom {
      width: 150px;
      bottom: -3rem;
      left: 20rem;
    }

    @media screen and (max-width: 1279px) {
        #light-top {
        top: -35rem;
        right: 5rem;
      }

      #light-left {
        width: 400px;
        top: -11rem;
        left: -7rem;
      }

      #light-right {
        width: 300px;
        top: 3rem;
        right: 0;
      }

      #light-bottom {
        width: 500px;
        top: 5rem;
        left: 3rem;
      }

      #shape-left {
        width: 220px;
        top: -6.5rem;
        left: -2.5rem;
      }

      #shape-right {
        width: 200px;
        top: 8rem;
        right: 0.5rem;
      }

      #shape-bottom {
        width: 130px;
        bottom: -2rem;
        left: 16rem;
      }
    }

    @media screen and (max-width: 1079px) {
        #light-top {
        top: -35rem;
        right: 0;
      }

      #light-left {
        width: 340px;
        top: -10rem;
        left: -10rem;
      }

      #light-right {
        width: 220px;
        top: 4rem;
        right: 0;
      }

      #light-bottom {
        width: 380px;
        top: 11rem;
        left: 0;
      }

      #shape-left {
        display: none;
        // width: 200px;
        // top: -7.5rem;
        // left: -2.5rem;
      }

      #shape-right {
        display: none;
        // width: 160px;
        // top: 11rem;
        // right: 0.5rem;
      }

      #shape-bottom {
        display: none;
        // width: 110px;
        // bottom: -3rem;
        // left: 16rem;
      }
    }

    @media screen and (max-width: 564px) {
        #light-right {
          display: none;
      }
    }
  }
} 


</style>