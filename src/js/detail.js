import { renderLoader } from './ui.js'
import api from './api.js'
import { beerSection } from './navbar.js'
// import { renderQuotes } from './quotes.js'

const { getBeerById, createAndGetLikesById } = api()

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
        <form id="quote-form" class="quote-form" novalidate>
          <div class="like">
            <p><b><span>Likes:</span> ${beer.likes}</b></p>
            <div id="give-like">        
              <i class="fas fa-heart fa-2x"></i>
            </div>
          </div>
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

const addLikerListener = id => {
  const giveLike = document.querySelector('#give-like')
  giveLike.addEventListener('click', async evt => {
    try {
      renderLoader('hide', 'show')
      console.log('clicked')
      console.log(id)
      evt.preventDefault()
      await createAndGetLikesById(id)
      // beerSection.innerHTML = detailTemplate(beerLiked)
      renderDetail(id)
    } catch (err) {
      console.err(err.message)
    } finally {
      renderLoader('show', 'hide')
    }
  })
}

const renderDetail = async id => {
  try {
    const beer = await getBeerById(id)
    // await renderQuotes(id)
    beerSection.innerHTML = detailTemplate(beer)
  } catch (err) {
    console.error(err.message)
  } finally {
    addLikerListener(id)
  }
}

export { renderDetail, addLikerListener }
