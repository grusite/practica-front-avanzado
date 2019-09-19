import { renderBeersDOM } from './beers.js'
import { showSearchFilter, hideSearchFilter, beerSection } from './navbar.js'
import { renderDetail } from './detail.js'
import { renderImgHeader } from './ui.js'

const notFoundTemplate = `
  <img id="img-notfound" src="./src/img/notFound.jpg" alt="Not Found IMG" />
`
const renderNotFound = () => (beerSection.innerHTML = notFoundTemplate)

page('/', () => {
  showSearchFilter()
  renderImgHeader('no-show', 'show')
  renderBeersDOM()
})
page('/detail/:id', async ctx => {
  const {
    params: { id },
  } = ctx
  hideSearchFilter()
  renderImgHeader('show', 'no-show')
  renderDetail(id)
  // addCommentListener(id)
  // renderComments(id)
})
page('*', () => {
  hideSearchFilter()
  renderImgHeader('show', 'no-show')
  renderNotFound()
})
page()
