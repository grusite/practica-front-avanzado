import api from './api.js'
import { beerSection } from './navbar.js'
// import { renderQuotes } from './quotes.js'

const { getBeerById } = api()

const detailTemplate = beer => `
  <section class="cards">  
    <article class="card">
      <picture class="thumbnail">
        <img src="${beer.image ? beer.image : '/src/img/default.jpg'}" alt="Beer picture">
      </picture>
      <div class="card-content">
        <h2>${beer.name}</h2>
        <p>${beer.description}</p>
        <p> Primera vez que se elaboró: <b>${beer.firstBrewed}</b></p>
        <p>Likes: <b>${beer.likes}</b></p> 
        <form id="quote-form" class="quote-form" novalidate>
          <div class="quote-input">
            <label for="quote">Comentarios</label>
            <input
            required
            id="quote"
            placeholder="Mete un comentario"
            class="input primary"
            type="text"
            />
          </div>
          <button type="submit" class="button primary">Comentar</button>
        </form>
      </div>
    </article>
  </section>
`

const renderDetail = async id => {
  try {
    const beer = await getBeerById(id)
    // await renderQuotes(id)
    beerSection.innerHTML = detailTemplate(beer)
  } catch (err) {
    console.error(err.message)
  }
}

export default renderDetail
