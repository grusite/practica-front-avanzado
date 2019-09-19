const loader = document.querySelector('#loader')
const imgHeader = document.querySelector('.img-header')

const toggle = element => (removeClass, addClass) => {
  element.classList.remove(removeClass)
  element.classList.add(addClass)
}

const renderLoader = toggle(loader)

const renderImgHeader = toggle(imgHeader)

export { toggle, renderLoader, renderImgHeader }
