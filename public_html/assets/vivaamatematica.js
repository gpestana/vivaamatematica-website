//slider
$(document).ready(
  function($) {
  console.log('initiating slider')
    $('#banner-fade').bjqs({
      height      : 200,
      width       : 1400,
      responsive  : true
    });
});


//galleria
Galleria.loadTheme('assets/galleria/themes/classic/galleria.classic.min.js');
Galleria.run('.galleria');

Galleria.configure({
    imageCrop: true,
    transition: 'fade'
});
