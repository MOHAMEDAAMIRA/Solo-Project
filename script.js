// Tableau pour stocker les patients
var patients = [];

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
        patientsListe.append('<li>' + patient.nom + ' ' + patient.prenom + ' - Age : ' + patient.age + ' ans' +
            ' <button id= supprimer onclick="supprimerPatient(' + i + ')">Supprimer</button>' +
            ' <button id= modifier onclick="modifierPatient(' + i + ')">Modifier</button></li>');
    }
}

// Appeler la fonction d'affichage initiale
$(document).ready(function() {
    afficherListePatients();
});
