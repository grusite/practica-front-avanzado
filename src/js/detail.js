import api from './api.js'
// import { renderQuotes } from './quotes.js'

const { getBeerById } = api()

const detailTemplate = beer => `
    <div class = "detail-section">
        <header id="${beer.beerId}">
            <div class="title-section">    
                <h1> ${beer.name} </h1>
            </div>
            <div class="image-container">
                <img src="${beer.image ? beer.image : '/src/img/default.jpg'}" />
            </div>
        </header>
        <div class="content">
            ${beer.description}
        </div>
    <div>
`

const renderDetail = async id => {
  try {
    const mainSelector = document.querySelector('main')
    const beer = await getBeerById(id)
    // await renderQuotes(id)
    mainSelector.innerHTML = detailTemplate(beer)
  } catch (err) {
    console.error(err.message)
  }
}

export default renderDetail
