
// onscroll add sticky class
// ======================================================
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
        $("#fixedOpenForm").removeClass("hidden");
    }
});


// mobile open close
$(document).ready(function(){
    $(".closeForm").click(function(){
        $("#popupForm").addClass("hidden");
    });
    $(".openForm    ").click(function(){
        $("#popupForm").removeClass("hidden");
    });
    $(".closeMenu").click(function(){
        $("#mainMenu").addClass("hidden");
    });
    $(".openMenu").click(function(){
        $("#mainMenu").removeClass("hidden");
        $("#mainMenu").addClass("flex");
    });
}); 