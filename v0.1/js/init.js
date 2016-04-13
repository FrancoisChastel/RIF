(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function writeDB(){
  // Récupération du type de la demande
  var type = document.getElementById("selectOptions").value;
  // Création de l'objet demande
  var demand =
  {
    firstname : document.getElementById("firstname").value,
    name : document.getElementById("name").value,
    mail : document.getElementById("email").value,
    company : document.getElementById("company").value,
    message : document.getElementById("message").value
  };
  var myFirebaseRef;
  // Creation de la référence au serveur en conséquence du type de la demande
  switch(type)
  {
    // Inscription
    case '1':
      myFirebaseRef = new Firebase("https://rifsdb.firebaseio.com/Inscriptions");
      break;
    // Renseignement
    case '2':
      myFirebaseRef = new Firebase("https://rifsdb.firebaseio.com/Renseignements");
      break;
    // Autre
    case '3':
      myFirebaseRef = new Firebase("https://rifsdb.firebaseio.com/Autres");
      break;
  }
  // Envoie de la demande au serveur
  myFirebaseRef.push(demand, function(error){
    if(error===null)
    {
      Materialize.toast('Demande envoyée avec succés, merci !', 4000,'',function(){});
    }
    else
    {
      Materialize.toast('L\'envoie de la demande a échoué veuillez réessayer plus tard.', 4000,'',function(){});
    }
  });

}
