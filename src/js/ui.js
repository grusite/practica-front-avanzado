const loader = document.querySelector('#loader')
const imgHeader = document.querySelector('.img-header')
const tituloHeader = document.querySelector('.titulo-lista')

const toggle = element => (removeClass, addClass) => {
  element.classList.remove(removeClass)
  element.classList.add(addClass)
}

const renderLoader = toggle(loader)

const renderTituloHeader = text => {
  tituloHeader.innerHTML = text
}

// const notFoundTemplate = `
//   <picture>
//     <img id="img-notfound" src="/img/404-img.png" alt="Not Found IMG" />
//   </picture>
// `
const sizedHeaderImg = '<source srcset="/img/sized-img-header.jpg" media="(min-width: 768px)" />'
const headerImg = '<img id="img-header" src="/img/img-header.jpg" alt="Beer" />'
const notFoundImg = '<img id="img-header" src="/img/404-img.png" alt="Not Found" />'

const imageTemplate = sizedImg => `
<picture>
  ${sizedImg === 'sized' ? sizedHeaderImg + headerImg : notFoundImg}
</picture>
`
const renderHeaderImg = (noImg, sizedImg) => {
  if (noImg === 'noImg') imgHeader.innerHTML = ''
  else {
    imgHeader.innerHTML = imageTemplate(sizedImg)
  }
}

export { toggle, renderLoader, renderHeaderImg, renderTituloHeader }
