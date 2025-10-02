window.onscroll = () => {
    if (window.scrollY != 50) {
        console.log(window.scrollY);
        document.getElementById("nav").style.opacity = (370 - window.scrollY)/150;
    }
    else {
        document.getElementById("nav").style.opacity = 100;
    }

    if (document.getElementById("nav").style.opacity <= 0) {
        document.getElementById("nav").style.display = "none";
    } else if((370 - window.scrollY)/150 >= 0) {
        document.getElementById("nav").style.display = "flex";
    }
}


// window.onscroll = () => {console.log(window.scrollY);}