<template>
  <footer>
    <div class="container wrapper">
      <div class="container__start">
        <TheAppLogo class="cursor-pointer" @click="scrollToHeader" />
      </div>
      <div class="container__end">
        <a href="https://about.sfu-kras.ru/node/10201">Политика конфиденциальности</a>
        <a href="https://about.sfu-kras.ru/node/10201">Положение о ПД</a>
      </div>
    </div>

    <hr>

    <div class="container wrapper">
      <div class="container__start">
        <p>2024. Все права защищены.</p>
      </div>
      <div class="container__end logos">
        <a href="https://vk.com/anna_pyataeva">
          <svg class="svg-hover" width="34" height="30" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2199 5.92624C33.4562 5.1521 33.2199 4.58325 32.095 4.58325H28.3754C27.4297 4.58325 26.9936 5.07465 26.7572 5.61651C26.7572 5.61651 24.8655 10.1452 22.1859 13.0868C21.319 13.9384 20.9249 14.2094 20.452 14.2094C20.2156 14.2094 19.8608 13.9384 19.8608 13.1643V5.92624C19.8608 4.99727 19.5989 4.58325 18.8107 4.58325H12.9655C12.3745 4.58325 12.0191 5.0144 12.0191 5.42302C12.0191 6.30367 13.3588 6.50676 13.4969 8.984V14.3642C13.4969 15.5437 13.28 15.7576 12.8071 15.7576C11.5462 15.7576 8.47886 11.2088 6.65966 6.00362C6.30314 4.99192 5.94556 4.58325 4.99493 4.58325H1.27531C0.212563 4.58325 0 5.07465 0 5.61651C0 6.58421 1.26103 11.3838 5.87158 17.7316C8.94525 22.0666 13.2759 24.4166 17.2165 24.4166C19.5809 24.4166 19.8734 23.8947 19.8734 22.9957V19.7192C19.8734 18.6754 20.0974 18.467 20.8461 18.467C21.3978 18.467 22.3435 18.738 24.5503 20.8282C27.0724 23.3054 27.4882 24.4166 28.9067 24.4166H32.6264C33.6891 24.4166 34.2205 23.8947 33.9139 22.8646C33.5784 21.8381 32.3744 20.3488 30.7767 18.5832C29.9097 17.5768 28.6092 16.493 28.2151 15.951C27.6634 15.2544 27.8211 14.9448 28.2151 14.3255C28.2151 14.3255 32.747 8.05504 33.2199 5.92624Z" fill="#8E8E8E" />
          </svg>
        </a>

        <a href="https://t.me/apyataeva">
          <svg class="svg-hover" width="34" height="30" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.9031 3.03241L28.7722 27.2296C28.3848 28.9371 27.3756 29.3621 25.9414 28.5582L18.123 22.797L14.351 26.4257C13.9333 26.8434 13.5847 27.192 12.7796 27.192L13.3418 19.2303L27.831 6.13767C28.4613 5.57661 27.6938 5.26451 26.8522 5.82678L8.93959 17.1063L1.22806 14.692C-0.449045 14.1686 -0.479405 13.0149 1.57781 12.2097L31.7402 0.589011C33.1368 0.0655988 34.3585 0.898687 33.9031 3.03241Z" fill="#8E8E8E" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import TheAppLogo from '@/components/TheAppLogo.vue'

const router = useRouter()
const scrollToHeader = () => {
	router.push({ name: 'home'}).then(() => {
		window.scrollTo({ top: 0, behavior: 'smooth'})
	})
}
</script>

<style scoped lang="scss">
hr {
  width: 100%;
}

footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 48px 0;
  padding-top: 240px;
  row-gap: 8px;

  * {
    font-size: 14px;
  }
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    display: flex;
    gap: 16px;
  }
}

@media screen and (max-width: 504px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  .container__end {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .logos {
    flex-direction: row;
    gap: 24px;
  }
}
</style>