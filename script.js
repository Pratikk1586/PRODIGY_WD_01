$(document).ready(function(){
  $('.btn').click(function(){
      $('.nav-links').slideToggle(2000);
      //for the button effect
      $('.btn').toggleClass('change');
  })
  //transparent nav background
  $(window).scroll(function(){
      let position = $(window).scrollTop();
      if (position >=100){
          $('nav,nav-container').addClass('navBackground')
      }
      else{
          $('nav,nav-container').removeClass('navBackground')
      }
  })
})

// Add smooth scrolling to all links
$("a").on('click', function (event) {

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
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});