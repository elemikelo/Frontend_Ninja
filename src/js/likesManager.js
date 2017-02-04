var $ = require('jquery');
var webStorage = require('./webStorage');

var button = $(".btn-like");
var urlLike = 'url("../src/img/icons/icon-like-click.png") no-repeat center';
var urlUnLike = 'url("../src/img/icons/icon-like.png") no-repeat center';

// para pintarlo
  for (var i = 0; i < button.length; i++) {
    if (webStorage.get($(button[i]).attr("id")) == 'true'){
        $(button[i]).css("background", urlLike);
        $(button[i]).val('true');
    }
    else{
      $(button[i]).css("background", urlUnLike);
      $(button[i]).val('false');
    }
  }

// Recorre para ver si hacen like
for (var i = 0; i < button.length; i++) {
  $(button[i]).click(function(event){
    if ($(this).val() == 'false') {
        $(this).val('true');
        $(this).css("background", urlLike);
        webStorage.save($(this).attr("id"), $(this).val());

    }
    else if ($(this).val() == 'true') {
      $(this).val('false');
      $(this).css("background", urlUnLike);
      webStorage.save($(this).attr("id"),$(this).val());
    }
  });
}
