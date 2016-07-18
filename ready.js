/******************************************************************************
main javaScript file to call in Node.js command prompt
asks to choose one tutorial from the work-in-progress folder, which the user wants to move in the tutorials folder
******************************************************************************/

"use strict"

var mkdirp = require('mkdirp');
var inquirer = require("inquirer");
var checkinput = require("./test_modules/checkinput/checkinput.js");
var move = require("./test_modules/move/move.js");
var log = require('color-log');

//object for the input dialog to ask for the required information about which tutorial should get moved
var questions = [
  {
    type: 'list',
    name: 'tutorial',
    message: 'Which tutorial do you want to move?',
    choices: [

    ]
  }
];

//reads all wipfiles and adds them to the question object, so the user can choose one of them
checkinput.readwipfiles(function(filenames){
  var i = 0;
  filenames.forEach(function(file){
    questions[0].choices[i] =  file;
    i++;
  });
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers.tutorial);
    //choosen tutorial gets moved from the work-in-progress folder to the tutorials folder
    move(answers.tutorial, function(result){
      log.error(result);
    });
  });
});
