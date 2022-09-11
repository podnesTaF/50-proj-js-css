const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'massage one',
    'massage two',
    'massage three',
    'massage four'
]

btn.addEventListener('click', () => createNotification('this is invalid data', 'fail'))

function createNotification(message, type) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : 'info')
    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 2000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random()*messages.length)]
}