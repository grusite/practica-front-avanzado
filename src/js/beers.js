import { renderLoader } from './ui.js'
import api from './api.js'

const beerTemplate = beer => `
  <section class="cards">  
    <article class="card">
      <a href="#">
        <picture class="thumbnail">
          <img src="${beer.image}" alt="Beer picture">
        </picture>
        <div class="card-content">
          <h2>${beer.name}</h2>
          <p>${beer.description}</p>
        </div>
      </a>
    </article>
  </section>
`

const renderBeers = (element, beers) => {
  const htmlBeers = beers.map(beer => beerTemplate(beer))

  element.innerHTML = `
    <div class='centered'>
        ${htmlBeers}
    </div>
    `
}

const { getBeers, getSearchedBeers } = api()

const renderBeersDOM = async text => {
  try {
    renderLoader('hide', 'show')
    const mainSection = document.querySelector('main')
    if (text) renderBeers(mainSection, await getSearchedBeers(text))
    else renderBeers(mainSection, await getBeers())
  } catch (err) {
    console.error(err.message)
  } finally {
    renderLoader('show', 'hide')
  }
}

export default renderBeersDOM
