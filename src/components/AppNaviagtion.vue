<template>
  <nav>
    <!-- Desktop -->
    <div id="desktop_nav" class="container gap-1">
      <RouterLink to="/">
        <img class="logo" src="@/assets/logo.svg" @click="scrollToHeader">
      </RouterLink>
      <ul>
        <a @click="scrollToHeader()">Главная</a>
        <a @click="scrollToSection('projects-section')">Проекты</a>
        <a @click="scrollToSection('publications-section')">Публикации</a>
        <a @click="scrollToSection('team-section')">Команда</a>
        <a @click="scrollToSection('articles-section')">Новости</a>
      </ul>
      <AppBtn 
        size="small" 
        kind="secondary" 
        @click="scrollToSection('contacts-section')"
      >
        Связь с нами
      </AppBtn>
    </div>

    <!-- Mobile -->
    <div id="mobile_nav" class="container flex justify-between items-center">
      <RouterLink to="/"><img class="logo" src="@/assets/logo.svg"></RouterLink>
      <MenuBurger v-model="isMenuOpen" class="menu-icon" />
    </div>  
  </nav>

  <transition name="fade">
    <div v-if="isMenuOpen" class="menu">
      <div class="container">
        <ul class="flex flex-col gap-8 py-10">
          <a @click="scrollToHeader()">
            Главная
            <img src="@/assets/icons/forward.svg" alt="">
          </a>
          <a @click="scrollToSection('projects-section')">
            Проекты
            <img src="@/assets/icons/forward.svg" alt="">
          </a>
          <a @click="scrollToSection('publications-section')">
            Публикации
            <img src="@/assets/icons/forward.svg" alt="">
          </a>
          <a @click="scrollToSection('team-section')">
            Команда
            <img src="@/assets/icons/forward.svg" alt="">
          </a>
          <a @click="scrollToSection('articles-section')">
            Новости
            <img src="@/assets/icons/forward.svg" alt="">
          </a>
          <a @click="scrollToSection('contacts-section')">
            Связь с нами
            <img src="@/assets/icons/forward.svg" alt="">
          </a>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import AppBtn from '@/components/UI/AppBtn.vue'
import MenuBurger from '@/components/UI/MenuBurger.vue'
import { ref } from 'vue'
import scrollTo from '@/hooks/scrollTo'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)
const scrollToHeader = () => {
	router.push({ name: 'home'}).then(() => {
		window.scrollTo({ top: 0, behavior: 'smooth'})
	})
	isMenuOpen.value = false
}

const scrollDelay = 100

const scrollToSection = (sectionId:string) => {
	router.push({ name: 'home'}).then(() => {
		setTimeout(() => {
			scrollTo(sectionId)
		}, scrollDelay)
	})	
	isMenuOpen.value = false
}

</script>

<style scoped lang="scss">
.menu {
      backdrop-filter: blur(37.5px);
      background-color: rgba(15, 0, 37, 0.1);
      position: fixed;
      right: 0;
      left: 0;
      top: 64px;
      bottom: 0;
      z-index: 100;
      display: flex;
      justify-content: center;

      a {
        font-family: 'Xolonium', sans-serif;
        color: white;
      }

      
      ul > * {
        display: flex;
        justify-content: space-between;
      }
}

nav {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;

  background: rgba(5, 0, 12, 0.60);
  backdrop-filter: blur(37.5px);

  border-bottom: var(--ghost-grey) 1px solid;

  #desktop_nav {
    @media screen and (max-width: 1023px) {
      display: none;
    }

    margin: 0 auto;
    height: 80px;
    display: grid;;
    grid-template-columns: 140px 1fr 140px;
    grid-template-rows: 1fr;
    align-items: center;

    & > *:first-child {
      justify-self: start;
    }

    & > *:last-child {
      justify-self: end;
    }
  }

  #mobile_nav {
    margin: 0 auto;
    height: 64px;

    .menu-icon {
      width: 24px;
      img {
        width: 20px;
      }
    }

    @media screen and (min-width: 1024px) {
      display: none;
    }

  }
         
  .logo {
      margin-right: auto;
      height: 16px;

      @media screen and (max-width: 564px) {
        height: 14px;
      }
    }


    ul {
      /* position: absolute; */
      margin: 0 auto;

      padding: 12px 8px;
      font-size: 14px;
      text-align: center;
      border-radius: 6px;
      border: 1px solid var(--ghost-grey);

      align-self: center;
    }

    ul a.router-link-exact-active {
      color: var(--purple);
      font-family: 'JuraDemiBold';
    }

    ul a {
      display: inline-block;
      padding: 0 1rem;
    }
}

</style>