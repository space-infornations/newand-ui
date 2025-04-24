document.addEventListener("DOMContentLoaded", function() {
    const goTopBtn = document.getElementById("css-custom-styles-name-goTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            goTopBtn.style.display = "block";
        } else {
            goTopBtn.style.display = "none";
        }
    };

    goTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});