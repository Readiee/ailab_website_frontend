<template>
  <div class="carousel">
    <swiper
      ref="{swiperRef}"
      :slides-per-view="3"
      :centered-slides="false"
      :space-between="24"
      :navigation="true"
      :modules="modules"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
        },
        '1200': {
          slidesPerView: 3,
        },
      }"
    >
      <swiper-slide v-for="employee in employees" :key="employee.link">
        <EmployeeCard :employee="employee" />
      </swiper-slide>
    </swiper>

    <div id="mobile-carousel">
      <template v-for="employee in employees" :key="employee.link">
        <EmployeeCard :employee="employee" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
  
import 'swiper/css'
  
import 'swiper/css/pagination'
import 'swiper/css/navigation'
  
import { Pagination, Navigation } from 'swiper/modules'
import useEmployees from '@/hooks/useEmployees'
import EmployeeCard from '@/components/EmployeeCard.vue'

const modules = [Pagination, Navigation]

const { employees } = useEmployees()

</script>

<style lang="scss">

/* Swiper */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
	height: auto;
	object-fit: fill;
}

.swiper-button-next, .swiper-button-prev {
	position: absolute;
	color: white !important;
	transition: .2s ease-in-out;

	&:hover {
		filter: brightness(120%);
	}

	&:active {
		filter: brightness(140%);
	}

	&::after {
		background-color: var(--dark);
		border: 1px solid var(--ghost-grey);
		min-width: 42px;
		min-height: 42px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		font-size: 16px !important;
	}

	&.swiper-button-disabled {
		visibility: hidden;
	}
}

#mobile-carousel {
		width: 100%;
		display: none;
		flex-wrap: nowrap;
		gap: 24px;
		overflow-x: auto;
		padding: 0 24px;

		&::-webkit-scrollbar {
			display: none;
		}
	}

@media screen and (max-width: 1201px) {
	.swiper {
		display: none;
	}

	#mobile-carousel {
		display: flex;
	}

	.carousel {
		width: 100vw !important;
	}
}


</style>
  
<!-- <template>
  <div class="carousel">
    <button ref="leftArrow" class="arrow">&lt;</button>
    <div ref="carousel" class="cards">
      <template v-for="employee in employees" :key="employee.link">
        <EmployeeCard class="card" :employee="employee" />
      </template>
    </div>
    <button ref="rightArrow" class="arrow">&gt;</button>
  </div>
</template>

<script setup lang="ts">
import useEmployees from '@/hooks/useEmployees'
import EmployeeCard from '@/components/EmployeeCard.vue'
import { ref, onMounted } from 'vue'

const { employees } = useEmployees()

const carousel = ref<HTMLElement>()
const leftArrow = ref<HTMLElement>()
const rightArrow = ref<HTMLElement>()

let scrollPos = 0
onMounted(() => {
	if (leftArrow.value) {
		leftArrow.value.addEventListener('click', () => {
			if (carousel.value) {
				alert(scrollPos)
				scrollPos -= carousel.value.offsetWidth / 3
				carousel.value.scrollLeft = scrollPos
			}
		})
	}
	
	if (rightArrow.value && carousel.value) {
		rightArrow.value.addEventListener('click', () => {
			if (carousel.value) {
				alert(scrollPos)
				scrollPos += carousel.value.offsetWidth / 3
				carousel.value.scrollLeft = scrollPos
			}
		})
	}
})


</script>

<style scoped lang="scss">
.carousel {
 width: 100%;
 display: flex;
 align-items: center;
 gap: 24px;
}

.cards {
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.card {
  scroll-snap-align: start;
}

.arrow {
 background: var(--purple);
 border: none;
 font-size: 1.25em;
 font-weight: 700;
 border-radius: 100%;
 min-width: 50px;
 min-height: 50px;
 padding: 0;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
}
</style> -->
