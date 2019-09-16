import { toggle } from './ui.js'
import storage from './storage.js'
import renderBeersDOM from './beers.js'

const { setItem, getItem } = storage()

const searchIcon = document.querySelector('#navbar-search')
const inputSearch = document.querySelector('#search-form .input')
const closeIcon = document.querySelector('#navbar-close')
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('.navbar .input.search')

const handleSearchIcon = toggle(searchIcon)
const handleInputSearch = toggle(inputSearch)
const handleCloseIcon = toggle(closeIcon)

searchInput.value = getItem('navbar-input')

searchIcon.addEventListener('click', () => {
  handleSearchIcon('show', 'no-show')
  handleInputSearch('no-show', 'show')
  handleCloseIcon('no-show', 'show')
})

closeIcon.addEventListener('click', () => {
  handleSearchIcon('no-show', 'show')
  handleInputSearch('show', 'no-show')
  handleCloseIcon('show', 'no-show')
})

const showSearchFilter = () => {
  handleSearchIcon('no-show', 'show')
  handleInputSearch('show', 'no-show')
  handleCloseIcon('show', 'no-show')
}

const hideSearchFilter = () => {
  handleSearchIcon('show', 'no-show')
  handleInputSearch('show', 'no-show')
  handleCloseIcon('show', 'no-show')
}

searchForm.addEventListener('submit', evt => {
  evt.preventDefault()
  if (searchInput.validity.valid) {
    //  Render Shows
    setItem('navbar-input', searchInput.value)
    renderBeersDOM(searchInput.value)
  }
})

export { showSearchFilter, hideSearchFilter }
