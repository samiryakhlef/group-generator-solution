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
<li class="participant">${participantName}</li>
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

function generateGroupe(participants, numberGroup) {
  // je veux trier un tableau de nombre aleatoirement
  //la fonction map prend un tableau en entrée
  //applique une fonction sur chaque element du tableau
  //et retourne un nouveau tableau
  const sorted = participants
    .map((participant) => ({ name: participant, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((participant) => participant.name);

  // je veux générer des groupes de noms

  const groupArr = [];
  for (let i = 0; i < numberGroup; i++) {
    groupArr.push([]);
  }
  var groupArrIndex = 0;
  while (sorted.length > 0) {
    groupArr[groupArrIndex].push(sorted.pop());
    groupArrIndex++;
    if (groupArrIndex >= groupArr.length) {
      groupArrIndex = 0;
    }
  }

  // afficher les groupes sur la page
  const groupListElt = document.getElementById("groupList");

  for (let groupList = 0; groupList < groupArr.length; groupList++) {
    let groupElt = `
    <div class="card bg-light mb-3" style="max-width: 20rem;">
        <div class="card-header">Goupe${groupList + 1}</div>
            <div class="card-body">
            
            <ul>`;
    // Pour chaque groupe j'affiche la liste des des participant
    for (
      let participantList = 0;
      participantList < groupArr[groupList].length;
      participantList++
    ) {
      groupElt += `<li>${groupArr[groupList][participantList]}</li>`;
    }

    groupElt += `
              </ul>
          </div>
      </div>
      `;
    groupListElt.innerHTML += groupElt;
  }
}
const generateForm = document.getElementById("generateGroup");
generateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //récuperer le nombre de groupes
  const numberGroup = parseInt(document.getElementById("groupNumber").value);
  const participants = [];

  // on veut récuperer la liste des paticipants
  const participantElt = document.querySelectorAll(".participant");

  const participantsElt = document.querySelectorAll(".participant");
  participantsElt.forEach((element) => participants.push(element.textContent));
  generateGroupe(participants, numberGroup);
});
