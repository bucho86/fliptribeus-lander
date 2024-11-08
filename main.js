// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    setupFormValidation();
    initializeSocialSharing();
});

function initializeNavigation() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function setupFormValidation() {
    const form = document.getElementById('waitlistForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    // Form submission logic
    window.location.href = 'thank-you.html';
}
