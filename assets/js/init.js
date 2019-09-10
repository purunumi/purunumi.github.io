
(function($){
  $(function(){
    $('.button-collapse').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    // $('.tap-target').tapTarget('open');

    // if (localStorage.getItem('rasae_cookieconsent') === 'true') {
    //   $('#cookies').hide()
    // }

    // jQuery('#cookies').on('click', function(event) {
    //   localStorage.setItem('rasae_cookieconsent', 'true')
    //   jQuery('#cookies').toggle('hide');
    // });
  });
})(jQuery);
