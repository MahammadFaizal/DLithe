import {Workbox} from "/en-in/workbox-window.prod.mjs";

if ("serviceWorker" in navigator) {
	const wb = new Workbox("/service-worker.js");

	wb.addEventListener("installed", event => {
		if (event.isUpdate) {
			window.location.reload();
		}
	});
	wb.addEventListener("externalinstalled", event => {
		if (event.isUpdate) {
			window.location.reload();
		}
	});
	wb.addEventListener("activated", event => {
		(new Image()).src = "https://olawebcdn.com/images/v1/Manifest/img_logomark@4x.png";
	});
	wb.register();
}
