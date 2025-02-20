// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const content = document.querySelector('.header-container')
content.appendChild(Header());

function Header() {
const header = document.createElement('div')
const date = document.createElement('span')
const lambdaTimes = document.createElement('h1')
const temp = document.createElement('span')

date.textContent = 'March 28, 2019';
lambdaTimes.textContent = 'Lambda Times';
temp.textContent = '98°';

date.classList.add('date')
temp.classList.add('temp')
header.classList.add('header')

header.appendChild(date);
header.appendChild(lambdaTimes);
header.appendChild(temp);
return header;
}