var $ = require('jquery');
var CommentsListManager = require('./CommentsListManager');

// var likeService = require('./likeService');



$(document).ready(function(){

  // cargar los comentarios
  CommentsListManager.loadComments();

  // manejador de eventos del botón de borrar comentarios
  $(".comments").on("click", ".delete-button", function(){
      var commentId = $(this).data("id"); // recuperamos el id del comentario
      CommentsListManager.deleteComment(commentId)
    });


  // webStorage likes


});
