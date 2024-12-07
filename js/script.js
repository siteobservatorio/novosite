document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const perguntaBtn = item.querySelector('.faq-pergunta');
        perguntaBtn.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
});
