$(document).ready(function() {
    // Récupérer l'index du patient à partir de l'URL
    var params = new URLSearchParams(window.location.search);
    var index = params.get('index');

    // Vérifier si l'index est valide
    if (index !== null && index >= 0 && index < patients.length) {
        // Récupérer le patient correspondant à l'index
        var patient = patients[index];

        // Afficher les détails du patient
        afficherDetailsPatient(patient);
    } else {
        // Rediriger vers la page d'accueil si l'index n'est pas valide
        window.location.href = 'index.html';
    }
});

function afficherDetailsPatient(patient) {
    var detailsPatientSection = $('#details-patient');

    // Construire le contenu des détails du patient
    var detailsHtml = '<h2>' + patient.nom + ' ' + patient.prenom + '</h2>' +
                      '<p>Âge : ' + patient.age + ' ans</p>' +
                      '<p>Adresse : ' + (patient.adresse ? patient.adresse : 'Non spécifiée') + '</p>' +
                      '<p>Téléphone : ' + (patient.telephone ? patient.telephone : 'Non spécifié') + '</p>' +
                      '<p>Email : ' + (patient.email ? patient.email : 'Non spécifié') + '</p>' +
                      '<p>Date de naissance : ' + (patient.date_naissance ? patient.date_naissance : 'Non spécifiée') + '</p>' +
                      '<p>Dernier rendez-vous : ' + (patient.dernier_rv ? patient.dernier_rv : 'Non spécifié') + '</p>' +
                      '<p>Prochain rendez-vous : ' + (patient.prochain_rv ? patient.prochain_rv : 'Non spécifié') + '</p>' +
                      '<p>Notes des consultations : ' + (patient.note_consultations ? patient.note_consultations : 'Non spécifiées') + '</p>';

    // Ajouter le contenu à la section des détails du patient
    detailsPatientSection.html(detailsHtml);
}

