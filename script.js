document.querySelectorAll('.butterfly').forEach(function (el) {

    el.style.left = Math.random() * 880 + 'px';
    el.style.top  = Math.random() * 450 + 'px';

    el.addEventListener('mouseover', function () {
        el.style.left = Math.random() * 880 + 'px';
        el.style.top  = Math.random() * 450 + 'px';
    });
});

document.querySelectorAll('#front').forEach(function (el) {
    el.addEventListener('click', function () {
        document.querySelectorAll('#foo').forEach(function (foo) {
            foo.style.left = 360 + Math.random() * (850 - 360 - 56) + 'px';
            foo.style.top  = 190 + Math.random() * (320 - 190 - 56) + 'px';
        });
    });
});
