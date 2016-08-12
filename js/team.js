'use strict';

var selectedWarrior;
var selectedImages;
// var warriorNamesArray;

var retrievedData = localStorage.getItem('selectedWarriors');
// var retrievedImages = localStorage.getItem('activeWarriorNamesArray');

var retrievedImages = JSON.parse(localStorage.unique);



// Post names of warriors to page.
var formResults = document.getElementById('form-results');
var warriors = [];

window.onload = function () {
  if (JSON.parse(localStorage.getItem('selectedWarriors') != null)) {
    var retrievedData = JSON.parse(localStorage.getItem('selectedWarriors'));
    retrievedData.push(warriors);
    var h2El = document.createElement('h2');
    h2El.textContent = 'Your War Team:';
    formResults.appendChild(h2El);
    var divEl = document.createElement('div');
    divEl.textContent = retrievedData;
    formResults.appendChild(divEl);

    for (var i = 0; i < retrievedImages.length; i++) {
      var newImage = document.createElement('img');
      newImage.src = retrievedImages[i];
      formResults.appendChild(newImage);
    }
  }
};

// var removeWarrior = localStorage.removeItem('selectedWarriors');
