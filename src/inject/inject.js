// Inject the actual scripts
const script = document.createElement('script');

script.src = chrome.extension.getURL('js/main.js');
script.onload = function() {
	this.remove();
};

(document.head || document.documentElement).appendChild(script);
