var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/main_ssmd.jpg') {
    myImage.setAttribute ('src','images/dancing_caffein.jpg');
  } else {
    myImage.setAttribute ('src','images/main_ssmd.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name',myName);
  myHeading.innerHTML = 'SangSang Madang is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStrage.getItem('name');
  myHeading.innerHTML = 'Sangsang Madang is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
