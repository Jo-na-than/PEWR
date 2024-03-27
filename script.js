// Fonction pour afficher la date et l'heure actuelles

function afficherDateHeure() {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const dateHeure = date.toLocaleDateString("fr-FR", options);
  document.getElementById("dateHeure").innerHTML = dateHeure;
}

// Appel de la fonction pour afficher la date et l'heure

afficherDateHeure();

// Fonction pour afficher un message d'alerte

function afficherAlerte() {
  alert("Ceci est un message d'alerte !");
}

// Ajout d'un événement click sur le bouton

document.getElementById("boutonAlerte").addEventListener("click", afficherAlerte);
