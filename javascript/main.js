const content = document.getElementsByTagName('main')[0];
const header = document.getElementsByTagName('header')[0].children;

for (let i = 0; i < header.length; i++) {
	if (header[i].tagName == 'H1' || header[i].tagName == 'P') {
		header[i].style.opacity = 1;
	}
}

setTimeout(() => content.style.opacity = 1, 150);