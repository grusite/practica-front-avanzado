import { renderLoader } from './ui.js'
import api from './api.js'
import { beerSection } from './navbar.js'

const beerTemplate = beer => `
  <section class="cards">
    <article class="card">
      <a href="/detail/${beer.beerId}">  
        <picture class="thumbnail">
          <img src="${beer.image ? beer.image : '/img/default.jpg'}" alt="Beer picture">
        </picture>
        <div class="card-content">
          <h2>${beer.name}</h2>
          <p>${beer.description}</p>
          <p>Primera vez que se elaboró: <b>${beer.firstBrewed}</b></p>
        </div>
      </a>
    </article>
  </section>
`

const renderBeers = (element, beers) => {
  const htmlBeers = beers.map(beerTemplate).join('')

  element.innerHTML = `
    ${htmlBeers}
    `
}

const { getBeers, getSearchedBeers } = api()
let searchedBeers = ''

const renderBeersDOM = async text => {
  try {
    renderLoader('hide', 'show')
    if (text) {
      searchedBeers = await getSearchedBeers(text)
    } else searchedBeers = await getBeers()
    renderBeers(beerSection, searchedBeers)
  } catch (err) {
    console.error(err.message)
  } finally {
    renderLoader('show', 'hide')
  }
}

export { renderBeersDOM, searchedBeers, renderBeers }
