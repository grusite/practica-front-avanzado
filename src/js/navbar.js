import { toggle } from './ui.js'
import storage from './storage.js'
import renderBeersDOM from './beers.js'

const { setItem, getItem } = storage()

const searchIcon = document.querySelector('#navbar-search')
const dropdown = document.querySelector('.navbar .dropdown')
const inputSearch = document.querySelector('#search-form .input')
const closeIcon = document.querySelector('#navbar-close')
const searchForm = document.querySelector('#search-form')

const handleSearchIcon = toggle(searchIcon)
const handleDropdown = toggle(dropdown)
const handleInputSearch = toggle(inputSearch)
const handleCloseIcon = toggle(closeIcon)

const hideInputs = () => {
  handleDropdown('show', 'no-show')
  handleInputSearch('show', 'no-show')
  handleCloseIcon('show', 'no-show')
}

const showInputs = () => {
  handleDropdown('no-show', 'show')
  handleInputSearch('no-show', 'show')
  handleCloseIcon('no-show', 'show')
}

const showSearchFilter = () => {
  handleSearchIcon('no-show', 'show')
  hideInputs()
}

const hideSearchFilter = () => {
  handleSearchIcon('show', 'no-show')
  hideInputs()
}

inputSearch.value = getItem('navbar-input')
if (getItem('dropdown-input')) {
  dropdown.value = getItem('dropdown-input')
}

searchIcon.addEventListener('click', () => {
  handleSearchIcon('show', 'no-show')
  showInputs()
})

closeIcon.addEventListener('click', () => {
  showSearchFilter()
})

searchForm.addEventListener('submit', evt => {
  evt.preventDefault()
  if (inputSearch.validity.valid) {
    //  Render Shows
    setItem('navbar-input', inputSearch.value)
    setItem('dropdown-input', dropdown.value)
    renderBeersDOM(inputSearch.value, dropdown.value)
  }
})

export { showSearchFilter, hideSearchFilter }
