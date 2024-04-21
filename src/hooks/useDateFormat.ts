// export default function formatDate(date: Date): string {
// 	const months = [
// 		'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
// 		'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
// 	]

// 	const day = date.getDate()
// 	const monthIndex = date.getMonth()
// 	const year = date.getFullYear()

// 	return `${day} ${months[monthIndex]}, ${year}`
// }

export default function formatStringDate(dateString: string): string {
	const date = new Date(dateString)
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}
	const formattedDate = date.toLocaleDateString('ru-RU', options)
	return formattedDate
}
