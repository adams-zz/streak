$(document).ready(function() {
  $('.choose').click(function(){
    if($(this).children().attr('href') !== "http://streak.espn.go.com/en/undefined"){
        window.open($(this).children().attr('href'),'_blank');
    } else {
        alert("Sorry, prop is over")
    }
  })
});