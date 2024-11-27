function handleNewsletterFormSubmit(event) {
	event.preventDefault()

	const form = event.target
	const apiUrl = form.action  // Get the URL from the form's action attribute
	const submitButton = form.querySelector('button[type="submit"]')
	const signupSuccess = form.querySelector('.newsletter-signup-success')

	// Block the submit button to prevent multiple submissions
	submitButton.disabled = true

	// Gather form data
	const formData = new FormData(form)

	// Make POST request to the URL specified in the form's action
	fetch(apiUrl, {
		method: 'POST',
		mode: 'no-cors', // This bypasses CORS but limits response handling
		body: formData,
	}).then(() => {
		// Assume success since we can't read the actual response status in no-cors mode
		signupSuccess.style.display = 'flex'
	}).catch(() => {
		submitButton.disabled = false
	})
}
