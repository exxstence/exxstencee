const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");


document.addEventListener("DOMContentLoaded", () => {
  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });
  
  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });
  
});


// Get all the anchor tags in the navbar
const navLinks = document.querySelectorAll('nav ul li a');

// Add a click event listener to each anchor tag
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent the default jump-to-anchor behavior
    event.preventDefault();
    
    // Remove the 'active' class from all anchor tags
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add the 'active' class to the clicked anchor tag
    this.classList.add('active');
    
    // Get the target section's ID from the href attribute
    const targetId = this.getAttribute('href');
    
    // Scroll smoothly to the target section
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add scroll event listener to highlight the current section in the navbar
window.addEventListener('scroll', function() {
  // Get the current vertical scroll position
  const scrollPosition = window.scrollY;
  
  // Iterate through each section
  document.querySelectorAll('section').forEach(section => {
    // Calculate the top and bottom offsets of the section
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    // Get the corresponding anchor tag for the section
    const navLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
    
    // Check if the current scroll position is within the section
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      // Add the 'active' class to the anchor tag
      navLink.classList.add('active');
    } else {
      // Remove the 'active' class from the anchor tag
      navLink.classList.remove('active');
    }
  });
});





// JS

let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
