var $ = require('jquery');
var CommentsListManager = require('./CommentsListManager');

$(document).ready(function() {

    var offsetComments = $('#comments').offset().top;
    var load = false;

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= offsetComments && !load) {
            load = true;
            CommentsListManager.loadComments();
        } else {
            if (!load) {
                CommentsListManager.setUiLoading();
            }
        }
    })

    // manejador de eventos del botón de borrar comentarios
    $(".comments").on("click", ".delete-button", function() {
        var commentId = $(this).data("id"); // recuperamos el id del comentario
        CommentsListManager.deleteComment(commentId)
    });

});
