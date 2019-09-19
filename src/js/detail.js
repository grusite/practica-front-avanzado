import { renderLoader } from './ui.js'
import api from './api.js'
import { beerSection } from './navbar.js'
import { addCommentListener, commentTemplate } from './commentForm.js'

const { getBeerById, createAndGetLikesById, createAndGetCommentById } = api()

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
        <div class="like">
          <p><b><span>Likes:</span> ${beer.likes}</b></p>
          <div id="give-like">        
            <i class="fas fa-heart fa-2x"></i>
          </div>
        </div>
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
      renderDetail(id)
    } catch (err) {
      console.err(err.message)
    } finally {
      renderLoader('show', 'hide')
    }
  })
}

// const renderComments = async id => {
//   try {
//     const commentList = document.querySelector('#commentList')
//     const comments = await createAndGetCommentById(id)
//     const commentsElements = comments.map(commentTemplate).join('')
//     commentList.innerHTML = commentsElements
//   } catch (err) {
//     console.error(err.message)
//   }
// }

const renderDetail = async id => {
  try {
    const beer = await getBeerById(id)
    // await rendercomments(id)
    beerSection.innerHTML = detailTemplate(beer)
    const commentList = document.querySelector('#commentList')
    const comments = beer.comment
    const commentsElements = comments.map(commentTemplate).join('')
    commentList.innerHTML = commentsElements
  } catch (err) {
    console.error(err.message)
  } finally {
    addLikerListener(id)
    addCommentListener(id)
  }
}

export { renderDetail, addLikerListener }
