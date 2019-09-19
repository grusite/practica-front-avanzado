import { renderBeersDOM } from './beers.js'
import { showSearchFilter, hideSearchFilter, beerSection } from './navbar.js'
import { renderDetail } from './detail.js'
import { renderImgHeader, renderTituloHeader } from './ui.js'

const notFoundTemplate = `
  <img id="img-notfound" src="./src/img/notFound.jpg" alt="Not Found IMG" />
`
const renderNotFound = () => (beerSection.innerHTML = notFoundTemplate)

page('/', () => {
  showSearchFilter()
  renderImgHeader('no-show', 'show')
  renderTituloHeader('Lista de cervezas')
  renderBeersDOM()
})
page('/detail/:id', async ctx => {
  const {
    params: { id },
  } = ctx
  hideSearchFilter()
  renderImgHeader('show', 'no-show')
  renderTituloHeader('Detalle de la cerveza')
  renderDetail(id)
})
page('*', () => {
  hideSearchFilter()
  renderImgHeader('show', 'no-show')
  renderTituloHeader('')
  renderNotFound()
})
page()
