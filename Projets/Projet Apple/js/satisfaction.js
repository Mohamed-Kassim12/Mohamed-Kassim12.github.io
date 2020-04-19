function changeCouleur(id) {
	var label;

	tLabels = ["ts", "s", "n", "p", "pdt"];

	var couleur;
	switch(id) {
		case tLabels[0]:
			couleur = "rgba(0, 150, 0, 0.8)";
			break;
		case tLabels[1]:
			couleur = "rgba(80, 200, 80, 0.8)";
			break;
		case tLabels[2]:
			couleur = "rgba(200, 200, 0, 0.8)";
			break;
		case tLabels[3]:
			couleur = "rgba(255, 160, 0, 0.8)";
			break;
		case tLabels[4]:
			couleur = "rgba(255, 0, 0, 0.8)";
			break;
		default:
			console.err("id de label inconnu : " + id);
			break;
	}

	// Style n°1 - Bordure et Couleur du texte

	var i;
	for (i = 0; i < tLabels.length; i++) {
		label = document.getElementById(tLabels[i]);
		label.style.border = "0px solid black";
		label.style.color = "white";
	}

	label = document.getElementById(id);
	label.style.border = "2px solid " + couleur;
	label.style.color = couleur;

	// Style n°2 - Background

	// var i;
	// for (i = 0; i < tLabels.length; i++) {
	// 	label = document.getElementById(tLabels[i]);
	// 	label.style.backgroundColor = "transparent";
	// }

	// label = document.getElementById(id);
	// label.style.backgroundColor = couleur;
}