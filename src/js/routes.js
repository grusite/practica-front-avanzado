import renderBeersDOM from './beers.js'
import { showSearchFilter, hideSearchFilter } from './navbar.js'
import renderDetail from './detail.js'
// import { hideCommentForm, showCommentForm } from './ui.js'
// import { addQuoteListener } from './quotesForm.js'
// import { renderQuotes } from './quotes.js'

page('/', () => {
  showSearchFilter()
  // hideCommentForm()
  renderBeersDOM()
})
page('/detail/:id', ctx => {
  console.log('Detail')
  const {
    params: { id },
  } = ctx
  console.log(id)
  hideSearchFilter()
  // showCommentForm()
  renderDetail(id)
  // addQuoteListener(id)
  // renderQuotes(id)
})
page()
