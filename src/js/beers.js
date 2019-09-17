import { renderLoader } from './ui.js'
import api from './api.js'

const beerTemplate = beer => `
  <section class="cards">  
    <article class="card">
      <a href="/detail/${beer.beerId}">
        <picture class="thumbnail">
          <img src="${beer.image ? beer.image : '/src/img/default.jpg'}" alt="Beer picture">
        </picture>
        <div class="card-content">
          <h2>${beer.name}</h2>
          <p>${beer.description}</p>
          <p>${beer.firstBrewed}</p>
        </div>
      </a>
    </article>
  </section>
`

const renderBeers = (element, beers) => {
  const htmlBeers = beers.map(beerTemplate).join('')

  console.log(beers.filter(beer => beer.firstBrewed.split('/')[1] === '2007'))
  console.log(beers)

  element.innerHTML = `
    ${htmlBeers}
    `
}

const { getBeers, getSearchedBeers } = api()

const renderBeersDOM = async (text, date) => {
  try {
    renderLoader('hide', 'show')
    const beerSection = document.querySelector('#beer-section')
    if (text) {
      const searchedBeers = await getSearchedBeers(text)
      if (date)
        searchedBeers = searchedBeers.filter(beer => beer.firstBrewed.split('/')[1] === date)
      renderBeers(beerSection, searchedBeers)
    } else renderBeers(beerSection, await getBeers())
  } catch (err) {
    console.error(err.message)
  } finally {
    renderLoader('show', 'hide')
  }
}

export default renderBeersDOM
