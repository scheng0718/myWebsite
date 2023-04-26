const navBar = document.querySelector('.navbar')
const content = document.querySelector('#content-container')
const footer = document.querySelector('.footer')

function renderPage(event) {
  const target = event.target
  let rawHTML = ''
  if (target.matches('.project-1')) {
    window.open("https://scheng0718.github.io/adele-power/", "_blank");
  } else if (target.matches('.project-2')) {
    window.open("https://scheng0718.github.io/boba_tea_lover/", "_blank");
  } else if (target.matches('.project-3')) {
    window.open("https://scheng0718.github.io/world_of_cinema/", "_blank");
  } else if (target.matches('.project-4')) {
    window.open("https://scheng0718.github.io/stay_organized/", "_blank");
  }
}

footer.addEventListener('click', renderPage)