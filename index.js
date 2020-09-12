
$(document).ready(function(){
    $("#projectsTop").hide();
    $("#aboutTop").hide();
    $("#contactTop").hide();
    $("#resumeTop").hide();
    $("#findMeTop").hide();
    $("#projects").hide();
    $("#about").hide();
    $("#contact").hide();
    $("#resume").hide();
    $("#findMe").hide();
    $("#homeButton").click(function(){
        $("#projectsTop").hide();
        $("#aboutTop").hide();
        $("#contactTop").hide();
        $("#resumeTop").hide();
        $("#findMeTop").hide();
        $("#projects").hide();
        $("#about").hide();
        $("#contact").hide();
        $("#resume").hide();
        $("#findMe").hide();
        $("#home").show();
        $("#homeTop").show();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("#projectsButton").click(function(){
        $("#homeTop").hide();
        $("#aboutTop").hide();
        $("#contactTop").hide();
        $("#resumeTop").hide();
        $("#findMeTop").hide();
        $("#home").hide();
        $("#about").hide();
        $("#contact").hide();
        $("#resume").hide();
        $("#findMe").hide();
        $("#projects").show();
        $("#projectsTop").show();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("#aboutButton").click(function(){
        $("#homeTop").hide();
        $("#projectsTop").hide();
        $("#contactTop").hide();
        $("#resumeTop").hide();
        $("#findMeTop").hide();
        $("#home").hide();
        $("#projects").hide();
        $("#contact").hide();
        $("#resume").hide();
        $("#findMe").hide();
        $("#about").show();
        $("#aboutTop").show();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("#contactButton").click(function(){
        $("#homeTop").hide();
        $("#projectsTop").hide();
        $("#aboutTop").hide();
        $("#resumeTop").hide();
        $("#findMeTop").hide();
        $("#home").hide();
        $("#projects").hide();
        $("#about").hide();
        $("#resume").hide();
        $("#findMe").hide();
        $("#contact").show();
        $("#contactTop").show();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("#resumeButton").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $("#homeTop").hide();
        $("#projectsTop").hide();
        $("#aboutTop").hide();
        $("#contactTop").hide();
        $("#findMeTop").hide();
        $("#home").hide();
        $("#projects").hide();
        $("#about").hide();
        $("#contact").hide();
        $("#findMe").hide();
        $("#resume").show();
        $("#resumeTop").show();
    });
    $("#findMeButton").click(function(){
        window.scrollTo(0, 0);
        $("#homeTop").hide();
        $("#projectsTop").hide();
        $("#aboutTop").hide();
        $("#contactTop").hide();
        $("#resumeTop").hide();
        $("#home").hide();
        $("#projects").hide();
        $("#about").hide();
        $("#contact").hide();
        $("#resume").hide();
        $("#findMe").show();
        $("#findMeTop").show();
    });
});
window.onscroll = function() {myFunction()};

var header = document.getElementById("topofsite");
var item = document.getElementById("myHeader");
var sticky = (header.offsetHeight-item.offsetHeight);

function myFunction() {
    if (window.pageYOffset > sticky/(Math.round(((window.outerWidth) / window.innerWidth)*100) / 100)) {
        item.classList.add("sticky");
    } else {
        item.classList.remove("sticky");
    }
}