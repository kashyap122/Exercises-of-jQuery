$(document).ready(function () {
    let paragraph = $("#paragraph");
    $(".hide1").click(function () {
        $("#paragraph").hide();
        // $("p").hide();
    });

    $(".show1").click(function () {
        $("#paragraph").show();
        // $("p").show();
    });
    $(".toggle").click(function () {
        $("#paragraph").toggle();
        // $("p").toggle();
    });
    $(".fadeIn").click(function () {
        $("#paragraph").fadeIn();
        // $("p").fadeIn();
    });

    $(".fadeOut").click(function () {
        $("#paragraph").fadeOut();
        // $("p").fadeOut();
    });
    $(".fadeToggle").click(function () {
        $("#paragraph").fadeToggle();
        // $("p").fadeToggle();
    });
    $(".slideUp").click(function () {
        $("#paragraph").slideUp();
        // $("p").fadeToggle();
    });
    $(".slideDown").click(function () {
        $("#paragraph").slideDown();
        // $("p").fadeToggle();
    });
    $(".slideToggle").click(function () {
        $("#paragraph").slideToggle();
        // $("p").fadeToggle();
    });
    $("p").hover(function () {
        console.log("Hovered");
    });
    $("#container").mouseenter(function () {
        $("#paragraph").css("background-color", "skyblue");
        $("#container").css("background-color", "skyblue");
        // $("#container").css("font-size", "20px");
    });
    $("#container").mouseleave(function () {
        $("#container").css("background-color", "white");
        $("#paragraph").css("background-color", "white");
    });
    $(".animate").click(function () {
        // $("#paragraph").animate({height : "250px"});
        // $("#paragraph").animate({width : "450px"});
        // paragraph.animate({height : "250px"});
        $("#container").animate({ height: "350px" })
        // paragraph.css("z-index" , "9999");
    });
    $(".animateReverse").click(function () {
        $("#container").animate({ height: "170px" })

    });
});

