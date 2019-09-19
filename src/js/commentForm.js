import api from './api.js'
import { renderComments } from './comments.js'

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
  //   const CommentList = document.querySelector('#CommentList')

  commentsForm.addEventListener('submit', async evt => {
    evt.preventDefault()
    try {
      if (commentsInput.validity.valid) {
        // const id = window.location.pathname.split("/detail/")[1]
        await createAndGetCommentById(id, commentsInput.value)
        // CommentList.innerHTML = CommentTemplate(response)
        renderComments(id)
      }
    } catch (err) {
      console.error(err.message)
    }
  })
}

export { addCommentListener, commentTemplate }
