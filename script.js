window.addEventListener("scroll", function() {
    var nav = document.getElementById("navbar")
    if (window.scrollY > 100) {
        // Make the navbar transparent
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
})