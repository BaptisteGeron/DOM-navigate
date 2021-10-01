//Select the last child of the <ol> tag and put it at the begining of the list

let orgList = document.getElementsByTagName('ol')[0];
let olLastChild = orgList.lastElementChild;
let olFirstChild = orgList.firstElementChild;
orgList.insertBefore(olLastChild,olFirstChild);
orgList.lastElementChild.removeChild;

//Move the <h2> of the third section in the second one and vice-versa
let secondH2 = document.querySelectorAll('h2')[1];
let thirdH2 = document.querySelectorAll('h2')[2];
let temp = secondH2.textContent;
secondH2.textContent = thirdH2.textContent;
thirdH2.textContent = temp;

//Delete the last section from the DOM, we don't need it anyways
let lastSection = document.querySelectorAll('section')[2];
lastSection.parentNode.removeChild(lastSection);