
function showPresentation() {
    document.getElementById("invitation").style.display = "none";

    document.getElementById("presentation").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goBack() {
    document.getElementById("presentation").style.display = "none";

    document.getElementById("invitation").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
