$(document).ready(
  function() {

    // Apro il dropdown quando il mouse si trova sul li
    // che ha classe.with-dropdown
    $('.with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('open');
      }
    );

    $('.with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('open');
      }
    );

  }
);
