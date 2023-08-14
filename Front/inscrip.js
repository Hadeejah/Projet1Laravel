const selectNiveau = document.querySelector(".select-niveau");
const selectClasse = document.querySelector(".select-classe");
const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const profil = document.querySelector("#profil");
const birth = document.querySelector("#dateNaissance");
 const sexe = document.querySelector("#sexe");
 const niveau = document.querySelector("#niveau");
 const classe = document.querySelector("#classe");
const lieuNaiss=document.querySelector('#lieuNaissance')
const btnIns=document.querySelector('#btn')



fetch("http://127.0.0.1:8000/breukh-api/niveau")
  .then((response) => response.json())
  .then((data) => {
  
    data.forEach((niveau) => {
      let opt = document.createElement("option");
      opt.innerHTML = niveau.libelle;
      opt.value = niveau.id;
      selectNiveau.appendChild(opt);
    });
  });
selectNiveau.addEventListener("change", () => {
  let idNiveau = selectNiveau.value;

  fetch("http://127.0.0.1:8000/breukh-api/niveau/" + idNiveau)
    .then((response) => response.json())
    .then((data) => {
      selectClasse.innerHTML = "";

      data.classes.forEach((classes) => {
        let opt1 = document.createElement("option");
        opt1.innerHTML = classes.nom;
        opt1.value = classes.id;
        selectClasse.appendChild(opt1);
      });
    });
});

btnIns.addEventListener("click",()=>{
  nameElewe=nom.value
  prenomElewe=prenom.value
  claElewe=classe.value
  nivElewe=niveau.value
  proElewe=profil.value
  birthElewe=birth.value
  sexeElewe=sexe.value
  lieuNaissElewe=lieuNaiss.value

  data={
    nom:nameElewe,
    prenom:prenomElewe,
    classe:claElewe,
    niveau:nivElewe,
    profile:proElewe,
    dateNaissance:birthElewe,
    sexe:sexeElewe,
    lieuNaissance:lieuNaissElewe

  }
 console.log(data);
  fetch("http://127.0.0.1:8000/breukh-api/eleves", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Données insérées avec succès:', data);
    })
    .catch(error => {
        console.error('Erreur lors de l\'insertion des données:', error);
    });
})