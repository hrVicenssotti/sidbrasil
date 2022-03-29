let container
let selectedCategor
function selectCategor(width) {
    if (width <= 500) {
        return 'activeMobile'
    }
    else if (width <= 1100) {
        return 'activeTablet'
    }
    else {
        return 'activeDesktop'
    }
}
function entryImage(element) {
    selectedCategor = selectCategor(window.innerWidth)
    container = document.querySelector(".container")
    container.children[0].src = element.src
    container.children[0].alt = element.alt
    container.classList.toggle(selectedCategor)
}
document.querySelectorAll(".demonstracoes img").forEach((element) => {
    element.addEventListener('click', (event) => {
        entryImage(event.target)
    })
})
document.querySelectorAll(".inovacoes img").forEach((element) => {
    element.addEventListener('click', (event) => {
        entryImage(event.target)
    })
})
document.querySelector('.container').addEventListener('click', (event) => {
    if (event.target.tagName !== 'IMG') {
        container.classList.toggle(selectedCategor)
    }
})