export default function scrollTo (id:string) {
	const element = document.getElementById(id)
	if (element) {
		const offset = 120 // смещение Y
		const elementPosition = element.getBoundingClientRect().top
		const offsetPosition = elementPosition + window.scrollY - offset

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		})
	}
}
