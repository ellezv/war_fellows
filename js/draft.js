'use strict';
var warriorNamesArray = [];


// Draft Page
var users = [{
  name: 'Lee the Conqueror',
  imageName: 'lee',
  imageNamePhoto: 'leePhoto',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'self',
  specialty: 'fullstack',
  language: 'javascript',
  avatar: 'lee.png'
},{
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
  imageName: 'aaron',
  imageNamePhoto: 'aaronPhoto',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'Full-Stack',
  language: 'Javascript',
  avatar: 'aaron.jpg'
}, {
  name: 'Zenon',
  imageName: 'britney',
  imageNamePhoto: 'britneyPhoto',
  gender: 'F',
  workWell: 'no',
  saveWho: 'mom',
  specialty: 'frontend',
  language: 'javascript',
  avatar: 'britney_warrior.png'
}, {
  name: 'Annaka Annihilator',
  imageName: 'annaka',
  imageNamePhoto: 'annakaPhoto',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'any',
  language: 'javascript',
  avatar: 'annaka.png'
}, {
  name: 'Fiona Warrior Princess',
  imageName: 'fiona',
  imageNamePhoto: 'fionaPhoto',
  gender: 'F',
  workWell: 'no',
  saveWho: 'mom',
  specialty: 'design',
  language: 'css',
  avatar: 'fiona_warrior.jpg'
}, {
  name: 'Myotis',
  imageName: 'val',
  imageNamePhoto: 'valPhoto',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'noanswer',
  specialty: 'pm',
  language: 'python',
  avatar: 'valerie.png'
}, {
  name: 'Canuck',
  imageName: 'adrian',
  imageNamePhoto: 'adrianPhoto',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'frontend',
  language: 'css',
  avatar: 'adrian.png'
}, {
  name: 'Shriekin Desperado',
  imageName: 'munir',
  imageNamePhoto: 'munirPhoto',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'fullstack',
  language: 'python',
  avatar: 'munir.png'
},{
  name: 'Pirate',
  imageName: 'taiwan',
  imageNamePhoto: 'taiwanPhoto',
  gender: 'M',
  workWell: 'yes',
  saveWho: 'mom',
  specialty: 'pm',
  language: 'javascript',
  avatar: 'taiwan.png'
},{
  name: 'Judy the Destroyer',
  imageName: 'judy',
  imageNamePhoto: 'judyPhoto',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'self',
  specialty: 'any',
  language: 'css',
  avatar: 'judy.png'
},{
  name: 'Baby Toddler',
  imageName: 'britt',
  imageNamePhoto: 'brittPhoto',
  gender: 'F',
  workWell: 'no',
  saveWho: 'mom',
  specialty: 'fullstack',
  language: 'python',
  avatar: 'britt_warrior.jpg'
},{
  name: 'Athena',
  imageName: 'maelle',
  imageNamePhoto: 'maellePhoto',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'self',
  specialty: 'backend',
  language: 'javascript',
  avatar: 'maelle.png'
},{
  name: 'Brunhilda',
  imageName: 'rachael',
  imageNamePhoto: 'rachaelPhoto',
  gender: 'F',
  workWell: 'yes',
  saveWho: 'self',
  specialty: 'frontend',
  language: 'any',
  avatar: 'rachael.png'
},];


