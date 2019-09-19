import api from './api.js'
import { renderComments } from './comments.js'

const { createQuote } = api(QUOTES_API)

const quoteTemplate = ({ quote, date }) => `
    <div class="list-item">
        <p>${quote}</p>
        <span>${date}</span>
    </div>
`

const addQuoteListener = id => {
  const quotesForm = document.querySelector('#quote-form')
  const quotesInput = document.querySelector('#quote')
  //   const quoteList = document.querySelector('#quoteList')

  quotesForm.addEventListener('submit', async evt => {
    evt.preventDefault()
    try {
      if (quotesInput.validity.valid) {
        // const id = window.location.pathname.split("/detail/")[1]
        await renderComments(id, quotesInput.value)
        // quoteList.innerHTML = quoteTemplate(response)
        renderQuotes(id)
      }
    } catch (err) {
      console.error(err.message)
    }
  })
}

export { addQuoteListener, quoteTemplate }
