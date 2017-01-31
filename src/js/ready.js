var $ = require('jquery');
var CommentsListManager = require('./CommentsListManager');

$(document).ready(function(){

  // manejador de eventos del botón de borrar comentarios
  $(".comments").on("click", ".delete-button", function(){
      var commentId = $(this).data("id"); // recuperamos el id del comentario
      CommentsListManager.deleteComment(commentId)
    });

    // cargar los comentarios
    CommentsListManager.loadComments();
});
