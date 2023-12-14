<template>
  <div id="desktop-project-card" class="project-item">
    <div class="start py-3">
      <div class="start__top">
        <h3>{{ props.project.title }}</h3>
        <p class="mt-3">{{ props.project.description }}</p>
      </div>
      <div class="start__bottom">
        <h4 v-if="props.project.is_realized" class="primary">РЕАЛИЗОВАНО</h4>
        <h4 v-else class="primary">РАЗРАБАТЫВАЕТСЯ</h4>
        <AppBtnWithIcon variant="plain" @click="routeToProject()">Узнать больше</AppBtnWithIcon>
      </div>
    </div>
    <div class="end">
      <div class="img-container">
        <img :src="props.project.photo" alt="image">
      </div>
    </div>
  </div>

  <div id="mobile-project-card" class="project-item" @click="routeToProject()">
    <div class="start py-1">
      <div class="img-container">
        <img :src="props.project.photo" alt="image">
      </div>
    </div>
    <div class="end">
      <div class="end__top mb-2">
        <h3>{{ props.project.title }}</h3>
        <p class="mt-2">{{ props.project.description }}</p>
      </div>
      <div class="end__bottom mt-auto">
        <h4 v-if="props.project.is_realized" class="primary">РЕАЛИЗОВАНО</h4>
        <h4 v-else class="primary">РАЗРАБАТЫВАЕТСЯ</h4>
        <AppBtnWithIcon variant="plain" @click="routeToProject()">Узнать больше</AppBtnWithIcon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBtnWithIcon from '@/components/UI/AppBtnWithIcon.vue'
import type { Project } from '@/api/types'
import { useRouter } from 'vue-router'

const props = defineProps({
	project: { type: Object as () => Project, required: true }
})

const router = useRouter()

const routeToProject = () => {
	let type = 'photo'
	if (props.project.type == 1) {
		type = 'video'
	}
	const path = '/projects/' + type + '/' + props.project.slug

	if (props.project.is_realized) {
		router.push({ path: path })
	}
}

</script>

<style scoped lang="scss">
.project-item {
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--ghost-grey);
  background: var(--dark);
  // backdrop-filter: blur(37.5px);
}

#desktop-project-card {
  width: 100%;
  // max-width: 1080px;

  display: flex;
  justify-content: space-between;
  gap: 48px;

  .start {
    width: 100%;
    display: flex;
    flex-direction: column;
    .start__top {
      h3 {
        text-transform: uppercase;

      display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; 

        -webkit-line-clamp: 4; 
      }
      P {
        // font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; 

        -webkit-line-clamp: 5;
        
        @media screen and (max-width: 1280px) {
          -webkit-line-clamp: 3;
        }

      }
    }
    .start__bottom {
      // border: 2px red solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      h4 {
        text-transform: uppercase;
        // color: var(--purple)
      }
    }
  }

  .end {
    width: 100%;
  }

  @media screen and (max-width: 959px) {
      display: none;
  }
}

.img-container {
  position: relative;
  width: 100%;
  // max-width: 480px;
}

.img-container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(97, 0, 255, 0.25); 
  pointer-events: none; 
  border-radius: 6px;
}

.img-container img {
  width: 100%;
  // height: auto;
  // height: 270px;
  display: block;
  border-radius: 6px;
} 


#mobile-project-card {
  width: 100%;
  padding: 20px 24px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;


  .end {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .end__top {
    margin-top: 10px;
      h3 {
        font-size: 16px;
        line-height: 1.25em;
        text-transform: uppercase;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; 

        -webkit-line-clamp: 4; 
      }
      P {
        font-size: 14px;
        line-height: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; 

        -webkit-line-clamp: 4;
      }
    }

  .end__bottom {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    h4 {
      font-size: 11px;
    }

    button {
      font-size: 13px;
      padding: 8px 0;
    }
  }
  }

  @media screen and (max-width: 959px) {
      display: flex;
      flex-grow: 1;
      min-width: 350px;
      flex-basis: 0;
  }

  
  @media screen and (max-width: 448px) {
    padding: 12px 16px;
  }
}
</style>