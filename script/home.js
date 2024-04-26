function Swiggy() {
    //const url = "#"
    //window.open(url)
}
function Zomato() {
    //const url = "#"
    //window.open(url)
}


function Menu() {
    window.open("menu.html")
}



/* testimonial section code */

let slideIndex = 0;

function showTestimonial() {
    let testimonials = document.getElementsByClassName("testimonial");
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > testimonials.length) {
        slideIndex = 1;
    }
    testimonials[slideIndex - 1].style.display = "block";
    setTimeout(showTestimonial, 3000); // Change testimonial every 6 seconds
}
function changeTestimonial(n) {
    showTestimonial(slideIndex += n);
}


showTestimonial();