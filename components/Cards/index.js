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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
      console.log(response);
      let articles = response.data.articles
      for(topic in articles){
        articles[topic].forEach(article => {
            entry.appendChild(createCard(article))
        })
      }
    console.log(articles);
  })
  .catch(function (error) {
    console.log(error);
  });

  const entry = document.querySelector('.cards-container')

function createCard(article){
    card = document.createElement('div')
    headline = document.createElement('div')
    author = document.createElement('div')
    imgcontainer = document.createElement('div')
    img = document.createElement('img')
    authorsName = document.createElement('span')

      imgcontainer.classList.add('img-container')
      img.classList.add('img')
      author.classList.add('author')     
         card.classList.add('card')
        headline.classList.add('headline')
    
    headline.textContent = article.headline
    img.src = `${article.authorPhoto}`
    authorsName.textContent = `by ${article.authorName}`

    card.appendChild(headline);
    card.appendChild(author);
    card.appendChild(imgcontainer);
    card.appendChild(img);
    card.appendChild(authorsName);
    author.appendChild(imgcontainer);
    author.appendChild(img);
    author.appendChild(authorsName);
    imgcontainer.appendChild(img);
    return card;
}