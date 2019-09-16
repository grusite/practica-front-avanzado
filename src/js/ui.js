const loader = document.querySelector('#loader')

const toggle = element => (removeClass, addClass) => {
  element.classList.remove(removeClass)
  element.classList.add(addClass)
}

const toggleClass = (element, toggleClass) => {
  element.classList.toggle(toggleClass)
}

const renderLoader = toggle(loader)

export { toggle, toggleClass, renderLoader }
