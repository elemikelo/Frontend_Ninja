var $ = require('jquery');
var webStorage = require('./webStorage');

var button = $(".btn-like");

// Añado al cargar la pagina la clase con su imagen correspondiente
  for (var i = 0; i < button.length; i++) {
    if (webStorage.get($(button[i]).attr("id")) == 'true'){
        $(button[i]).find('div').removeClass().addClass('icon-like-click');
        $(button[i]).val('true');
    }
    else{
      $(button[i]).find('div').removeClass().addClass('icon-like');
      $(button[i]).val('false');
    }
  }

// Recorre para ver si hacen click sobre el boton like
for (var i = 0; i < button.length; i++) {
  $(button[i]).on('click', function(event){
    if ($(this).val() == 'false') {
        $(this).val('true');
        $(this).find('div').removeClass().addClass('icon-like-click');
        webStorage.save($(this).attr("id"), $(this).val());

    }
    else if ($(this).val() == 'true') {
      $(this).val('false');
      $(this).find('div').removeClass().addClass('icon-like');
      webStorage.save($(this).attr("id"),$(this).val());
    }
  });
}
