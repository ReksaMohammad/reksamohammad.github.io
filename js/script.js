document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('navbarSupportedContent').addEventListener('click', function(){
        var el = document.getElementById('navbarSupportedContent')
        el.classList.remove("show");
      });
});
