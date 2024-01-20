// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 7000); // Change image every 3 seconds (adjust as needed)
}

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = document.querySelectorAll(".slide").length;
    }
    showSlides();
});

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    if (slideIndex > document.querySelectorAll(".slide").length) {
        slideIndex = 1;
    }
    showSlides();
});
