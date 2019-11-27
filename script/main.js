
// Schimbarea imaginii
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../imagini/star.jpg') {
      myImage.setAttribute ('src','imagini/star1.png');
    } else {
      myImage.setAttribute ('src','imagini/star1.png');
    }
}

// Mesaj personalizat

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Introduceti numele dvs.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Bine ai venit, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bine ai venit, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
