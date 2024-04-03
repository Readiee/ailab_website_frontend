export interface Project {
	photo: string,
	title: string,
	description: string,
	is_realized: boolean,
	type: number, // 0 - photo, 1 - video
	slug: string,

	authors: Employee[],
	instruction: string,
}

export interface Publication {
	title: string,
	authors: string,
	journal: string,
	link: string,
}

export interface Employee {
	photo: string,
	post: string,
	last_name: string,
	first_name: string,
	patronymic: string,
	link: string,
}

export interface Contact {
	name: string,
	email: string,
	question: string,
}

export interface New {
	id: number,
	photo: string,
	title: string,
	text: string,
	desc: string,
	date: Date,
}