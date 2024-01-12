function handleFormSubmit(event) {
	console.log('handleFormSubmit is started')
	event.preventDefault()

	let form_data = new FormData(applicantForm)

	fetch('http://127.0.0.1:8080/photo/test/offer', {
		method: 'POST',
		body: form_data,
	})
		.then(response => response.blob())
		.then(blob => URL.createObjectURL(blob))
		.then(url => {
			image.src = url
			link.href = url
			link.download = 'image.jpg'
			console.log(applicantForm)
			console.log('applicantForm')
		})
		.catch((err) => console.error(err))
}
const link = document.getElementById('download-link')
const image = document.getElementById('processed-image')
const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)
  