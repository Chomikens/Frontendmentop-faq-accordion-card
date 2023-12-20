// Get parent container to use event delegation pattern

const faqContainer = document.querySelector('.flex__faq--wrapper')

// Funtion to show accordion on click
function handleShowOnClick(e) {
	const header = e.target.closest('.faq__item__header')

	if (header) {
		const accordion = header.parentElement
		const content = header.nextElementSibling
		const contenrInnerHeight = content.firstElementChild.getBoundingClientRect().height

		accordion.classList.toggle('is-open')

		accordion.classList.contains('is-open')
			? (content.style.height = `${contenrInnerHeight}px`)
			: (content.style.height = `0px`)
	}
}

faqContainer.addEventListener('click', handleShowOnClick)
