'use strict';

var retrievedData = JSON.parse(localStorage.selectedWarriors);
var retrievedImages = JSON.parse(localStorage.unique);
var classEl;
var formResults = document.getElementById('form-results');
var warriors = [];

function handleRemove() {
  var classClicked = event.target.className;
  var indexToSplice = retrievedData.indexOf(classClicked);
  retrievedData.splice(indexToSplice, 1);
  retrievedImages.splice(indexToSplice, 1);
  localStorage.unique = null;
  localStorage.selectedWarriors = null;
  retrievedImages = JSON.stringify(retrievedImages);
  retrievedData = JSON.stringify(retrievedData);
  localStorage.setItem('unique', retrievedImages);
  localStorage.setItem('selectedWarriors', retrievedData);
  location.reload();
}
if (JSON.parse(localStorage.getItem('selectedWarriors') != null)) {
  retrievedData = JSON.parse(localStorage.getItem('selectedWarriors'));
  retrievedData.push(warriors);
  for (var i = 0; i < retrievedImages.length; i++) {
    classEl = retrievedImages[i].slice(67, -4);
    var newImage = document.createElement('img');
    newImage.src = retrievedImages[i];
    newImage.className = classEl;
    formResults.appendChild(newImage);
    var imageButton = document.createElement('button');
    imageButton.textContent = 'Remove';
    imageButton.className = classEl;
    formResults.appendChild(imageButton);
    imageButton.addEventListener('click', handleRemove);
  }
}
