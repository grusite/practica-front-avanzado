import api from './api.js'
import { quoteTemplate } from './quotesForm.js'

const QUOTES_API = 'https://quotes-api-keepcoding.herokuapp.com/api/v1'

const { getQuotes } = api(QUOTES_API)

const renderQuotes = async id => {
  try {
    const quoteList = document.querySelector('#quoteList')
    const quotes = await getQuotes(id)
    const quotesElements = quotes.map(quoteTemplate).join('')
    quoteList.innerHTML = quotesElements
  } catch (err) {
    console.error(err.message)
  }
}

export { renderQuotes }
