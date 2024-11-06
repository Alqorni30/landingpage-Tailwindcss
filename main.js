document.getElementById('hamburger').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});


document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function () {
        const menu = document.getElementById('menu');
        menu.classList.remove('show');
    });
});
