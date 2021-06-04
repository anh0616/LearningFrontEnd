const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

let toggleOpen = false;

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');

    if (!toggleOpen) {
        toggleButton.classList.add('open');
        navbarLinks.classList.add('fade');
        toggleOpen = true;
    } else {
        toggleButton.classList.remove('open');
        navbarLinks.classList.remove('fade');
        toggleOpen = false;
    }
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });