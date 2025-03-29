// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button for smaller screens
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('div:nth-child(2)');
    const loginButtons = nav.querySelector('div:last-child');
    
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.className = 'md:hidden text-white text-2xl';
    mobileMenuButton.id = 'mobile-menu-button';
    
    nav.insertBefore(mobileMenuButton, navLinks);
    
    // Toggle mobile menu
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('right-0');
        navLinks.classList.toggle('bg-green-800');
        navLinks.classList.toggle('p-4');
        navLinks.classList.toggle('space-y-4');
        navLinks.classList.toggle('space-x-6');
    });

    // Form validation for contact page
    if (document.querySelector('form')) {
        const form = document.querySelector('form');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const firstName = document.getElementById('first-name').value.trim();
            const lastName = document.getElementById('last-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!firstName || !lastName || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Form submission would go here
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }

    // Equipment card hover effects
    const equipmentCards = document.querySelectorAll('.equipment-card, .feature-card');
    equipmentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // FAQ accordion functionality
    const faqButtons = document.querySelectorAll('.map-container + div button');
    if (faqButtons.length > 0) {
        faqButtons.forEach(button => {
            button.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                // Toggle answer visibility
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Rental calculator functionality (example)
    if (document.getElementById('rental-calculator')) {
        // This would be implemented based on specific rental calculation needs
        console.log('Rental calculator would be initialized here');
    }
});

// Additional functions can be added here
function showAlert(message) {
    alert(message);
}

// Equipment filtering functionality
function filterEquipment() {
    // This would be implemented on the equipment page
    console.log('Equipment filtering would be implemented here');
}