var $ = require('jquery');
var CommentsListManager = require('./CommentsListManager');

$(document).ready(function(){

  var offsetComments = $('#comments').offset();

  // cargar los comentarios
  // $(window).scroll(function() {
  //   if (window.pageYOffset >= offsetComments) {
  //         CommentsListManager.loadComments();
  //         console.log('ahora');
  //     }
  //   })

  CommentsListManager.loadComments();

  // manejador de eventos del botón de borrar comentarios
  $(".comments").on("click", ".delete-button", function(){
      var commentId = $(this).data("id"); // recuperamos el id del comentario
      CommentsListManager.deleteComment(commentId)
    });

});
