'use strict';

var retrievedData = JSON.parse(localStorage.selectedWarriors);

var retrievedImages = JSON.parse(localStorage.unique);

var classEl;

// Post names of warriors to page.
var formResults = document.getElementById('form-results');
var warriors = [];

function handleRemove() {
  console.log('yo');
  var classClicked = event.target.className;
  console.log(classClicked);
  var indexToSplice = retrievedData.indexOf(classClicked);
  console.log(indexToSplice);
  retrievedData.splice(indexToSplice, 1);
  retrievedImages.splice(indexToSplice, 1);
  console.log(retrievedData);
  console.log(retrievedImages);
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
  var h2El = document.createElement('h2');
  h2El.textContent = 'Your War Team:';
  formResults.appendChild(h2El);

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
