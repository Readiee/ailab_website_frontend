import { onMounted, ref } from 'vue'
import { getPublications } from '@/api/home.api'
import type { Publication } from '@/api/types'

export default function usePublications() {
	const publications = ref<Publication[]>([])

	const fetching = async () => {
		try {
			const response = await getPublications()
			publications.value = response.data
			console.log(publications.value)
		} catch (err) {
			console.log(err)
		}
	}

	onMounted(fetching)

	return {
		publications
	} 
}

// Подгрузка новых публикаций (кнопкой "Загрузить еще") - нужен параметр page

// const page = ref(1); // Номер страницы
// const loading = ref(false);

// const fetchData = async () => {
// 	try {
// 	  	loading.value = true;
// 	  	const response = await axios.get(`/api/data?page=${page.value}`);
// 	  	publications.value = [...publications.value, ...response.data]; // Добавление новых данных
// 	  	page.value += 1;
// 	} catch (error) {
// 	  	console.error('Ошибка при загрузке данных', error);
// 	} finally {
// 	  	loading.value = false;
// 	}
//   };
  
//   // Загрузка данных при монтировании компонента
//   onMounted(() => {
// 		fetchData();
//   });
  
//   // Функция для загрузки дополнительных данных
//   const loadMore = () => {
// 		fetchData();
//   };

