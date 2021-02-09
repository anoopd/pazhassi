const mobile_menu = document.querySelector('.mobile-menu');

const nav = document.querySelector('.nav');

mobile_menu.addEventListener('click',(e) => {
    e.preventDefault();
    mobile_menu.classList.toggle('open');
    nav.classList.toggle('toggle');
});

