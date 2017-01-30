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

    // lo enviamos al backend
    CommentsService.save(comment, function(data) { // si se guarda bien
        alert("Comentario enviado correctamente");
        self.reset(); // resetea el formulario
        $(self).find("button").text("Send Comment").attr("disabled", false);
        CommentsListManager.loadComments();
    }, function(error) { // si no se guarda
        alert("Se ha producido un error");
        $(self).find("button").text("Send comment").attr("disabled", false); // TODO: refactorizar esto
    });


});
