document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const readMoreBtn = document.getElementById('read-more');
    const articleContent = document.getElementById('article-content');

    // Sticky header
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Read More functionality
    readMoreBtn.addEventListener('click', () => {
        articleContent.classList.toggle('expanded');
        if (articleContent.classList.contains('expanded')) {
            readMoreBtn.textContent = 'Read Less';
        } else {
            readMoreBtn.textContent = 'Read More';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});