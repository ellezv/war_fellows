'use strict';

// Draft Page
var users = [{
  name: 'The Mighty Sam',
  imageName: 'sam',
  imageNamePhoto: 'samPhoto',
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
                                   <input type="checkbox" name="' + users[i].imageName + '" value="' + users[i].imageName + '"id="' + users[i].imageName + '"class="hidden" >\
                                     <ul>\
                                       <li><img align="left" class="inactive" src="../img/' + users[i].avatar + '"id="' + users[i].imageNamePhoto + '"alt="' + users[i].imageName + '" />\
                                         <div class="notSelected"><p>Drafted</p></div>\
                                       </li>\
                                    </ul>\
                                  </div>\
                                  <div class="right"><ul>\
                                    <h2>' + users[i].name + '</h2>\
                                    <li>' + 'Works Well With Others: ' + users[i].workWell + '</li>\
                                    <li>' + 'Save Mom or Self: ' + users[i].saveWho + '</li>\
                                    <li>' + 'Specialty: ' + users[i].specialty + '</li>\
                                    <li>' + 'Languages: ' + users[i].language + '</li>\
                                  </ul></div>\
                               </div>';
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

// TEST draft

// Store all the warriors
var warriorNamesArray = ['britney', 'sam', 'lee', 'fiona', 'britt'];

// Get the warrior form with checkboxes
var form = document.getElementById('warriorForm');

// Get the list of warriors in the "Your war team" section
var updateList = document.getElementById('warriorListInBuilder');

// Store checkboxes html info
var warriorArray = [];

// Store the selected or checked warriors
var selectedWarriors = [];

// Displaying the names of the selected warriors
var warriorDisplayNames = [];

function addWarriors () {
  for (var i = 0; i < warriorNamesArray.length; i++) {
    var currentWarrior = document.getElementById(users[i].imageNamePhoto);
    warriorArray.push(currentWarrior);
    document.getElementById(users[i].imageNamePhoto).addEventListener('click', handleImageSelection);
  };
};

addWarriors();

function handleImageSelection() {
  var alt = document.getElementById(this.alt);
  if (this.className === 'inactive') {
    this.className = 'active';
    alt.checked = true;
    selectedWarriors.push(alt.value);
    warriorDisplayNames.push(alt.name);
    showWarriors();
    var inlineLabel = this.nextSibling;
    inlineLabel.className = 'selected';
  } else {
    this.className = 'inactive';
    alt.checked = false;
    inlineLabel = this.nextSibling;
    inlineLabel.className = 'notSelected';
    for (var i = 0; i < selectedWarriors.length; i++) {
      if(alt.value === selectedWarriors[i]) {
        selectedWarriors.splice(i,1);
        warriorDisplayNames.splice(i,1);
      }
    }
  }
  repopulateList();
  showButton();
  localStorage.setItem('selectedWarriors',JSON.stringify(selectedWarriors));
  localStorage.setItem('warriorDisplayNames',JSON.stringify(warriorDisplayNames));
}

window.onload = function () {
  if (localStorage.getItem('selectedWarriors') != '' && localStorage.getItem('selectedWarriors') != null) {
    selectedWarriors = JSON.parse(localStorage.getItem('selectedWarriors'));
    warriorDisplayNames = JSON.parse(localStorage.getItem('warriorDisplayNames'));
    for(var i = 0; i < selectedWarriors.length; i++) {
      var elImg = document.getElementById(selectedWarriors[i] + 'Photo');
      elImg.className = 'active';
      var elInput = document.getElementById(selectedWarriors[i]);
      elInput.checked = true;
    }
  }
  showWarriors();
  repopulateList();
  showButton();
};

form.addEventListener('submit', handleWarriorSubmit);

function showButton() {
  if (selectedWarriors.length > 1) {
    var submitButton = document.getElementById('submitButton');
    submitButton.className = '';
  } else {
    var submitButton = document.getElementById('submitButton');
    submitButton.className = 'hidden';
  }
}

function repopulateList() {
  updateList.innerHTML = '';
  for (var i = 0; i < selectedWarriors.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = warriorDisplayNames[i];
    updateList.appendChild(liEl);
  }
}

function showWarriors() {
  var endOfList = document.getElementById('endOfSelectedWarriors');
  updateList.className = '';
}

function handleWarriorSubmit(event) {
  event.preventDefault();

  selectedWarriors = [];
  warriorDisplayNames = [];
  localStorage.setItem('selectedWarriors', selectedWarriors);
  localStorage.setItem('warriorDisplayNames', warriorDisplayNames);

  redirectToResults();
}

function redirectToResults() {
  window.location.href = 'team.html';
  localStorage.setItem('selectedWarriors', selectedWarriors);
  localStorage.setItem('warriorDisplayNames', warriorDisplayNames);
}
