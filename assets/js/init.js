
(function($){
  $(function(){
    $('.button-collapse').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();

    if (localStorage.getItem('cookieconsent') === 'true') {
      $('#cookies').hide()
    }

    jQuery('#cookies').on('click', function(event) {
      localStorage.setItem('cookieconsent', 'true')
      jQuery('#cookies').toggle('hide');
    });
  });
})(jQuery);
