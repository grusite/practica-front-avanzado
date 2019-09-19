const loader = document.querySelector('#loader')
const imgHeader = document.querySelector('.img-header')
const tituloHeader = document.querySelector('.titulo-lista')

const toggle = element => (removeClass, addClass) => {
  element.classList.remove(removeClass)
  element.classList.add(addClass)
}

const renderLoader = toggle(loader)

const renderImgHeader = toggle(imgHeader)

const renderTituloHeader = text => {
  tituloHeader.innerHTML = text
}

export { toggle, renderLoader, renderImgHeader, renderTituloHeader }
