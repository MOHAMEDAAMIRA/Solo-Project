// Table for data
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



  function ajouterPatient() {
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var age = $('#age').val();

    // Simple input validation (age should be a positive number)
    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    var patient = {
        nom: nom,
        prenom: prenom,
        age: age
    };

    patients.push(patient);

    afficherListePatients();

    $('#add-patient-form')[0].reset();
}


function supprimerPatient(index) {
    patients.splice(index, 1);
    afficherListePatients();
}

function modifierPatient(index) {
    var nom = prompt('New name:', patients[index].nom);
    var prenom = prompt('New first name:', patients[index].prenom);
    var age = prompt('New age:', patients[index].age);
    var date_naissance = prompt('New date of birth:', patients[index].date_naissance);
    var telephone = prompt('New phone number:', patients[index].telephone);
    var email = prompt('New email:', patients[index].email);
    var adresse = prompt('New adresse:', patients[index].adresse);
    var dernier_rv = prompt('New last RV:', patients[index].dernier_rv);
    var prochain_rv = prompt('New next RV:', patients[index].prochain_rv);
    var note_consultations = prompt('New note consultations:', patients[index]);

    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    patients[index].nom = nom;
    patients[index].prenom = prenom;
    patients[index].age = age;
    patients[index].date_naissance= date_naissance;
    patients[index].telephone = telephone;
    patients[index].email = email;
    patients[index].adresse = adresse;
    patients[index].dernier_rv = dernier_rv;
    patients[index].prochain_rv = prochain_rv;
    patients[index].note_consultations = note_consultations;

    afficherListePatients();
}

function afficherListePatients() {
    var patientsListe = $('#patients-list');
    patientsListe.empty();

    for (var i = 0; i < patients.length; i++) {
        var patient = patients[i];

        patientsListe.append('<li>' +
            '<span class="patient-info">' +
            '<strong>' + patient.nom + ' ' + patient.prenom + '</strong></span>' +
            '<div class="patient-details" id="patient-details-' + i + '"></div>' +
            ' <button class="details-button" onclick="toggleDetails(' + i + ')">Details</button>' +
            ' <button onclick="supprimerPatient(' + i + ')">Delete</button>' +
            '</li>');
    }
}

function afficherDetails(index) {
    var detailsContainer = $('#patient-details-' + index);
    detailsContainer.empty();

    var patient = patients[index];

    detailsContainer.append('<p><strong>Nom:</strong> ' + patient.nom + '</p>' +
        '<p><strong>Prénom:</strong> ' + patient.prenom + '</p>' +
        '<p><strong>Age:</strong> ' + patient.age + ' ans</p>' +
        '<p><strong>Date de naissance:</strong> ' + patient.date_naissance + '</p>' +
        '<p><strong>Téléphone:</strong> ' + patient.telephone + '</p>' +
        '<p><strong>Email:</strong> ' + patient.email + '</p>' +
        '<p><strong>Adresse:</strong> ' + patient.adresse + '</p>' +
        '<p><strong>Dernier Rendez-vous:</strong>' + patient.dernier_rv + '</p>' +
        '<p><strong>Prochain Rendez-vous:</strong> ' + patient.prochain_rv + '</p>' +
        '<p><strong>Note de consultations:</strong> ' + patient.note_consultations + '</p>' +
        '<button onclick="modifierPatient(' + index + ')">Modifier</button>');
}

function toggleDetails(index) {
    var detailsContainer = $('#patient-details-' + index);
    detailsContainer.toggle();
    if (detailsContainer.is(':visible')) {
        afficherDetails(index);
    }
}