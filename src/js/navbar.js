import { toggle } from './ui.js'

const searchIcon = document.querySelector('#navbar-search')
const inputSearch = document.querySelector('#search-form .input')
const closeIcon = document.querySelector('#navbar-close')

const handleSearchIcon = toggle(searchIcon)
const handleInputSearch = toggle(inputSearch)
const handleCloseIcon = toggle(closeIcon)

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
