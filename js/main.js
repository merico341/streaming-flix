var visibleTrailer = -1;

function spawnTrailer() {
    var trailer = document.getElementById("trailer");
    visibleTrailer *= -1;

    if (visibleTrailer == 1) {
        trailer.style.display = 'block';
    } else {
        trailer.style.display = 'none';
    }
}