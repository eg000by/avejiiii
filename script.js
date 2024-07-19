function toggleMenu() {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger-menu');
    nav.classList.toggle('show');
    burger.classList.toggle('close');
}

document.addEventListener("DOMContentLoaded", function() {
    let observer;

    function initObserver() {
        if (window.innerWidth < 1024) {
            let options = {
                root: document.querySelector('.projects-container'),
                rootMargin: '0px',
                threshold: 0.5
            };

            observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            }, options);

            document.querySelectorAll('.project').forEach(card => {
                observer.observe(card);
            });
        } else {
            // Удаляем все классы 'visible' если ширина экрана больше 1024px
            document.querySelectorAll('.project').forEach(card => {
                card.classList.remove('visible');
            });
        }
    }

    // Инициализация наблюдателя при загрузке страницы
    initObserver();

    // Повторная инициализация наблюдателя при изменении размеров окна
    window.addEventListener('resize', function() {
        // Удаляем все наблюдения при изменении размера, если observer определен
        if (observer) {
            observer.disconnect();
        }
        // Повторная инициализация
        initObserver();
    });
});