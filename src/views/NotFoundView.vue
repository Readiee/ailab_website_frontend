<template>
  <div class="contaner px-5 flex items-center flex-1" style="min-height: 300px;">
    <div class="flex items-center justify-center flex-col gap-4 text-center">
      <h1>Страница не найдена</h1>
      <p>К сожалению, запрашиваемая вами страница не найдена.</p>
      <AppBtnWithIcon class="mt-6" icon="forward" @click="router.push({ name: 'home' })">На главную</AppBtnWithIcon>
    </div>

    <div class="design" />
  </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppBtnWithIcon from '@/components/UI/AppBtnWithIcon.vue'

const router = useRouter()
</script>
  
<style scoped lang="scss">
.design {
    * {
        position: absolute;
    }
    #light-top {
        left: 0;
        bottom: 0;
    }
    #light-left {
        right: 20rem;
        bottom: 20rem;
    }
    #light-right {
        left: 30rem;
        bottom: 30rem;
    }
    #light-bottom {
        left: 40rem;
        bottom: 40rem;
    }
}  
</style>