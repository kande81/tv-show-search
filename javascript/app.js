// JavaScript Document
const form = document.querySelector('#searchform');
const imageContainer =  document.querySelector('.main');

let searchTerms = '';

form.addEventListener('submit', async function(e) {
	e.preventDefault();
	if (imageContainer.firstChild) {
		reset();
	}
	searchTerms = form.elements.query.value;
	const config = {params: {q:searchTerms } }
	const res = await axios.get(` https://api.tvmaze.com/search/shows`, config);
	makeImages(res.data);
	form.elements.query.value = '';
	})

const makeImages = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			const img = document.createElement('img');
			img.src = result.show.image.medium
			imageContainer.append(img);
		}
	}
}

const reset = () => {
	imageContainer.textContent = '';
}