<template>
  <div id="desktop-project-card" class="project-item cursor-pointer flex-col-reverse flex gap-3" @click="routeToProject()">
    <div class="start">
      <div class="start__top">
        <h5>{{ props.project.title }}</h5>
        <p class="mt-2 text-xs">{{ props.project.description }}</p>
      </div>
    </div>
    <div class="end">
      <div class="img-container">
        <img :src="props.project.photo" alt="image">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--ghost-grey);
  background: var(--dark);
  // backdrop-filter: blur(37.5px);
}

#desktop-project-card {
  width: 100%;

  .start {
    width: 100%;
    display: flex;
    flex-direction: column;
    .start__top {
      h4 {
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
        line-height: normal;

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
}

.img-container {
  position: relative;
  width: 100%;
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
  display: block;
  border-radius: 6px;
} 

</style>