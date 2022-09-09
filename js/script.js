const btnMobile = document.querySelector('#btn-mobile')
const nav = document.querySelector('nav')
 
function toggleMenu() {
  nav.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)


function resizeScreen() {
  const screen = matchMedia('(min-width: 1000px)').matches
  if (screen) {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active')

      }
  }
}

window.addEventListener('resize', resizeScreen)

function toggleBtnMobile() {

      btnMobile.classList.toggle('open')

}

btnMobile.addEventListener('click', toggleBtnMobile)

const whyUsCard = document.querySelectorAll('.card-list li')

function handleHoverCard(event) {
  const card = event.target
  const childrenCards = Array.from(event.srcElement.children)
  
  card.classList.add('hover')
  childrenCards.forEach((item) => {
    item.classList.add('hover')
  })
  
  console.log(card, childrenCards)


}
function handleOutHoverCard(event) {
  const card = event.target
  const childrenCards = Array.from(event.srcElement.children)
  
  card.classList.remove('hover')
  childrenCards.forEach((item) => {
    item.classList.remove('hover')
  })
}

whyUsCard.forEach((item) => {
  item.addEventListener('mouseenter', handleHoverCard)
  item.addEventListener('mouseout', handleOutHoverCard)

})