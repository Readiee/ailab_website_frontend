import { computed, onMounted, ref, watch } from 'vue'
import { getNew } from '@/api/news.api'
import type { New } from '@/api/types'
import { useRoute } from 'vue-router'

export default function useNew() {
	const route = useRoute()
	const id = ref(Number(route.params.id))
	const data = ref<New>()
	const fetching = async () => {
		try {
			const response = await getNew(id.value)
			data.value = response.data
		} catch (err) {
			console.log(err)
			// Временно
			data.value = {
				id: id.value,
				photo: id.value % 2 == 1 ? 'https://avatars.dzeninfra.ru/get-zen_doc/5295744/pub_640f59e74e2dc92bf3aeb192_640f600d47989f3798852834/scale_1200' : 'https://i.pinimg.com/originals/d5/08/fd/d508fd86b51552bd975fee4ce8783939.jpg',
				title: id.value + ' Искусственный интеллект открывает новые горизонты в медицинской диагностике',
				text: '<p>23 ноября в рамках открытого круглого стола на Красноярском Цифровом Форуме мы провели презентацию проекта "Создание центра компетенции ИИ, оценка уровня решений в промышленности и отраслях"<br><br>Публично представили технологическим партнерам программу Центра, направленную на решение различных задач цифровой промышленности с помощью методов искусственного интеллекта. В рамках обсуждения получили полную поддержку от нашего главного партнера: компании ООО «РУСАЛ ИТЦ» и наметили план дальнейших действий.<br><br>Особенно остро перед жителями Красноярского края сейчас стоит проблема экологии региона, поэтому Центр будет не просто применять ИИ-решения на производстве, но и активно влиять на экологию промышленных производств.</p>',
				desc: 'Искусственный интеллект открывает новые горизонты в медицинской диагностике. Искусственный интеллект открывает новые горизонты в медицинской диагностике. Искусственный интеллект открывает новые горизонты в медицинской диагностике.',
				date: new Date('2023-11-23T12:00:00')
			}
			// router.push({ name: 'notFound' })
		}
	}
	
	const newItem = computed(() => {
		return data.value
	})

	onMounted(() => {
		fetching()
		window.scrollTo({ top: 0, behavior: 'smooth'})
	})

	watch(id, () => {
		// location.reload()
		fetching()
		window.scrollTo({ top: 0, behavior: 'smooth'})
	})

	return {
		id,
		newItem,
	} 
} 