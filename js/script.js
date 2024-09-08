/*==================== beralih ikon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.scrolling-container');
    const items = document.querySelectorAll('.scrolling-item');
    const totalItems = items.length;
    let index = 0;

    document.getElementById('next').addEventListener('click', function() {
        if (index < totalItems - 1) {
            index++;
        } else {
            index = 0; // Loop back to the first item
        }
        updateScrollPosition();
    });

    document.getElementById('prev').addEventListener('click', function() {
        if (index > 0) {
            index--;
        } else {
            index = totalItems - 1; // Loop back to the last item
        }
        updateScrollPosition();
    });

    function updateScrollPosition() {
        const offset = -index * 100;
        container.style.transform = `translateX(${offset}%)`;
    }
});


/*==================== gulir bagian tautan aktif ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== navbar lengket ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== hapus ikon sakelar dan navbar saat mengeklik tautan navbar (gulir) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== gulir mengungkapkan ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .services-container, .education-column, .skills-row, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .contact p', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== mengetik js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Cyber Security', 'Full Stack Developer', 'YouTuber', 'gamers'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});