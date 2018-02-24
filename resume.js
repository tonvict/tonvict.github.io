(function () {

    function $(id) {
        return document.getElementById(id)
    }

    function qs(selector) {
        return document.querySelector(selector)
    }

    function qsa(selector) {
        return document.querySelectorAll(selector)
    }




    window.onload = function () {
        $("start").onclick = showResume;
    }
    
    function showResume(){
        $("menu").classList.add("hidden");
        $("mainpage").classList.remove("hidden");
    }




        function unfade(element) {
            let op = 0.1; // initial opacity
            //element.style.display = 'block';
            let timer = setInterval(function () {
                if (op >= 1) {
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.05;
            }, 10);
        }






})();
