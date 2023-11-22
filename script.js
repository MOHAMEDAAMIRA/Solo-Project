// Tableau pour stocker les patients
var patients = [
{   nom: "Aamira",
    prenom: "Mohamed",
    date_naissance:"03/04/1996",
    age: 27,
    telephone: "21955975",
    email: "aamira.mohamed@gmail.com",
    adresse: "Rue de la Paix",
    dernier_rv: "11/10/2023",
    prochain_rv: "11/01/2024",
    note_consultations:"1. Detartrage"
},
{
    nom: "Dupont",
    prenom: "Marie",
    date_naissance: "12/05/1980",
    age: 42,
    telephone: "0123456789",
    email: "marie.dupont@example.com",
    adresse: "Avenue des Roses",
    dernier_rv: "03/10/2023",
    prochain_rv: "15/01/2024",
    note_consultations: "2. Extraction dentaire"
  },
  {
    nom: "Martin",
    prenom: "Sophie",
    date_naissance: "25/08/1995",
    age: 27,
    telephone: "0765432109",
    email: "sophie.martin@example.com",
    adresse: "Rue de la Liberté",
    dernier_rv: "01/09/2023",
    prochain_rv: "10/12/2023",
    note_consultations: "Traitement de canal"
  },
  {
    nom: "Lefevre",
    prenom: "Luc",
    date_naissance: "18/03/1972",
    age: 50,
    telephone: "0987654321",
    email: "luc.lefevre@example.com",
    adresse: "Place de la Gare",
    dernier_rv: "20/11/2023",
    prochain_rv: "05/03/2024",
    note_consultations: "3. Contrôle de routine"
  }
];

// Fonction pour ajouter un patient
function ajouterPatient() {
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var age = $('#age').val();

    // Créer un objet patient
    var patient = {
        nom: nom,
        prenom: prenom,
        age: age
    };

    // Ajouter le patient au tableau
    patients.push(patient);

    // Mettre à jour la liste des patients
    afficherListePatients();

    // Effacer le formulaire
    $('#add-patient-form')[0].reset();
}

// Fonction pour afficher la liste des patients

// Fonction pour supprimer un patient
function supprimerPatient(index) {
    // Supprimer le patient du tableau
    patients.splice(index, 1);

    // Mettre à jour la liste des patients
    afficherListePatients();
}

// Fonction pour modifier les informations d'un patient
function modifierPatient(index) {
    var nom = prompt('Nouveau nom :', patients[index].nom);
    var prenom = prompt('Nouveau prénom :', patients[index].prenom);
    var age = prompt('Nouvel âge :', patients[index].age);

    // Mettre à jour les informations du patient
    patients[index].nom = nom;
    patients[index].prenom = prenom;
    patients[index].age = age;

    // Mettre à jour la liste des patients
    afficherListePatients();
}

function afficherListePatients() {
    var patientsListe = $('#patients-list');
    patientsListe.empty();

    // Parcourir le tableau des patients et les ajouter à la liste
    for (var i = 0; i < patients.length; i++) {
        var patient = patients[i];

        // Ajouter un bouton de suppression et de modification pour chaque patient
        patientsListe.append('<li>' +
        '<a href="details_patient.html?index=' + i + '">' + patient.nom + ' ' + patient.prenom + ' - Age : ' + patient.age + ' ans</a>' +
            ' <button id= supprimer onclick="supprimerPatient(' + i + ')">Supprimer</button>' +
            ' <button id= modifier onclick="modifierPatient(' + i + ')">Modifier</button></li>');
    }
}

// Appeler la fonction d'affichage initiale
$(document).ready(function() {
    afficherListePatients();
});
