/**
 * MindWorx Static Website Logic
 * Handles N8N Form Submission and Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    setupContactForm();
    setupUrgentToggle();
});

// --- Mobile Navigation ---
function setupMobileNav() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('hidden');
        });
    }
}

// --- Contact Form Handling (N8N Webhook) ---
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Disable button and show loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        if (formStatus) {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Construct Payload for N8N
        const payload = {
            operation: "create",
            data: {
                full_name: data.FullName,
                phone: (data.Phone || "").replace(/\D/g, ''), // Send digits only
                email: data.Email || "",
                zip: data.Zip,
                subject: data.Subject,
                status: data.Urgent ? "Urgent" : "New",
                notes: "Submitted from MindWorx.ai website."
            }
        };

        try {
            // Attempt to use the secure API route (Vercel Function)
            // Note: This requires 'vercel dev' locally, or deployment to Vercel.
            // 'npx serve' will not handle /api/submit route.
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                if (formStatus) {
                    const hasPhone = data.Phone && data.Phone.replace(/\D/g, '').length >= 10;
                    formStatus.textContent = hasPhone
                        ? 'Message sent successfully! We will be in touch shortly.'
                        : 'Message sent successfully! We\'ll email you shortly.';
                    formStatus.className = 'form-status success';
                }
                form.reset();
            } else if (response.status === 409) {
                if (formStatus) {
                    formStatus.textContent = getDuplicateMessage();
                    formStatus.className = 'form-status success'; // Friendly message, so use success style
                }
                form.reset();
            } else {
                throw new Error('API request failed');
            }
        } catch (error) {
            console.error('API /api/submit failed:', error);

            // Fallback removed for security. We do not want to expose the N8N URL to the client.
            if (formStatus) {
                formStatus.textContent = 'Something went wrong. Please try again later.';
                formStatus.className = 'form-status error';
            }
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Schedule Consultation';
            }
        }
    });
}

// --- Dynamic UX Logic ---
function setupUrgentToggle() {
    const phoneInput = document.getElementById('phone');
    const urgentContainer = document.getElementById('urgent-container');

    if (phoneInput && urgentContainer) {
        // Format phone number as user types
        phoneInput.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

            // Check for valid length (10 digits)
            const rawNumbers = e.target.value.replace(/\D/g, '');
            if (rawNumbers.length >= 10) {
                urgentContainer.classList.remove('hidden');
                urgentContainer.classList.add('fade-in');
            } else {
                urgentContainer.classList.add('hidden');
                urgentContainer.classList.remove('fade-in');

                // Uncheck if hidden
                const checkbox = document.getElementById('urgent');
                if (checkbox) checkbox.checked = false;
            }
        });

        // Toggle Button Text based on Checkbox
        const checkbox = document.getElementById('urgent');
        const submitBtn = document.getElementById('submit-btn');

        if (checkbox && submitBtn) {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    submitBtn.textContent = "Get Live Demonstration";
                } else {
                    submitBtn.textContent = "Schedule Consultation";
                }
            });
        }
    }
}

// --- Helper: Random Duplicate Messages ---
function getDuplicateMessage() {
    const messages = [
        "Deja vu! We'll call you shortly.",
        "You're fast! Expect a call soon.",
        "Double tap! We'll ring you in a sec.",
        "VIP Status! Calling you ASAP.",
        "Enthusiasm noted! We'll call you back.",
        "Already received! Stand by for a call.",
        "Speedy! We're dialing now.",
        "Great minds! We'll be in touch shortly.",
        "All good! Expect a call soon.",
        "Loud and clear! Calling you back.",
        "You're on the list! Talk soon.",
        "Got it! We'll call you right back.",
        "We know! Calling you in a moment.",
        "Already received. We'll ring you!",
        "You're in! Stand by for a call.",
        "We have your info! Calling now.",
        "No need to ask twice! We'll call.",
        "Already queued! Calling you soon.",
        "We're on it! Expect a ring.",
        "Copy that! Calling you back."
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}
