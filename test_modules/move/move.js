'use strict';

var fs = require('fs');
var check = require('../checkAll/check.js');
var path = require('path');

module.exports = function(file, callback) {
  var fname = path.basename(file);
  var foldername = file.split(path.sep)[1];
    //check file before moving
    check([file], true, function(result) {
        if (result) {
            //rename path of folder
            fs.rename("./work-in-progress/" + foldername, "./tutorials/" + foldername, function() {
                callback("tutorial moved");
            });
        } else {
            callback("\ntutorials with errors cannot be moved!\nCheck your file with \"node test.js -i " + fname + "\"");
        }
    })


}
