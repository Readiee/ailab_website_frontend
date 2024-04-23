<template>
  <div id="contacts-section" class="container">
    <div class="section">
      <SectionHeader title="Связь с нами" caption="Если у Вас есть вопросы, то Вы всегда можете написать нам!" />
      <form @submit.prevent="submitForm">
        <div class="form-line">
          <AppInput id="name" v-model="formData.name" placeholder="Ваше имя" type="text" required />
          <AppInput id="email" v-model="formData.email" placeholder="Ваша почта" type="email" required />
        </div>
        <AppTextarea id="question" v-model="formData.question" placeholder="Ваш вопрос" type="text" required />
        
        <div class="action mt-2">
          <transition name="fade" mode="out-in">
            <AppBtn v-if="!sendedState" key="1" :loading="loading" variant="plain">Отправить</AppBtn>
            <AppBtn v-else key="2" class="afterActionCaption cursor-default" variant="plain">Отправлено!</AppBtn>
          </transition>

          <transition name="fade" mode="out-in">
            <p v-if="isVisible" class="error-message">
              Что-то пошло не так.
            </p>
          <!-- <AppNotifyDialog :is-visible="true" message="Что-то пошло не так." /> -->
          </transition>
        </div>
      </form>

      <div class="map mt-16">
        <AppMap />
        <div class="flex justify-between mt-3 map-undercaption">
          <a class="underline" href="https://yandex.ru/maps/62/krasnoyarsk/house/ulitsa_akademika_kirenskogo_26k1/bUsYcQ5nTE0BQFtvfXV4dXhnYg==/?ll=92.797579%2C55.994324&z=19.54">ул. Академика Киренского, 26, к.1</a>
          <a href="tel:+71234567890">+7 123 456 78 90</a>
        </div>
      </div>
    </div>

    <div class="design">
      <img class="light-1" src="@/assets/images/light-2.png" alt="design">
      <img class="light-2" src="@/assets/images/light-3.png" alt="design">
      <img class="light-3" src="@/assets/images/light-2.png" alt="design">
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import AppInput from '@/components/UI/AppInput.vue'
import AppTextarea from '@/components/UI/AppTextarea.vue'
import { ref } from 'vue'
import { createContact } from '@/api/home.api'
import AppBtn from '@/components/UI/AppBtn.vue'
import AppMap from '@/components/AppMap.vue'
// import AppNotifyDialog from '@/components/UI/AppNotifyDialog.vue'

const formData = ref({
	name: '',
	email: '',
	question: '',
})

const loading = ref(false)
const sendedState = ref(false)

const isVisible = ref(false)

const showNotification = () => {
	isVisible.value = true
	setTimeout(() => {
		isVisible.value = false
	}, 3000)
}

const submitForm = async () => {
	loading.value = true
	try {
		await createContact(formData.value)
		formData.value.name = ''
		formData.value.email = ''
		formData.value.question = ''
		sendedState.value = true
	} 
	catch (err) {
		console.log(err)
		showNotification()
	} 
	finally {
		loading.value = false
		setTimeout(() => {
			sendedState.value = false
		}, 4000)
	}
}

</script>

<style scoped lang="scss">
.action {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  // & > button {
    // width: 160px;
  // }
  .afterActionCaption {
  font-size: 16px;
  color: var(--grey);
  }

  .error-message {
  // color: red;
  position: absolute;
  top: 2.5rem;
}
}

.map {
  max-width: 1080px;
  width: 100%;
}
.section {
  width: 100%;
  form {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    .form-line {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 32px;

      @media screen and (max-width: 564px) {
        flex-direction: column;
      }
    }
    
    input {
        width: 100%;
      }
      textarea {
        width: 100%;
        height: 90px;
        resize: none;
      }
  }
}

.map-undercaption {
  @media screen and (max-width: 461px) {
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 20px;
  }
}


.container {
  position: relative;
}
.design {
    & > img {
      position: absolute;
      pointer-events: none;
      z-index: -1;
    }

    .light-2 {
      top: 12rem;
      right: 0rem;
    }

    .light-1 {
      width: 320px;
      top: 16rem;
      left: -5rem;
    }

    .light-3 {
      width: 320px;
      top: 42rem;
      right: 0rem;
    }

}

</style>