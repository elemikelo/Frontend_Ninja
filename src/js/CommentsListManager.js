var $ = require('jquery');
var CommentsService = require('./CommentsService');

module.exports = {

    setUiIdeal: function() {
        $('.comments').removeClass().addClass('comments ideal');
    },

    setUiBlank: function() {
        $('.comments').removeClass().addClass('comments blank');
    },

    setUiError: function() {
        $('.comments').removeClass().addClass('comments error');
    },

    setUiLoading: function() {
        $('.comments').removeClass().addClass('comments loading');
    },

    loadComments: function() {

        var self = this;

        // mostrar el mensaje de cargando
        self.setUiLoading();


        // cargamos los comentarios desde el backend
        CommentsService.list(function(comments){ // si nos devuelve comentarios
            if (comments.length == 0) {
                self.setUiBlank(); // si no hay comentarios -> estado en blanco
            } else {
                // pintar los comentarios en el listado
                self.renderComments(comments);
                self.setUiIdeal(); // ideal
            }
        }, function(error){
            self.setUiError(); // error
        });
    },

    renderComments: function(comments) {
        var contentToAdd = '';
        for (var i = 0; i < comments.length; i++) {
          contentToAdd += '<div id="name-comment">' + comments[i].name + '&nbsp' + comments[i].lastName + '</div>' + '<li id="new-comment">' + comments[i].comment + '<button class="delete-button" data-id="' + comments[i].id + '" title="delete">&times;</button></li>';
        }

        //Borramos todo antes de cargar
        $(".list").empty();
        $(".list").append(contentToAdd);
        // $('.comments-number').html('').append(comments.length);


    },

    deleteComment: function(commentId) {
        var self = this;
        CommentsService.delete(commentId, function(){
            alert('Se ha borrado correctamente');
            self.loadComments();
        }, function(){
            alert("Error: No se ha podido eliminar el comentario");
        });
    }
}
