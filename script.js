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



function afficherListePatients(filteredPatients) {
    var patientsListe = $('#patients-list');
    patientsListe.empty();

    var patientsToDisplay = filteredPatients || patients;

    for (var i = 0; i < patientsToDisplay.length; i++) {
        var patient = patientsToDisplay[i];

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

    detailsContainer.append(
        '<p><strong>Nom:</strong> <span id="detail-nom">' + patient.nom + '</span></p>' +
        '<p><strong>Prénom:</strong> <span id="detail-prenom">' + patient.prenom + '</span></p>' +
        '<p><strong>Age:</strong> <span id="detail-age">' + patient.age + ' ans</span></p>' +
        '<p><strong>Date de naissance:</strong> <span id="detail-date_naissance">' + patient.date_naissance + '</span></p>' +
        '<p><strong>Téléphone:</strong> <span id="detail-telephone">' + patient.telephone + '</span></p>' +
        '<p><strong>Email:</strong> <span id="detail-email">' + patient.email + '</span></p>' +
        '<p><strong>Adresse:</strong> <span id="detail-adresse">' + patient.adresse + '</span></p>' +
        '<p><strong>Dernier Rendez-vous:</strong> <span id="detail-dernier_rv">' + patient.dernier_rv + '</span></p>' +
        '<p><strong>Prochain Rendez-vous:</strong> <span id="detail-prochain_rv">' + patient.prochain_rv + '</span></p>' +
        '<p><strong>Note de consultations:</strong> <span id="detail-note_consultations">' + patient.note_consultations + '</span></p>' +
        '<button onclick="editDetails(' + index + ')">Edit</button>'
    );
}

function editDetails(index) {
    var detailsContainer = $('#patient-details-' + index);

    // Replace spans with input fields for each detail
    $('#detail-nom').html('<input type="text" id="edit-nom" value="' + patients[index].nom + '">');
    $('#detail-prenom').html('<input type="text" id="edit-prenom" value="' + patients[index].prenom + '">');
    $('#detail-age').html('<input type="number" id="edit-age" value="' + patients[index].age + '">');
    $('#detail-date_naissance').html('<input type="text" id="edit-date_naissance" value="' + patients[index].date_naissance + '">');
    $('#detail-telephone').html('<input type="text" id="edit-telephone" value="' + patients[index].telephone + '">');
    $('#detail-email').html('<input type="text" id="edit-email" value="' + patients[index].email + '">');
    $('#detail-adresse').html('<input type="text" id="edit-adresse" value="' + patients[index].adresse + '">');
    $('#detail-dernier_rv').html('<input type="text" id="edit-dernier_rv" value="' + patients[index].dernier_rv + '">');
    $('#detail-prochain_rv').html('<input type="text" id="edit-prochain_rv" value="' + patients[index].prochain_rv + '">');
    $('#detail-note_consultations').html('<input type="text" id="edit-note_consultations" value="' + patients[index].note_consultations + '">');

    // Change the Edit button to a Save button
    detailsContainer.find('button').text('Save').attr('onclick', 'saveDetails(' + index + ')');
}

function saveDetails(index) {
    // Retrieve the values from the edited input fields
    var editedNom = $('#edit-nom').val();
    var editedPrenom = $('#edit-prenom').val();
    var editedAge = $('#edit-age').val();
    var editedDateNaissance = $('#edit-date_naissance').val();
    var editedTelephone = $('#edit-telephone').val();
    var editedEmail = $('#edit-email').val();
    var editedAdresse = $('#edit-adresse').val();
    var editedDernierRV = $('#edit-dernier_rv').val();
    var editedProchainRV = $('#edit-prochain_rv').val();
    var editedNoteConsultations = $('#edit-note_consultations').val();

    // Validate the edited age
    if (isNaN(editedAge) || editedAge <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    // Update the patient object with the edited values
    patients[index].nom = editedNom;
    patients[index].prenom = editedPrenom;
    patients[index].age = editedAge;
    patients[index].date_naissance = editedDateNaissance;
    patients[index].telephone = editedTelephone;
    patients[index].email = editedEmail;
    patients[index].adresse = editedAdresse;
    patients[index].dernier_rv = editedDernierRV;
    patients[index].prochain_rv = editedProchainRV;
    patients[index].note_consultations = editedNoteConsultations;

    // Re-display the details with the updated information
    afficherDetails(index);
}


function toggleDetails(index) {
    var detailsContainer = $('#patient-details-' + index);
    detailsContainer.toggle();
    if (detailsContainer.is(':visible')) {
        afficherDetails(index);
    }
}

function searchPatients() {
    var searchInput = $('#search-bar').val().toLowerCase();

    var filteredPatients = patients.filter(function(patient) {
        var fullName = (patient.nom + ' ' + patient.prenom).toLowerCase();
        return fullName.includes(searchInput);
    });

    // Display the filtered patients
    afficherListePatients(filteredPatients);
}
