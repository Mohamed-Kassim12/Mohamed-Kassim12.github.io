var navbar, logo;

window.onload = function() {
	navbar = document.getElementById("navbar");
	logo = document.getElementById("logo");
}

window.onscroll = function() {
	changeNavbarStatement();
}

function changeNavbarStatement() {
	if (document.body.scrollTop > 77 || document.documentElement.scrollTop > 77) {
		logo.classList.add("hidden");
		navbar.style.opacity = 0.8;
		navbar.style.fontSize = "10px";
	}
	else {
		if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
			logo.classList.remove("hidden");
			navbar.style.opacity = 1;
			navbar.style.fontSize = "14px";
		}
	}
}