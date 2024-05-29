window.addEventListener('load', function () {
	document.querySelector('body').classList.add("loaded")
});

document.addEventListener("DOMContentLoaded", function () {
	var menuIcon = document.getElementById("menu-icon");
	var header = document.getElementById("header");

	menuIcon.addEventListener("click", function () {
		if (header.classList.contains("header-closed")) {
			header.classList.remove("header-closed");
			header.classList.add("header-open");
		} else {
			header.classList.remove("header-open");
			header.classList.add("header-closed");
		}
	});
});