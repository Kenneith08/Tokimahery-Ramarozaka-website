        const chips = document.querySelectorAll('[data-chip]');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
            });
        });

        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.querySelector('.faq-question').addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                faqItems.forEach(i => i.classList.remove('open'));
                if (!isOpen) item.classList.add('open');
            });
        });

        document.getElementById('submitBtn').addEventListener('click', () => {
            const first = document.getElementById('firstName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!first || !email || !message) {
                [['firstName', first], ['email', email], ['message', message]].forEach(([id, val]) => {
                    const el = document.getElementById(id);
                    if (!val) {
                        el.style.borderColor = '#b3001b';
                        el.addEventListener('input', () => el.style.borderColor = '', { once: true });
                    }
                });
                return;
            }

            document.getElementById('contactForm').style.display = 'none';
            document.querySelector('.form-section-title').style.display = 'none';
            document.querySelector('.chip-label').style.display = 'none';
            document.querySelector('.chips').style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
        });