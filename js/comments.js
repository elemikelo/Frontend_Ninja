$(document).ready(function () {

///////////////////////AJAX////////////////////////////

      var comment = $('#comment');
      var name = $('#name');
      var lastName = $('#last_name');
      var email = $('#email');
      //var loader = $('.loader');
      var listComments = [];
      var listCommentsContainer = $('#commentsContainer');

      var url = 'http://localhost:8000/api/';
      var stateOk = 0;

      var drawComments = function () {
        listCommentsContainer.empty();

        if (listComments == 0 && stateOk == 1) {

          listCommentsContainer.append("<li>* No existen Comentarios</li>");

        }else {

          var contentToAdd = '';
          for (var i = 0; i < listComments.length; i++) {
            contentToAdd += '<div id="li-name">' + listComments[i].name + '&nbsp' + listComments[i].lastName + '</div>' + '<li id="li-comment">' + listComments[i].comment + '<button class="delete" data-comment-id="' + listComments[i].id + '">&times;</button></li>';
          }
          listCommentsContainer.append(contentToAdd);
        }
      }
      drawComments();

    ///////////////////////GET////////////////////////////


      var getComments = function () {
        var success = function (data) {
          listComments = data;
          drawComments();
        }

        var complete = function () {
          //loader.hide();
           stateOk = 1;
           drawComments();
        }

        $.ajax({
          type: "GET",
          url: url + 'contact',
          success: success,
          complete: complete
        })
        .fail(function (error) {
    			console.error("Error al cargar comentarios.", error);
    		});
      }

///////////////////////POST////////////////////////////


      var createComment = function (data_name,data_lastName,data_email,data_comment) {

        var success = function (data) {

          console.log(data);
          name.val('a');
          lastName.val('a');
          email.val('a');
          comment.val('a');

          listComments.push(data);
          drawComments();

        }
        var data = {

          'name': data_name,
          'lastName': data_lastName,
          'email': data_email,
          'comment': data_comment

       };

       var complete = function () {
         alert('Mensaje enviado, gracias')
       }


        $.ajax({
          type: 'POST',
          url: url + 'contact',
          data: data,
          success: success,
          complete: complete
        })

        .fail(function (error) {
    			console.error("Error al enviar comentario.", error);
    		});
      }


///////////////////////DELETE////////////////////////////


      var deleteComment = function(id) {
        var success = function(data) {
          listComments = $.grep(listComments, function(item){ //GREP: BUSCA Y FILTRA
    				return item.id != id;
          })
          drawComments();
        }

    		$.ajax({
    			type: "DELETE",
    			url: url + "contact/" + id,
          success: success
    		})

        .fail(function(error) {
    			console.error("Error eliminando comentario", error);
    		})
    	}

///////////////////////EVENTS////////////////////////////


      $('#sendNewComment').on('click', function (event) {
        if (comment.val() != '  ') {
          event.preventDefault();
          createComment(name.val(), lastName.val(), email.val(), comment.val());
        }
      })

      $(document).on("click", ".delete", function(event){
        var id = $(this).data('commentId');
        deleteComment(id);
      });

    setTimeout(function() {
      getComments();
    }, 1500);
});
