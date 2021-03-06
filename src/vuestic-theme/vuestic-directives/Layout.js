export default {

  bind: function (el, binding) {
    let navbar = el.querySelector('.vuestic-navbar')
    let sidebar = el.querySelector('.vuestic-sidebar')

    const desktopWidth = 992
    // Hide
    sidebar.classList.add('sidebar-hidden')
    // end
    el.resizeWindow = (evt) => {
      setTimeout(function () {
        let openedDropdown = navbar.querySelector('.show')
        let selector = navbar.querySelector('.header-selector')
        if (openedDropdown && document.documentElement.clientWidth < desktopWidth &&
          !evt.target.classList.contains('header-selector')) {
          sidebar.classList.add('sidebar-hidden')
          selector.classList.remove('i-menu-expanded')
          selector.classList.add('i-menu-collapsed')
        }
        if (evt.target.classList.contains('header-selector')) {
          sidebar.classList.toggle('sidebar-hidden')
          selector.classList.toggle('i-menu-expanded')
          selector.classList.toggle('i-menu-collapsed')
        }
      }, 0)
    }

    navbar.addEventListener('click', el.resizeWindow)

    sidebar.addEventListener('click', () => {
      if (document.documentElement.clientWidth < desktopWidth) {
        sidebar.classList.add('sidebar-hidden')
      }
    })
  },
  unbind: (el) => {
    el.removeEventListener('click', el.resizeWindow)
  }
}
