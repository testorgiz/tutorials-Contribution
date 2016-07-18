/******************************************************************************
contains the function "checktutorialname" --> to check if the filename for the new tutorial is valid
contains "help functions" to read the existing filenames for testing if new filename already exists
******************************************************************************/
"use strict"

var recursive = require('recursive-readdir');
var path = require('path');


//function to check the filename-input if it is valid or not
//returns the result (valid or invalid with reason)
var checktutorialname = function (filename){
  var reason = '';
  var error = false;

  // input needed
  if (filename.length < 1) {
    return {
      "pass": false,
      "reason" : "input filename required"
    };
  }

  // taken from http://xpo6.com/list-of-english-stop-words/
  var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fifty', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'sap', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

  // no underscores or umlauts or uppercase letters allowed
  if (filename.match(/[^a-z0-9-]/)) {
    return {
      "pass": false,
      "reason" : "no underscores or umlauts or uppercase letters allowed"
    };
  }

  // no filenames with > 50 chars allowed
  if (filename.length > 50) {
    return {
      "pass": false,
      "reason" : "no filenames with > 50 chars allowed"
    };
  }

  var chunks = filename.split('-');

  // allow only up to 6 unqiue keywords
  if (chunks.length > 6) {
    return {
      "pass": false,
      "reason" : "allow only up to 6 unqiue keywords"
    };
  }

  // check for common English stop words
  for (var i = 0; i < chunks.length; i++) {
    if (stopwords.indexOf(chunks[i]) > -1) {
      return {
        "pass": false,
        "reason" : "no common English stop words allowed"
      };
    }
  }

  //check if filename already exists in wip or tutorials folder
    if (filenames.indexOf(filename) != -1){
      return {
        "pass": false,
        "reason" : "filename already exists in wip or tutorials folder"
      }
    }
    else{
      return {
        "pass": true,
        "reason" : "alles richtig"
      }
    }

    return result;
}

//arraydeclaration which includes all tutorialnames from the work-in-progress and the tutorials folder
var filenames = [];


//fills the filenames array
var readfilenames = function (callback){
  readwipfiles(function(){
    readtutorialfiles(function(){
      callback(filenames);
    });
  });
}


//reads all tutorials from the work-in-progress folder and saves them in the filenamesarray
var readwipfiles = function (callback){
  var result = [];
  recursive('./work-in-progress', ['!*.md', 'stopwords.md', 'readme.md'],function (err, files) {
      files.forEach(function(file){
        var fname = path.basename(file);
        fname = fname.substr(0, fname.length-3);;
        filenames.push(fname);
        result.push(file);
      });
      callback(result);
  });
}

//reads all tutorials from the tutorials folder and saves them in the filenamesarray
var readtutorialfiles = function (callback){
  recursive('./tutorials', ['!*.md', 'stopwords.md', 'readme.md'],function (err, files) {
    files.forEach(function(file){
      var fname = path.basename(file);
      fname = fname.substr(0, fname.length-3);;
      filenames.push(fname);
    });
    callback();
  });
}


module.exports = {
  checktutorialname: checktutorialname,
  readfilenames: readfilenames,
  readwipfiles: readwipfiles
}
