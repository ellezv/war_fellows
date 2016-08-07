'use strict';

// Draft Page
var users = [{
  name: 'Aaron',
  gender: 'M',
  hobby: 'pets',
  specialty: 'any',
  language: 'javascript',
  avatar: 'fiona.jpg'
}, {
  name: 'Britney',
  gender: 'F',
  hobby: 'pets',
  specialty: 'any',
  language: 'python',
  avatar: 'britney.jpg'
}, {
  name: 'Lee',
  gender: 'M',
  hobby: 'music',
  specialty: 'any',
  language: 'python',
  avatar: 'thumbnail.png'
}, {
  name: 'Kevin',
  gender: 'M',
  hobby: 'sports',
  specialty: 'any',
  language: 'javascript',
  avatar: 'thumbnail.png'
}, {
  name: 'Fiona',
  gender: 'F',
  hobby: 'reading',
  specialty: 'any',
  language: 'python',
  avatar: 'fiona.jpg'
}, {
  name: 'Paul',
  gender: 'M',
  hobby: 'shopping',
  specialty: 'any',
  language: 'python',
  avatar: 'thumbnail.png'
}, {
  name: 'Charlie',
  gender: 'M',
  hobby: 'pets',
  specialty: 'any',
  language: 'python',
  avatar: 'thumbnail.png'
}, ];

window.addEventListener('load', function() {

  var results = document.getElementById('results');

  function search() {

    //get hobby
    var hobbyField = document.getElementById('hobby');
    var hobby = hobbyField.value;

    //get specialty
    var specialtyField = document.getElementById('specialty');
    var specialty = specialtyField.value;

    //get language
    var languageField = document.getElementById('language');
    var language = languageField.value;

    //get gender
    var genderField = document.getElementById('gender');
    var s = genderField.selectedIndex;
    var gender = genderField.options[s].value;

    var resultsHtml = '';
    var usersLength = users.length;

    for (var i = 0; i < usersLength; i++) {
      //check gender
      if (gender == 'A' || gender == users[i].gender) {
        //check hobby
        if (hobby == '' || hobby == users[i].hobby) {
          //check language
          if (specialty == '' || specialty == users[i].specialty) {
            //check language
            if (language == '' || language == users[i].language) {
              resultsHtml += '<div class="person-row">\
                               <img src="../img/' + users[i].avatar + '" />\
                               <div class="person-info">\
                               <div>' + users[i].name + '</div>\
                               <div>' + users[i].hobby + '</div></div>\
                               <div>' + users[i].specialty + '</div></div>\
                               <div>' + users[i].language + '</div></div>\
                               <button>Draft</button></div>';
            }
          }
        }
      }
    }
    results.innerHTML = resultsHtml;
  }

  var searchBtn = document.getElementById('searchBtn');

  searchBtn.addEventListener('click', search);
});
