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
  name: 'Zenon',
  gender: 'F',
  workWell: 'no',
  saveWho: 'mom',
  specialty: 'frontend',
  language: 'javascript',
  avatar: 'britney_warrior.png'
}, {
  name: 'Lee the Conqueror',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'self',
  specialty: 'fullstack',
  language: 'javascript',
  avatar: 'lee.png'
}, {
  name: 'Annaka Annihilator',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'any',
  language: 'javascript',
  avatar: 'annaka.png'
}, {
  name: 'Fiona Warrior Princess',
  gender: 'F',
  workWell: 'no',
  saveWho: 'mom',
  specialty: 'design',
  language: 'css',
  avatar: 'fiona_warrior.jpg'
}, {
  name: 'Myotis',
  gender: 'F',
  workWell: 'yes',
  saveWho: '',
  specialty: 'pm',
  language: 'python',
  avatar: 'valerie.png'
}, {
  name: 'Canuck',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'frontend',
  language: 'css',
  avatar: 'adrian.png'
}, {
  name: 'Shriekin Desperado',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'fullstack',
  language: 'python',
  avatar: 'munir.png'
},{
  name: 'Pirate',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'pm',
  language: 'javascript',
  avatar: 'taiwan.png'
},{
  name: 'Judy the Destroyer',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'self',
  specialty: 'any',
  language: 'css',
  avatar: 'judy.png'
},{
  name: 'Baby Toddler',
  gender: 'F',
  workWell: 'no',
  saveWho: 'mom',
  specialty: 'fullstack',
  language: 'python',
  avatar: 'britt_warrior.jpg'
},{
  name: 'The Mighty Sam',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'fullstack',
  language: 'any',
  avatar: 'sam.jpg'
},{
  name: 'Athena',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'self',
  specialty: 'backend',
  language: 'javascript',
  avatar: 'maelle.png'
},{
  name: 'Brunhilda',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'self',
  specialty: 'frontend',
  language: 'any',
  avatar: 'rachael.png'
},];

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
            if (specialty == 'any' || specialty == users[i].specialty) {
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
