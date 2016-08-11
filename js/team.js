'use strict';

var selectedWarrior;
// var warriorNamesArray;

var retrievedData = localStorage.getItem('selectedWarriors');

console.log('Retrieved:', retrievedData);
if (retrievedData) {
  selectedWarrior = JSON.parse(retrievedData);
}


for (var i = 0; i < localStorage.length; i++){
  console.log( localStorage.getItem( localStorage.key( i ) ) );
}

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
    for (var i = 0; i < selectedWarriors.length; i++) {
      var elImg = document.getElementById(selectedWarriors[i] + 'Photo');
      console.log(selectedWarriors[i] + 'Photo');
      elImg.className = 'active';
      var elInput = document.getElementById(selectedWarriors[i]);
      elInput.checked = true;
    }
  }
};

// var removeWarrior = localStorage.removeItem('selectedWarriors');
