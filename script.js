emailjs.init('Nn5-ZvhvkaKGtsryy');

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function toggleFaq(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const isActive = element.classList.contains('active');

    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.parentElement.querySelector('.faq-answer').classList.remove('active');
    });

    if (!isActive) {
        element.classList.add('active');
        answer.classList.add('active');
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const submitButton = event.target.querySelector('.submit-button');
    const originalText = submitButton.textContent;

    submitButton.textContent = '送信中...';
    submitButton.disabled = true;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const templateParams = {
        name: data.name,
        age: data.age,
        occupation: data.occupation,
        experience: data.experience,
        message: data.message || '特になし',
        to_email: 'apomeet.jp@gmail.com'
    };

    emailjs.send('service_emf6r97', 'template_i8yypad', templateParams)
        .then(() => {
            alert('お問い合わせありがとうございます。24時間以内にご返信いたします。');
            event.target.reset();
        })
        .catch((error) => {
            console.error('送信エラー:', error);
            alert('送信に失敗しました。恐れ入りますが、直接メール（apomeet.jp@gmail.com）にご連絡ください。');
        })
        .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    });

    const ctaButtons = document.querySelectorAll('[class*="cta-button"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    const problemItems = document.querySelectorAll('.problem-item');
    problemItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});