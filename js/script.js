var navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        removeActiveClasses()
        navLink.classList.add('active')
    })
})

// for(navLink of navLinks) {
//       navLink.addEventListener('click', () => {
//           removeActiveClasses()
//           navLink.classList.add('active')
//       })
// }
//
// function addActiveClass(navLink) {
//     //removeActiveClasses()
//     navLink.classList.add('active')
// }

function removeActiveClasses() {
  for(navLink of navLinks) {
        navLink.classList.remove('active')
  }
}
