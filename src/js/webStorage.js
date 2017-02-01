var $ = require('jquery');

module.exports = {

get: function (element) {

     if (window.localStorage != null) {
        var value = localStorage.getItem(element);
        return value;
      }
 },

save: function (a,b) {

   if (window.localStorage != null) {
      var key = a;
      var value = b;
      localStorage.setItem(key , value);

     }
 },

delete: function () {

   localStorage.clear();

    }

};
