// Placeholder for any JavaScript functionality if needed

// Example: Adding smooth scrolling functionality for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
