// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(){
    card = document.createElement('div')
    headline = document.createElement('div')
    author = document.createElement('div')
    imgcontainer = document.createElement('div')
    img = document.createElement('img')
    authorsName = document.createElement('span')

    card.appendChild(headline);
    card.appendChild(author);
    card.appendChild(imgcontainer);
    card.appendChild(img);
    card.appendChild(authorsName);
    headline.appendChild(author);
    headline.appendChild(imgcontainer);
    headline.appendChild(img);
    headline.appendChild(authorsName);
    author.appendChild(imgcontainer);
    author.appendChild(img);
    return card;













}