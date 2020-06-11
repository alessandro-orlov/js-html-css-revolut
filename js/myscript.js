$(document).ready(
  function() {

    // Apro il dropdown quando il mouse si trova sul li
    // che ha classe .with-dropdown
    $('.with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('open');
        // Ressetto il menu delle lingue qualora fosse aperto quando si apre un altro menu dropdown
        $('.lang-select .dropdown').removeClass('open');
        $('.lang-select i').removeClass('fa-angle-up');
        $('.lang-select i').addClass('fa-angle-down');
      }
    );

    // Chudo il menu quando il mouse esce dal area del li con la classe
    // .with-dropdown
    $('.with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('open');
      }
    );

    // Apro il menu della selezione delle libgue al click
    $('.lang-select').click(
      function() {
        // Campio la freccettina up/down in base all'apertura del menu
        if($('i').hasClass('fa-angle-down')) {
          $('i').removeClass('fa-angle-down');
          $('i').addClass('fa-angle-up');
        } else {
            $('i').removeClass('fa-angle-up');
            $('i').addClass('fa-angle-down');
          }

        // Apro o chiudo il menu delle lingue
        $(this).children('.dropdown').toggleClass('open');
      }
    );

    // Mobile menu
    $('.mobile-navigation i').click(
        function() {
          $('.mobile-menu').slideToggle(200).toggleClass('open-menu');
        }
    );

  }
);
