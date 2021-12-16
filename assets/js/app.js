function addParticipant(event) {
  // j'empeche le fonctionnement par default du bouton pour éviter le rechargement de la page
  event.preventDefault(event);

  //je récupère le nom du participant
  const nameInputElt = document.getElementById("nameInput");

  // je creer mon prénom
  const participantName = nameInputElt.value.trim();

  // si le nom est vide j affiche un message d'erreur
  if (participantName === "") {
    alert("le nom est obligatoire");
    return;
  }

  //je créé un element li qui contient le prénom
  const participantElt = `
<li>${participantName}</li>
`;

  //je récupère ul qui contient la list des participants
  const participantListElt = document.getElementById("participantList");

  //j'ajoute mon élément li à l'élément ul
  participantListElt.innerHTML = participantListElt.innerHTML + participantElt;

  // je vide l'input
  nameInputElt.value = "";
}
// je récupère le formulaire d'ajout de nom
const addNameFormElt = document.getElementById("addNameForm");

//quand on soumet le formulaire, je veux que la fonction
addNameFormElt.addEventListener("submit", addParticipant);