window.onload = function() {
  var results = document.getElementById('results');
  var fieldResults = document.getElementById('warrior_field_set');
  var fieldResultsHtml;
  var photoResults = document.getElementById('photo_wrapper');
  var photoResultsHtml;

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

    // for (var j = 0; j < usersLength; j++) {
    //   if (gender == 'A' || gender == users[j].gender) {
    //     //check workWell
    //     if (workWell == 'noanswer' || workWell == users[j].workWell) {
    //       //check if they save themselves or their mom
    //       if (saveWho == 'noanswer' || saveWho == users[j].saveWho) {
    //         //check language
    //         if (specialty == 'any' || specialty == users[j].specialty) {
    //           //check language
    //           if (language == 'any' || language == users[j].language) {
    //             console.log('hey hey');
    //             fieldResultsHtml += '<input type="checkbox" name="' + users[j].imageName + '" value="' + users[j].imageName + '"id="' + users[j].imageName + '"class="hidden">';
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // fieldResults.innerHTML = fieldResultsHtml;
    //
    //
    //
    // for (var k = 0; k < usersLength; k++) {
    //   if (gender == 'A' || gender == users[k].gender) {
    //     //check workWell
    //     if (workWell == 'noanswer' || workWell == users[k].workWell) {
    //       //check if they save themselves or their mom
    //       if (saveWho == 'noanswer' || saveWho == users[k].saveWho) {
    //         //check language
    //         if (specialty == 'any' || specialty == users[k].specialty) {
    //           //check language
    //           if (language == 'any' || language == users[k].language) {
    //             console.log('bye bye');
    //             photoResultsHtml += '<li>\
    //                                   <img class="inactive" src="../img/' + users[k].avatar + '"id="' + users[k].imageNamePhoto + '"alt="' + users[k].imageName + '" />\
    //                                   <div class="notSelected">\
    //                                     <p>Drafted</p>\
    //                                   </div>\
    //                                 </li>';
    //
    //
    //
    //
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // photoResults.innerHTML = photoResultsHtml;
    //

    // addWarriors();


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
                                   <ul>\
                                    <li>\
                                     <img class="inactive" src="../img/' + users[i].avatar + '"id="' + users[i].imageNamePhoto + '"alt="' + users[i].imageName + '" />\
                                     <div class="notSelected">\
                                       <p>Drafted</p>\
                                     </div>\
                                   </li>\
                                  </ul>\
                                </div>\
                                <div class="right">\
                                  <ul>\
                                    <h2>' + users[i].name + '</h2>\
                                    <li>' + 'Works Well With Others: ' + users[i].workWell + '</li>\
                                    <li>' + 'Save Mom or Self: ' + users[i].saveWho + '</li>\
                                    <li>' + 'Specialty: ' + users[i].specialty + '</li>\
                                    <li>' + 'Languages: ' + users[i].language + '</li>\
                                  </ul>\
                                </div>\
                               </div>';
              }
            }
          }
        }
      }
    }
    results.innerHTML = resultsHtml;
  }

  search();
  addWarriors();

};

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
                                   <form class="warriorForm">\
                                   <fieldset>\
                                       <input type="checkbox" name="' + users[i].imageName + '" value="' + users[i].imageName + '"id="' + users[i].imageName + '"class="hidden" >\
                                     </fieldset>\
                                   </form>\
                                   <ul>\
                                     <li><img align="left" checked="false" class="inactive" src="../img/' + users[i].avatar + '"id="' + users[i].imageNamePhoto + '"alt="' + users[i].imageName + '" />\
                                       <div class="notSelected"><p>Drafted</p></div>\
                                     </li>\
                                  </ul>\
                                </div>\
                                <div class="right">\
                                  <ul>\
                                    <h2>' + users[i].name + '</h2>\
                                    <li>' + 'Works Well With Others: ' + users[i].workWell + '</li>\
                                    <li>' + 'Save Mom or Self: ' + users[i].saveWho + '</li>\
                                    <li>' + 'Specialty: ' + users[i].specialty + '</li>\
                                    <li>' + 'Languages: ' + users[i].language + '</li>\
                                  </ul>\
                                </div>\
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


// SANDBOXING

// Store all the warriors
// var warriorNamesArray = [];

// Get the warrior form with checkboxes
var form = document.getElementsByClassName('warriorForm');

// Get the list of warriors in the "Your war team" section
var updateList = document.getElementById('warriorListInBuilder');

// Store checkboxes html info
var warriorArray = [];

// Store the selected or checked warriors
var selectedWarriors = [];

// Displaying the names of the selected warriors
var warriorDisplayNames = [];

function handleImageSelection() {
  console.log(this);
  var id = document.getElementById(this.id);
  if (this.className === 'inactive') {
    this.className = 'active';
    console.log(id);
    id.checked = true;
    selectedWarriors.push(id.value);
    warriorDisplayNames.push(id.name);
    showWarriors();
    var inlineLabel = this.nextSibling;
    inlineLabel.className = 'selected';
  } else {
    this.className = 'inactive';
    id.checked = false;
    inlineLabel = this.nextSibling;
    inlineLabel.className = 'notSelected';
    for (var i = 0; i < selectedWarriors.length; i++) {
      if(id.value === selectedWarriors[i]) {
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

function addWarriors () {
  for (var i = 0; i < users.length; i++) {
    var currentWarrior = document.getElementById(users[i].imageNamePhoto);
    console.log(currentWarrior);
    warriorNamesArray.push(currentWarrior);
    document.getElementById(users[i].imageNamePhoto).addEventListener('click', handleImageSelection);
  };
};

addWarriors();


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
form.addEventListener('submit', handleWarriorSubmit);


function redirectToResults() {
  window.location.href = 'team.html';
  localStorage.setItem('selectedWarriors', selectedWarriors);
  localStorage.setItem('warriorDisplayNames', warriorDisplayNames);
}
