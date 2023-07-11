// Select all the sections on the page
const sections = document.querySelectorAll("section");
sections[0].style.display = "block"; // Display the first section by default

// Handler for clicking on a link in the navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Hide all sections
    sections.forEach((section) => {
      section.style.display = "none";
    });

    // Get the index of the clicked link
    const clickedIndex = Array.from(navLinks).indexOf(link);

    // Display the corresponding section based on the index
    sections[clickedIndex].style.display = "block";
  });
});



