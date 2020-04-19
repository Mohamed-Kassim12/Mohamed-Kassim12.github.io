function animationProduits(produit) {
	var fond = document.getElementById("fond");
	if (produit == "macbook-pro")
		fond.style.opacity = 0.7; // Change l'intensité du fond noir
	else
		fond.style.opacity = 0.85; // Change l'intensité du fond noir (plus sombre ici car l'imac est très clair)

	var presentation = document.getElementById("presentation");
	presentation.style.opacity = 1; // Fait apparaître le texte
}