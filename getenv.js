console.log(`Fetching environment variables...`)
const envSection = document.querySelector(`#section-environment`)
if (envSection) {
	// Create .env contents
	const lines = []
	const keyEls = envSection.querySelectorAll(`dt`)
	const valEls = envSection.querySelectorAll(`dd`)
	for (let i = 0; i < keyEls.length; i++) {
		const key = keyEls[i].textContent
		const val = valEls[i].textContent
		lines.push(`${key} = "${val}"`)
	}
	const contents = lines.join(`\n`)
	console.log(contents)

	// Copy to clipboard
	const el = document.createElement(`textarea`)
	el.value = contents
	document.body.appendChild(el)
	el.select()
	document.execCommand(`copy`)
	document.body.removeChild(el)

	console.log(`Copied environment variables`)
}
else {
	console.log(`No environment variables found`)
}