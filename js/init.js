(function($) {
  $(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('select').material_select();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).keydown(function(e) {
    if (e.keyCode == 90 && e.ctrlKey) {
        $('#escondido').css('display', 'inline-block');
    }

    if (e.keyCode == 88 && e.ctrlKey) {
        $('#escondido').css('display', 'none');
    }
});