window.onscroll = () => {
    if (window.scrollY) {
        console.log(window.scrollY);
        document.getElementById("nav").style.opacity = (370 - window.scrollY)/150;

        document.getElementById("nav").style.display = document.getElementById("nav").style.opacity >= 100 ? "none" : "fixed"
    }
    else {
        document.getElementById("nav").style.opacity = 100;

    }
}


// window.onscroll = () => {console.log(window.scrollY);}