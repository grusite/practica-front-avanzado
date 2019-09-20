import { renderLoader } from './ui.js'
import api from './api.js'
import { beerSection } from './navbar.js'
import { addCommentListener, commentTemplate } from './commentForm.js'

const { getBeerById, createAndGetLikesById } = api()

const detailTemplate = beer => `
  <section class="cards">  
    <article class="card">
      <picture class="thumbnail">
        <img src="${beer.image ? beer.image : '/img/default.jpg'}" alt="Beer picture">
      </picture>
      <div class="card-content">
        <h2>${beer.name}</h2>
        <p>${beer.description}</p>
        <p> Primera vez que se elaboró: <b>${beer.firstBrewed}</b></p>
        <section id="commentSection" class="comment-section">
          <div id="detail" class="detail-content"></div>
          <div class="comments-list">
            <h2>Comentarios</h2>
            <div id="commentList"></div>
          </div>
          <form id="comment-form" class="comment-form" novalidate>
            <div class="comment-input">
              <label for="comment">Comentarios</label>
              <input
              required
              id="comment"
              placeholder="Mete un comentario"
              class="input primary"
              type="text"
              />
            </div>
            <button type="submit" class="button primary">Comentar</button>
          </form>
        </section>
        <div class="like">
          <p><b><span>Likes:</span> ${beer.likes}</b></p>
          <div id="give-like">        
            <i class="fas fa-heart fa-2x"></i>
          </div>
        </div>
      </div>
    </article>
  </section>
`

const addLikerListener = id => {
  const giveLike = document.querySelector('#give-like')
  giveLike.addEventListener('click', async evt => {
    try {
      renderLoader('hide', 'show')
      evt.preventDefault()
      await createAndGetLikesById(id)
      await renderDetail(id)
    } catch (err) {
      console.err(err.message)
    } finally {
      renderLoader('show', 'hide')
    }
  })
}

const renderDetail = async id => {
  try {
    renderLoader('hide', 'show')
    const beer = await getBeerById(id)
    const comments = beer.comment
    beerSection.innerHTML = detailTemplate(beer)
    if (comments) {
      const commentList = document.querySelector('#commentList')
      const commentsElements = comments.map(commentTemplate).join('')
      commentList.innerHTML = commentsElements
    }
  } catch (err) {
    console.error(err.message)
  } finally {
    addLikerListener(id)
    addCommentListener(id)
    renderLoader('show', 'hide')
  }
}

export { renderDetail, addLikerListener }
