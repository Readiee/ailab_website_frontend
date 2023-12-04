import { onMounted, ref } from 'vue'
import { getEmployees } from '@/api/home.api'
import type { Employee } from '@/api/types'

export default function useemployees() {
	const employees = ref<Employee[]>([])

	const fetching = async () => {
		try {
			const response = await getEmployees()
			employees.value = response.data
			console.log(employees.value)
		} catch (err) {
			console.log(err)
		}
	}

	onMounted(fetching)

	return {
		employees
	} 
}
