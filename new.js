/******************************************************************************
main javaScript file to call in Node.js command prompt
asks for the filename, title, description and tags of the new tutorial and creates a basic file in a folder in the work-in-progress folder
******************************************************************************/
"use strict"

var mkdirp = require('mkdirp');
var inquirer = require("inquirer");
var checkinput = require("./test_modules/checkinput/checkinput.js");
var create = require("./test_modules/create/create.js");

//object for the input dialog to ask for the required information about the new tutorial
var questions = [{
    name: 'tutorialfilename',
    type: 'input',
    message: 'What should be the new name of your tutorial?',
    validate: function(value, callback) {
        //test the input if its a valid filename
        var result = checkinput.checktutorialname(value);
        if (result.pass) {
            //if the input is a valid filename it returns true and goes on with the next question
            return true;
        }
        //in case the filename is not valid it gives an information to the user with the details, why the filename is invalid and prompt the user to enter a new filename
        return 'Something went wrong. \n   Reason:  ' + result.reason + '\n   Please enter a valid file name';
    }
}, {
    type: 'input',
    name: 'tutorialtitle',
    message: 'What is the title of your new tutorial?'

}, {
    type: 'input',
    name: 'tutorialdescription',
    message: 'What is the description of your new tutorial?',
    default: function() {
        return 'description';
    }
}, {
    type: 'checkbox',
    name: 'tutorialtags',
    message: 'Which tags should be associated with the new tutorial??',
    choices: [{
        name: 'Beginner',
        value: ' tutorial>beginner'
    }, {
        name: 'Intermediate',
        value: ' tutorial>intermediate'
    }, {
        name: 'Advanced',
        value: ' tutorial>advanced'
    }, {
        name: 'iOS',
        value: ' operating-system>ios'
    }, {
        name: 'Android',
        value: ' operating-system>android'
    }, {
        name: 'Project (not Tutorial)',
        value: ' tutorial:type/project'
    }, {
        name: 'ABAP',
        value: ' topic>abap-development'
    }, {
        name: 'Big Data',
        value: ' topic>big-data'
    }, {
        name: 'Cloud',
        value: ' topic>cloud'
    }, {
        name: 'HTML5',
        value: ' topic>html5'
    }, {
        name: 'Internet of Things',
        value: ' topic>internet-of-things'
    }, {
        name: 'Java',
        value: ' topic>java'
    }, {
        name: 'Mobile',
        value: ' topic>mobile'
    }, {
        name: 'OData',
        value: ' topic>odata'
    }, {
        name: 'SAPUI5',
        value: ' topic>sapui5'
    }, {
        name: 'Security',
        value: ' topic>security'
    }, {
        name: 'SQL',
        value: ' topic>sql'
    }, {
        name: 'SAP BusinessObjects Design Studio',
        value: ' products>sap-businessobjects-design-studio'
    }, {
        name: 'SAP Gateway',
        value: ' products>sap-gateway'
    }, {
        name: 'SAP HANA',
        value: ' products>sap-hana'
    }, {
        name: 'SAP HANA Studio',
        value: ' products>sap-hana-studio'
    }, {
        name: 'SAP HANA Vora',
        value: ' products>sap-hana-vora'
    }, {
        name: 'SAP HANA Cloud Platform',
        value: ' products>sap-hana-cloud-platform'
    }, {
        name: 'SAP HCP Cloud Connector',
        value: ' products>cloud-connector-for-sap-hana-cloud-platform'
    }, {
        name: 'SAP Lumira',
        value: ' products>sap-lumira'
    }, {
        name: 'SAP Web IDE',
        value: ' products>sap-web-ide'
    }]

}];

/***first the function "readfilenames" is called, to read all existing names of tutorials
this makes sure, that the names are all read and saved in the array filenames,
to make sure the test (which starts after the filename input)
to check if a tutorial with the same name exists, runs correctly
***/
checkinput.readfilenames(function(filenames) {

  //the interactive commands start with the declared object questions
    inquirer.prompt(questions).then(function(answers) {

      //the user input is saved in the input-object
        var input = {
            filename: answers.tutorialfilename,
            title: answers.tutorialtitle,
            description: answers.tutorialdescription,
            tags: answers.tutorialtags
        }

        //create the folder for the new tutorial in the work-in-progress folder
        mkdirp('work-in-progress/' + answers.tutorialfilename, function(err) {
            if (err) console.error(err)
            else {
              //if the folder is created correctly, the file can be created by calling create
                create(input, function(result) {
                    console.log(result);
                });

            }
        });
    });
});
