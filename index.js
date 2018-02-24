/*global fetch*/
//'use strict';

(function () {
  
    function $(id) { return document.getElementById(id) }
    function qs(selector) { return document.querySelector(selector) }
    function qsa(selector) { return document.querySelectorAll(selector) }
    

  

    window.onload = function() {
        unfade(qs("html"));
        $("microphone").onclick = showJokePage;
        $("home").onclick= homePage;
        $("home2").onclick= homePage;
        $("laptop").onclick = showCompPage;
      
      
      
      }
  
  
    function homePage(){
            $("mainpage").classList.remove("hidden");
            $("jokepage").classList.add("hidden");
            $("comp-page").classList.add("hidden");
    }

    function showJokePage (){
            
            $("mainpage").classList.add("hidden");
            $("jokepage").classList.remove("hidden");
    }

    function showCompPage(){
        $("mainpage").classList.add("hidden");
        $("comp-page").classList.remove("hidden");
    }


    function unfade(element) {
        let op = 0.1;  // initial opacity
        //element.style.display = 'block';
        let timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.05;
        }, 10);
    }
  
    




})();
