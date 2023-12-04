<template>
  <nav>
    <div class="container">
      <RouterLink to="/"><img class="logo" src="@/assets/logo.svg"></RouterLink>
      <ul>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/projects">Проекты</RouterLink>
        <RouterLink to="/publications">Публикации</RouterLink>
        <RouterLink to="/team">Команда</RouterLink>
      </ul>
      <AppBtn size="small" type="secondary" @click="scrollToContactUs()">Связь с нами</AppBtn>
    </div>
  </nav>
</template>

<script setup lang="ts">
import AppBtn from '@/components/UI/AppBtn.vue'

const scrollToContactUs = () => {
	console.log('scroll')
}
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  z-index: 100;
  // left: 0;
  // right: 0;
  width: 100vw;

  /* height: 80px;
  padding: 0 48px;
  display: grid;
  grid-template-columns: 140px 1fr 140px;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center; */

  background: rgba(5, 0, 12, 0.60);
  backdrop-filter: blur(37.5px);

  .container {
    margin: 0 auto;
    height: 80px;
    display: grid;
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
}

.logo {
  margin-right: auto;
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

</style>