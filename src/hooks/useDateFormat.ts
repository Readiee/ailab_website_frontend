export default function formatDate(date: Date): string {
	const months = [
		'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
		'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
	]

	const day = date.getDate()
	const monthIndex = date.getMonth()
	const year = date.getFullYear()

	return `${day} ${months[monthIndex]}, ${year}`
}