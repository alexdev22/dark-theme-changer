const darkButton = document.querySelector('.dark-theme-button')
const body = document.querySelector('body')

darkButton.addEventListener('click', (e) => {
    body.classList.toggle('dark-body')
    if (darkButton.textContent === 'Dark Theme') {
        darkButton.textContent = 'Light theme'
    } else {
        darkButton.textContent = 'Dark Theme'
    }
})