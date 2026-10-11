$(function () {
  $('a[href^="#"]').on('click', function (e) {
    var hash = this.hash;

    // Liens href="#" (formation, contact, téléphone) : pas de saut en haut de page
    if (!hash) {
      e.preventDefault();
      return;
    }

    var $cible = $(hash);
    if (!$cible.length) return; // la cible n'existe pas : on laisse faire le navigateur

    e.preventDefault();
    $('html, body').animate({
      scrollTop: $cible.offset().top
    }, 500, function () {
      window.location.hash = hash;
    });
  });
});
