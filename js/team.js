'use strict';



//
//
// function localStorageParsed() {
//   var warriorsParsed = JSON.parse(localStorage.selectedWarriors);
//   selectedWarriors = warriorsParsed;
//   console.log('Storage');
// }
//
//
window.onload = function() {
  // Retrieve selectedWarriors
  var selectedWarriors = localStorage.getItem('selectedWarriors');

  if (selectedWarriors != "undefined" || selectedWarriors != "null") {
    document.getElementById('welcomeMessage').innerHTML = "Hello " + selectedWarriors + "!";
  } else {
    document.getElementById('welcomeMessage').innerHTML = "Hello!";
  }
}

// function addStorage() {
//     var key = document.getElementById("storageKey");
//     var data = document.getElementById("storageData");
//
//     /* Set the local storage item */
//     if ("localStorage" in window)
//     {
//        localStorage.setItem(key.value, data.value);
//        location.reload();
//     }
//     else
//     {
//        alert("no localStorage in window");
//     }
//  }
//
// window.onload = function()
//   {
//      var localhtml = "";
//
//      /* Get the local storage item */
//      for (var i = 0; i < localStorage.length; i++)
//      {
//         localhtml += "<li>" + localStorage.key(i) + " : " + localStorage.getItem(localStorage.key(i)) + "</li>";
//      }
//      document.getElementById("localStorageData").innerHTML = localhtml;
// }
