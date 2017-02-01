var $ = require('jquery');
var webStorage = require('./webStorage');


var button = $(".btn-like");
// var drawLike =
// var drawUnlike =
// para pintarlo

    for (var i = 0; i < button.length; i++) {
      if (webStorage.get($(button[i]).attr("id")) == 'true'){
          $(button[i]).css("background", 'url("../src/img/icons/icon-like-click.svg") no-repeat center');
          $(button[i]).val('true');
      }
      else{
        $(button[i]).css("background", 'url("../src/img/icons/icon-like.svg") no-repeat center');
        $(button[i]).val('false');
      }

    }

for (var i = 0; i < button.length; i++) {
  $(button[i]).click(function(event){
    if ($(this).val() == 'false') {
        $(this).val('true');
        $(this).css("background", 'url("../src/img/icons/icon-like-click.svg") no-repeat center');//.css('background', 'url("../src/img/icons/icon-like-click.svg")');
        webStorage.save($(this).attr("id"), $(this).val());

    }
    else if ($(this).val() == 'true') {
      $(this).val('false');
      $(this).css("background", 'url("../src/img/icons/icon-like.svg") no-repeat center');
      webStorage.save($(this).attr("id"),$(this).val())
    }
  })
}
