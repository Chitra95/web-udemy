var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

$(".btn").click(function(){
    
    //console.log(this);
    var userChoosenColour=$(this).attr("id");
    //console.log(userChoosenColour);
    userClickedPattern.push(userChoosenColour);
    //console.log(userClickedPattern);
    playSound(userChoosenColour);
});




function nextSequence(){
    var rn=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[rn];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
$("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);  
}

//to call this function
// nextSequence()

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}


