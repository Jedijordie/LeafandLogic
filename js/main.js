//-------------------------------------------------NAV BAR--------------------------------------------------------------//  

document.addEventListener('DOMContentLoaded', function () {
    // Select all nav links
    var navLinks = document.querySelectorAll('nav a[href]');

    // Get the current pathname
    var currentPathname = window.location.pathname;

    // Log the current pathname
    console.log('Current Pathname:', currentPathname);

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('text-green-800', 'border-b-4', 'border-green-800');
        link.classList.add('text-gray-500');
    });

    // Find the nav link that matches the current page and add the active class
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPathname) {
            link.classList.add('text-green-800', 'border-b-4', 'border-green-800');
            link.classList.remove('text-gray-500');
        }
    });
});

// JavaScript to handle menu toggling
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    
    mobileMenuButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("hidden"); // Toggle the 'hidden' class
    });
});

//-------------------------------------------------SLIDESHOW--------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.getElementById("slideshow");
    if (slideshow) {
        const slides = slideshow.children;
        const slideCount = slides.length;
        let slideIndex = 0;
        let slideWidth = slideshow.offsetWidth;

        function updateSlidePosition() {
            const shift = -(slideIndex * slideWidth);
            slideshow.style.transform = `translateX(${shift}px)`;
        }

        updateSlidePosition();

        window.addEventListener("resize", function() {
            slideWidth = slideshow.offsetWidth;
            updateSlidePosition();
        });

        document.getElementById("next").addEventListener("click", function() {
            if (slideIndex < slideCount - 1) {
                slideIndex++;
                updateSlidePosition();
            }
        });

        document.getElementById("prev").addEventListener("click", function() {
            if (slideIndex > 0) {
                slideIndex--;
                updateSlidePosition(); 
            }
        });
    }
});