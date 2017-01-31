var $ = require('jquery');
var CommentsService = require('./CommentsService');

module.exports = {

    setUiIdeal: function() {
        $('.comments-list').removeClass().addClass('comments-list ideal');
    },

    setUiBlank: function() {
        $('.comments-list').removeClass().addClass('comments-list blank');
    },

    setUiError: function() {
        $('.comments-list').removeClass().addClass('comments-list error');
    },

    setUiLoading: function() {
        $('.comments-list').removeClass().addClass('comments-list loading');
    },

    loadComments: function() {

        //Borramos todo antes de cargar
        $(".comments-list").empty();

        var self = this;

        // mostrar el mensaje de cargando
        self.setUiLoading();

        // cargamos los comentarios desde el backend
        CommentsService.list(function(comments){ // si nos devuelve comentarios
            if (comments.length == 0) {
                self.setUiBlank(); // si no hay comentarios -> estado en blanco
                $('.comments-number').html('').append(comments.length);
            } else {
                // pintar los comentarios en el listado
                self.renderComments(comments);
                self.setUiIdeal(); // ponemos el estado ideal
            }
        }, function(error){ // si se produce algún error
            self.setUiError(); // ponemos el estado error
        });
    },

    renderComments: function(comments) {
        var contentToAdd = '';
        for (var i = 0; i < comments.length; i++) {
          contentToAdd += '<div id="name-comment">' + comments[i].name + '&nbsp' + comments[i].lastName + '</div>' + '<li id="new-comment">' + comments[i].comment + '<button class="delete-button" data-id="' + comments[i].id + '" title="delete">&times;</button></li>';
        }

        $(".comments-list").append(contentToAdd);
        $('.comments-number').html('').append(comments.length);
    },

    deleteComment: function(commentId) {
        var self = this;
        CommentsService.delete(commentId, function(){
            // se ha borrado correctamente
            self.loadComments();
        }, function(){
            // se ha producido un error al borrar
            alert("No se ha podido eliminar el comentario");
        });
    }
}
