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

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
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

let ascending = true;

function toggleSort() {
    ascending = !ascending;
    const button = document.getElementById('sortButton');
    button.textContent = `Sort: ${ascending ? 'Oldest First' : 'Most Recent'}`;

    const grid = document.querySelector('.project-grid');
    const panes = Array.from(grid.getElementsByClassName('project-pane'));

    panes.sort((a, b) => {
        const dateA = a.getAttribute('data-date');
        const dateB = b.getAttribute('data-date');
        return ascending ? 
            dateA.localeCompare(dateB) : 
            dateB.localeCompare(dateA);
    });

    panes.forEach(pane => grid.appendChild(pane));
}

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

// Add DOMContentLoaded event listener to ensure DOM is loaded before running initial sort
document.addEventListener('DOMContentLoaded', function() {
    toggleSort();
});
