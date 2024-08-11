window.onload = function() {
    document.querySelector(".scroll").onclick = () => {
        window.scroll(0,0)
    }
}
window.onscroll = function() {
    var o = document.querySelector(".scroll");
    var h = document.querySelector(".header");
    if (window.scrollY > 100) {
        o.classList.add("scroll--appeared")
        h.classList.add("header--shadow")
    } else {
        o.classList.remove("scroll--appeared")
        h.classList.remove("header--shadow")
    }
}