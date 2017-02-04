var $ = require('jquery');
var moment = require('moment');

var datePost = moment([2017, 00,20,16,51,20]).fromNow();
$(".date").text(datePost);
