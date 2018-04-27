/*global fetch*/
//'use strict';

(function () {

    function idz(id) {
        return document.getElementById(id)
    }

    function qs(selector) {
        return document.querySelector(selector)
    }

    function qsa(selector) {
        return document.querySelectorAll(selector)
    }




    window.onload = function () {

        unfade(qs("header"), 20);
        idz("microphone").onclick = showJokePage;
        idz("home").onclick = homePage;
        idz("home2").onclick = homePage;
        idz("laptop").onclick = showCompPage;





    }






    function homePage() {
        idz("mainpage").classList.remove("hidden");
        idz("jokepage").classList.add("hidden");
        idz("comp-page").classList.add("hidden");

    }

    function showJokePage() {

        idz("mainpage").classList.add("hidden");
        idz("jokepage").classList.remove("hidden");
    }

    function showCompPage() {
        idz("mainpage").classList.add("hidden");
        idz("comp-page").classList.remove("hidden");

    }


    function unfade(element, initial) {
        let op = 0.001; // initial opacity
        //element.style.display = 'block';
        let timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.05;
        }, initial);
    }
    
    $(document).ready(function(){
  // Add scrollspy to <body>
 

  // Add smooth scrolling on all links inside the navbar
  $("#collapsibleNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, jokepage').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});









})();
