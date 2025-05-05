document.addEventListener('DOMContentLoaded', function () {
	NProgress.configure({ showSpinner: false });
	NProgress.start();
});
  
  window.addEventListener('load', function () {
	NProgress.done();
});
  
const titleElement = document.querySelector('.search-title');
if (titleElement) {
	const text = titleElement.textContent;
	titleElement.innerHTML = '';

	text.split('').forEach((letter, index) => {
		const span = document.createElement('span');
		span.textContent = letter;
		span.style.animationDelay = `${index * 0.2}s`;
		titleElement.appendChild(span);
	});
}