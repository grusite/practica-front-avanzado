import { renderBeersDOM } from './beers.js'
import { showSearchFilter, hideSearchFilter } from './navbar.js'
import { renderDetail } from './detail.js'
import { renderHeaderImg, renderTituloHeader } from './ui.js'

page('/', () => {
  showSearchFilter()
  renderHeaderImg('', 'sized')
  renderTituloHeader('Lista de cervezas')
  renderBeersDOM()
})
page('/detail/:id', async ctx => {
  const {
    params: { id },
  } = ctx
  hideSearchFilter()
  renderHeaderImg('noImg')
  renderTituloHeader('Detalle de la cerveza')
  renderDetail(id)
})
page('*', () => {
  hideSearchFilter()
  renderHeaderImg()
  renderTituloHeader('', '')
})
page()
