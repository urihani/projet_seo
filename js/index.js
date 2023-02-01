// On déclare la variable pour stocker le consentement de l'utilisateur
let userConsent = false;

// On définit une fonction pour demander le consentement de l'utilisateur
function getConsent() {
  // Afficher une boîte de dialogue pour demander le consentement
  let consent = confirm(
    "Acceptez-vous d'envoyer des données à Google Analytics ?"
  );

  // Mettre à jour la variable userConsent en fonction de la réponse de l'utilisateur
  userConsent = consent ? true : false;

  // On stocke le consentement de l'utilisateur dans le localStorage
  localStorage.setItem("userConsent", userConsent);

  return userConsent;
}

// On vérifie si l'utilisateur a déjà donné son consentement
if (localStorage.getItem("userConsent")) {
  userConsent = localStorage.getItem("userConsent");
} else {
  // Si l'utilisateur n'a pas encore donné son consentement, on le demande
  userConsent = getConsent();
}

// Si l'utilisateur a donné son consentement, on initialise Google Analytics
if (userConsent === "true") {
  var head = document.getElementsByTagName("head");
  head.innerHtml +=
    "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-HPND2940FW\"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HPND2940FW');</script>";

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-HPND2940FW");
}
