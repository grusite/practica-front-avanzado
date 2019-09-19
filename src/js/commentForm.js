import api from './api.js'
import { renderLoader } from './ui.js'
import { renderDetail } from './detail.js'

const { createAndGetCommentById } = api()

const commentTemplate = beer => `
    <div class="list-item">
        <p>${beer.comment}</p>
        <span>${beer.dateComment}</span>
    </div>
`

const addCommentListener = id => {
  const commentsForm = document.querySelector('#comment-form')
  const commentsInput = document.querySelector('#comment')

  commentsForm.addEventListener('submit', async evt => {
    evt.preventDefault()
    try {
      renderLoader('hide', 'show')
      if (commentsInput.validity.valid) {
        await createAndGetCommentById(id, commentsInput.value)
        renderDetail(id)
      }
    } catch (err) {
      console.error(err.message)
    } finally {
      renderLoader('show', 'hide')
    }
  })
}

export { addCommentListener, commentTemplate }
