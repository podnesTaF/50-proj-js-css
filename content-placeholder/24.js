const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="img"/>'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quae.'
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2022'

    animated_bgs.forEach(animated_bg => animated_bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(animated_bg_text => animated_bg_text.classList.remove('animated-bg-text'))
}

