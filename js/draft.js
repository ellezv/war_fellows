'use strict';

// Draft Page
var users = [{
  name: 'The Mighty Sam',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'fullstack',
  language: 'any',
  avatar: 'sam.jpg'
},{
  name: 'Aaron',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'Full-Stack',
  language: 'Javascript',
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
  saveWho: 'noanswer',
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

    //get save who
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
        if (workWell == 'noanswer' || workWell == users[i].workWell) {
          //check if they save themselves or their mom
          if (saveWho == 'noanswer' || saveWho == users[i].saveWho) {
            //check language
            if (specialty == 'any' || specialty == users[i].specialty) {
              //check language
              if (language == 'any' || language == users[i].language) {
                resultsHtml += '<div>\
                                 <div class="left">\
                                 <img align="left" src="../img/' + users[i].avatar + '" />\
                                 <button>Draft</button></div>\
                                 <div class="right"><ul>\
                                 <h2>' + users[i].name + '</h2>\
                                 <li>' + 'Works Well With Others: ' + users[i].workWell + '</li>\
                                 <li>' + 'Save Mom or Self: ' + users[i].saveWho + '</li>\
                                 <li>' + 'Specialty: ' + users[i].specialty + '</li>\
                                 <li>' + 'Languages: ' + users[i].language + '</li></div></div>';
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
