//  Modal/Carousel Functions (Gallery/Portfolio) 
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    const firstSlide = document.querySelector(`#${modalId} .carousel-img`);
    firstSlide.classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    const activeSlide = document.querySelector(`#${modalId} .carousel-img.active`);
    if (activeSlide) {
        activeSlide.classList.remove('active');
    }
}

function moveSlide(n, modalId) {
    const slides = document.querySelectorAll(`#${modalId} .carousel-img`);
    const currentSlide = document.querySelector(`#${modalId} .carousel-img.active`);
    const index = Array.from(slides).indexOf(currentSlide);
    const totalSlides = slides.length;

    let newIndex;
    if (n > 0) {
        newIndex = index === totalSlides - 1 ? 0 : index + 1;
    } else {
        newIndex = index === 0 ? totalSlides - 1 : index - 1;
    }

    currentSlide.classList.remove('active');
    slides[newIndex].classList.add('active');
}

// Tab Functions (About/Skills) 
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function move(barId, targetWidth) {
    var elem = document.getElementById(barId);
    var width = 0;
    var id = setInterval(frame, 20);
    
    function frame() {
        if (width >= targetWidth) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

// Project Sorting Functions (Projects) 
function toggleSort() {
    const button = document.getElementById('sortButton');
    const projectGrid = document.querySelector('.project-grid');
    const projects = Array.from(document.querySelectorAll('.project-pane'));
    
   
    const currentSort = button.getAttribute('data-sort-type');
    const newSort = currentSort === 'recent' ? 'timeline' : 'recent';
    
    
    projects.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return newSort === 'recent' ? dateB - dateA : dateA - dateB;
    });
    
   
    button.textContent = `Sort: ${newSort === 'recent' ? 'Most Recent' : 'Timeline'}`;
    button.setAttribute('data-sort-type', newSort);
    
    
    projects.forEach(project => projectGrid.appendChild(project));
}


window.addEventListener('DOMContentLoaded', () => {
    const projects = Array.from(document.querySelectorAll('.project-pane'));
    const projectGrid = document.querySelector('.project-grid');
    
    projects.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA;  
    });
    
    projects.forEach(project => projectGrid.appendChild(project));
});

// Contact Form Functions (Contact) 
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
   
    if (!name || !message) {
        alert('Name and message are required fields');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    
    alert('Form submitted successfully!');
    return true;
}

// Global Event Handlers 
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
