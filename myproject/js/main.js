$("body").css("background-color", "black");

var images = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg"];

var currentimg = false;

$(".mybutton").click(function() {
    var randomimg = images[Math.floor(Math.random()*images.length)];
    
    while (randomimg == currentimg) {
        randomimg = images[Math.floor(Math.random()*images.length)];
    }
    
    currentimg = randomimg;
    
    $(".stage").html("<img src = 'img/" + randomimg + "'>");
});