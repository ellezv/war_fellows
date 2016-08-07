'use strict';

// Draft Page
var users = [{
  name: 'Aaron',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'fullstack',
  language: 'javascript',
  avatar: 'aaron.jpg'
}, {
  name: 'Britney',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'any',
  language: 'python',
  avatar: 'britney.jpg'
}, {
  name: 'Lee',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'any',
  language: 'python',
  avatar: 'thumbnail.png'
}, {
  name: 'Kevin',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'any',
  language: 'javascript',
  avatar: 'thumbnail.png'
}, {
  name: 'Fiona',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'any',
  language: 'python',
  avatar: 'fiona.jpg'
}, {
  name: 'Paul',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'any',
  language: 'python',
  avatar: 'thumbnail.png'
}, {
  name: 'Charlie',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'any',
  language: 'python',
  avatar: 'thumbnail.png'
}, ];

window.addEventListener('load', function() {

  var results = document.getElementById('results');

  function search() {

    //get work well
    var workWellField = document.getElementById('workWell');
    var workWell = workWellField.value;

    //get work well
    var saveWhoField = document.getElementById('saveWho');
    var saveWho = saveWhoField.value;

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
        //check workWell
        if (workWell == '' || workWell == users[i].workWell) {
          //check if they save themselves or their mom
          if (saveWho == '' || saveWho == users[i].saveWho) {
            //check language
            if (specialty == '' || specialty == users[i].specialty) {
              //check language
              if (language == '' || language == users[i].language) {
                resultsHtml += '<div class="person-row">\
                                 <img src="../img/' + users[i].avatar + '" />\
                                 <div class="person-info">\
                                 <div>' + users[i].name + '</div>\
                                 <div>' + users[i].workWell + '</div></div>\
                                 <div>' + users[i].saveWho + '</div></div>\
                                 <div>' + users[i].specialty + '</div></div>\
                                 <div>' + users[i].language + '</div></div>\
                                 <button>Draft</button></div>';
              }
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
