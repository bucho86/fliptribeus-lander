// Simple form handling with steps
let currentStep = 1;

document.addEventListener('DOMContentLoaded', function() {
    showStep(1); // Show first step initially

    // Handle Next button clicks
    const nextButtons = document.querySelectorAll('.next-btn');
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentStep++;
            showStep(currentStep);
        });
    });

    // Handle Back button clicks
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentStep--;
            showStep(currentStep);
        });
    });

    // Handle form submission
    const form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get all form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            comments: document.getElementById('comments').value
        };
        console.log('Form submitted:', formData);
        // Redirect to thank you page
        window.location.href = 'thank-you.html';
    });
});
function handleSubmit(event) {
    event.preventDefault();
    // Store form data or process it as needed
    window.location.href = 'thank-you.html';
}



function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });

    // Show current step
    const currentStep = document.getElementById(`step${step}`);
    if (currentStep) {
        currentStep.style.display = 'block';
    }
}