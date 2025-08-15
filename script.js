// Load section content
async function loadSection(sectionName) {
    try {
        const response = await fetch(`${sectionName}.html`);
        const html = await response.text();
        return html;
    } catch (error) {
        console.error(`Error loading ${sectionName}.html:`, error);
        return '';
    }
}

// Load all sections
async function loadAllSections() {
    const contentDiv = document.getElementById('content');
    const sections = ['home', 'experiences', 'projects', 'footer'];
    
    for (const section of sections) {
        const html = await loadSection(section);
        contentDiv.innerHTML += html;
    }
    
    // Reinitialize ScrollReveal after content is loaded
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-container, .projects-box', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .abt-img', { origin: 'left' });
}

// Load sections when DOM is ready
document.addEventListener('DOMContentLoaded', loadAllSections);

// Menu functionality
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Navigation and scroll functionality
window.onscroll = () => {
    let sections = document.querySelectorAll('section'); 
    let navLinks = document.querySelectorAll('header nav a'); 
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


