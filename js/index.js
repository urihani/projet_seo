function onload() {
  var consent = localStorage.getItem("acceptcookie");
  if (consent == "oui") {
    var head = document.getElementsByTagName("head");
    head.innerHtml +=
      "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-HPND2940FW\"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HPND2940FW');</script>";
  } else {
    document.getElementById("exampleModal").modal();
  }

  localStorage.getItem("acceptcookie");
}

function addCookies() {
  localStorage.setItem("acceptcookie", "oui");
  var head = document.getElementsByTagName("head");
  head.innerHtml +=
    "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-HPND2940FW\"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HPND2940FW');</script>";
}
