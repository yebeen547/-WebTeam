// script.js

// 실시간 시계 기능
function updateClock() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  const timeString = `${hours}:${minutes}:${seconds}`
  const clockElement = document.getElementById('clock')
  if (clockElement) {
    clockElement.textContent = timeString
  }
}

setInterval(updateClock, 1000)
updateClock()

const toolBoxes = document.querySelectorAll('.tool')

function revealOnScroll() {
  const windowHeight = window.innerHeight
  toolBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < windowHeight - 50) {
      box.style.opacity = 1
      box.style.transform = 'translateY(0)'
    }
  })
}

window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)
