$(function() {
    $(".previous").hover(function() {
        $(".previous .post-title").css("color", "#333");
        $(".previous .arrow").css("color", "#333");
        $(".previous").css("border-color", "#333");
    }, function() {
        $(".previous .post-title").css("color", "#9DAAB6");
        $(".previous .arrow").css("color", "#9DAAB6");
        $(".previous").css("border-color", "#f1f1f1");
    });

    $(".next").hover(function() {
        $(".next .post-title").css("color", "#333");
        $(".next .arrow").css("color", "#333");
        $(".next").css("border-color", "#333");
    }, function() {
        $(".next .post-title").css("color", "#9DAAB6");
        $(".next .arrow").css("color", "#9DAAB6");
        $(".next").css("border-color", "#f1f1f1");
    });
});