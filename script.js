document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".link");

    // تأثير عند تحميل الصفحة
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 200);

    // تأثير الموجة عند الضغط على الرابط
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            let ripple = document.createElement("span");
            ripple.classList.add("ripple");

            let x = e.clientX - link.getBoundingClientRect().left;
            let y = e.clientY - link.getBoundingClientRect().top;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            link.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
let startY = 0;

document.addEventListener("touchstart", function(event) {
    startY = event.touches[0].clientY;
});

document.addEventListener("touchend", function(event) {
    let endY = event.changedTouches[0].clientY;
    if (endY - startY > 100) { // إذا كان السحب للأسفل أكثر من 100px
        location.reload(); // إعادة تحميل الصفحة
    }
});
