function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
function toggleContent(id) {
    var moreContent = document.getElementById(id);
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}
