import { mainApi } from '@/api/index'
import type { Contact } from '@/api/types'

export async function getProjects() {
	return mainApi.get('/get-projects/')
}

export async function getPublications() {
	return mainApi.get('/get-publications/')
}

export async function getEmployees() {
	return mainApi.get('/get-employees/')
}

export async function createContact( contact:Contact ) {
	return mainApi.post('/create-contact/', contact)
}