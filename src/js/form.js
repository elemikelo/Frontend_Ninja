var $ = require('jquery');
var CommentsService = require('./CommentsService');
var CommentsListManager = require('./CommentsListManager');

var form = $(".new-comment-form");
var comentariosTextarea = $('#comment');
var inputEmail = $('#email');
var inputName = $('#name');
var inputLastName = $('#last_name');
var patternEmail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

var stateButton = {
    enabled: function() {
        form.find("button").text("Add Comment").attr("disabled", false);
    },
    disabled: function() {
        form.find("button").text("Saving Comment...").attr("disabled", true);
    }
}

function countWords (phrase) {
  var phraseReplaceSpaces = phrase.replace(/\s\s+/g, ' ').trim();
  var arrayOfWords = phraseReplaceSpaces.split(' ');
  var numberOfWords = arrayOfWords.length;
  return numberOfWords;
}

form.submit(function () {

    if(!inputName.val()) {
			alert("Escribe tu nombre");
			inputName.focus();
			event.preventDefault();
			return false;
		}

    if(!inputLastName.val()) {
			alert("Escribe tu apellido");
			inputLastName.focus();
			event.preventDefault();
			return false;
		}

    if(!inputEmail.val() || !patternEmail.test(inputEmail.val().trim())) {
			alert("Escribe tu email correctamente");
			inputEmail.focus();
			event.preventDefault();
			return false;
		}

    if (countWords(comentariosTextarea.val()) > 120) {
			alert('Máximo 120 palabras');
			comentariosTextarea.focus();
			event.preventDefault();
			return false;
		}

    stateButton.disabled();

    var self = this;

    var dataComment = {
        comment: $("#comment").val(),
        name: $("#name").val(),
        lastName: $("#last_name").val(),
        email: $("#email").val()
    }

       ///// send backend //////

    CommentsService.save(dataComment, function(data) {
        alert("Thank you");
        stateButton.enabled();
        CommentsListManager.loadComments();
        self.reset();
    }, function(error) {
        alert("error");
        stateButton.enabled();
    });

    return false;
});
