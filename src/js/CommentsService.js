var $ = require('jquery');

var API_URL = "/api/comments/";

module.exports = {
  // Cargar Comentarios
  list: function(successCallback, errorCallback) {
      $.ajax({
          url: API_URL,
          type: "GET",
          success: function(data) {
              successCallback(data);
          },
          error: function(error) {
              errorCallback(error);
              console.error("CommentsServiceError", error);
          }
      })
  },

  //borrar  un comentario

  delete: function(commentId, successCallback, errorCallback) {
      $.ajax({
          url: API_URL + commentId,
          type: "DELETE", // eliminar el recurso de la URL en un API REST
          success: function(data) {
              successCallback(data);
          },
          error: function(error) {
              errorCallback(error);
              console.error("CommentsServiceError", error);
          }
      });
  },

  //guardar comentarios

  save: function(comment, successCallback, errorCallback) {
      $.ajax({
          url: API_URL,
          type: "POST",
          data: comment,
          success: function(data) {
              successCallback(data);
          },
          error: function(error) {
              errorCallback(error);
              console.error("CommentsServiceError", error);
          }
      });
  }
};
