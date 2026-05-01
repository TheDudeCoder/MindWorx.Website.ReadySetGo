/**
 * MindWorx Static Website Logic
 * Handles contact-form submission (POST /api/submit → Resend email) and mobile navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    setupContactForm();
    setupPhoneFormatter();
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

// --- Contact Form Handling (POST → /api/submit → Resend) ---
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    if (!form) return;

    const defaultButtonText = submitBtn ? submitBtn.textContent : 'Submit';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (formStatus) {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const fullName = (data.FullName || '').trim();
        const email = (data.Email || '').trim();
        const phoneDigits = (data.Phone || '').replace(/\D/g, '');

        // All three contact fields are required.
        if (!fullName) {
            showError(formStatus, 'Please enter your name.');
            return;
        }
        if (!email) {
            showError(formStatus, 'Please enter your email address.');
            return;
        }
        if (phoneDigits.length < 10) {
            showError(formStatus, 'Please enter a valid 10-digit phone number.');
            return;
        }

        const payload = {
            FullName: fullName,
            Email: email,
            Phone: phoneDigits,
            Zip: (data.Zip || '').trim(),
            Subject: (data.Subject || '').trim(),
            source: form.dataset.source || 'unknown',
        };

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                if (formStatus) {
                    formStatus.textContent = 'Message sent successfully! We will be in touch shortly.';
                    formStatus.className = 'form-status success';
                }
                form.reset();
            } else {
                throw new Error(`API request failed (${response.status})`);
            }
        } catch (error) {
            console.error('Form submission failed:', error);
            showError(formStatus, 'Something went wrong. Please try again later.');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = defaultButtonText;
            }
        }
    });
}

function showError(formStatus, message) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = 'form-status error';
}

// --- Phone number input formatter ---
function setupPhoneFormatter() {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', (e) => {
        const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}
