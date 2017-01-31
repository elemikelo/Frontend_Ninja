var $ = require('jquery');
var CommentsService = require('./CommentsService');
var CommentsListManager = require('./CommentsListManager');

$('.new-comment-form').on('submit', function () {

    var inputs = $(this).find("input").each(function(){
        var input = this;
        if (input.checkValidity() == false) {
            alert(input.validationMessage);
            input.focus();
            return false;
        }
    });

    //datos comentarios

    var comment = {
      comment: $("#comment").val(),
      name: $("#name").val(),
      lastName: $("#last_name").val(),
      email: $("#email").val()
    }

    //bloqueo de boton
    $(this).find("button").text("Saving Comment...").attr("disabled", true);
    var disableButton = $(this).find("button").text("Add Comment").attr("disabled", false);
    var self = this;
    
    // lo enviamos al backend
    CommentsService.save(comment, function(data) { // si se guarda bien
        disableButton;
        CommentsListManager.loadComments();
        self.reset(); //reseteamos el formulario
    }, function(error) { // si no se guarda
        alert("Se ha producido un error");
        disableButton;
    })
    return false; // no queremos enviar el formulario nunca

  });
