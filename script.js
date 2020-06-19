const WINNER = Math.floor((Math.random() * 3) + 1);
let numClicks = 0;
let openDoor;

const door1 = document.querySelector(".door1");
const door2 = document.querySelector(".door2");
const door3 = document.querySelector(".door3");

if (document.querySelector(".door1").style.pointerEvents !== "none")
{
    door1.addEventListener("click", door1Click);
}


if (document.querySelector(".door2").style.pointerEvents !== "none"){
    door2.addEventListener("click", door2Click);

}

if (document.querySelector(".door3").style.pointerEvents !== "none")
{
    door3.addEventListener("click", door3Click);
}
// Door open on click
//----------------------------------------------------------------

function openDoor1() {
  door1.classList.add("doorOpen");
  setTimeout(function() {
document.querySelector(".knob1").style.display="none";}, 300);
document.querySelector(".door1").style.pointerEvents = "none";
}

function openDoor2() {
  door2.classList.add("doorOpen");
  setTimeout(function() {
document.querySelector(".knob2").style.display="none";}, 300);
document.querySelector(".door2").style.pointerEvents = "none";

}
function openDoor3() {
  door3.classList.add("doorOpen");
  setTimeout(function() {
document.querySelector(".knob3").style.display="none";}, 300);
document.querySelector(".door3").style.pointerEvents = "none";

}
//-----------------------------------------------------------------
//Randomize winner at Document Load
$( document ).ready(function() {  
 if (WINNER===1){
document.querySelector(".insideDoor1").src="money.svg";
   document.querySelector(".insideDoor2").src="fish.svg";
   document.querySelector(".insideDoor3").src="fish.svg";
 }
 
 else if (WINNER===2){
   document.querySelector(".insideDoor1").src="fish.svg";
   document.querySelector(".insideDoor2").src="money.svg";
   document.querySelector(".insideDoor3").src="fish.svg";
 }
 else{
   document.querySelector(".insideDoor1").src="fish.svg";
   document.querySelector(".insideDoor2").src="fish.svg";
   document.querySelector(".insideDoor3").src="money.svg";
 } 
  
});

//----------------------------------------------------------------
// Application Logic

//door1 click
function door1Click(){
    if (numClicks === 0){
        numClicks++;
        document.querySelector(".description-text").innerHTML="I have opened one of the losing doors. Would you like to switch?"
        if (WINNER===2){
            openDoor=3;
        }
        else if (WINNER===3){
            openDoor=2;
        }
        else
            do{
            openDoor = Math.floor((Math.random() * 3) + 1);
            } while(openDoor=== 1)


        if (openDoor===2){
            openDoor2()
        }
            else if (openDoor===3){
            openDoor3()
        }
            else{
            }
    }
    else
    {
        openDoor1();    
        openDoor2();
        openDoor3();
        if (WINNER===1)
        {
            setTimeout(function() {
                document.querySelector(".result").innerHTML="Congratulations, You Win!";
                document.querySelector(".insideDoor1").classList.add("jump")
            }, 600);
                ;
            
           }
        else
        {
            setTimeout(function() {
                document.querySelector(".result").innerHTML="You Lose! Please Try again.";
                document.querySelector(".insideDoor1").classList.add("sway");
            }, 600);
        }
        document.querySelector(".description-text").innerHTML="";

    }
}
function door2Click(){
    if (numClicks === 0){
        numClicks++;
        document.querySelector(".description-text").innerHTML="I have opened one of the losing doors. Would you like to switch?"
        
        if (WINNER===1){
            openDoor=3;
        }
        else if (WINNER===3){
            openDoor=1;
        }
        else
            do{
            openDoor = Math.floor((Math.random() * 3) + 1);
            } while(openDoor=== 2)


        if (openDoor===1){
            openDoor1()
        }
            else if (openDoor===3){
            openDoor3()
        }
            else{
            }
    }
    else
    {
        openDoor1();    
        openDoor2();
        openDoor3();
        if (WINNER===2)
        {
            setTimeout(function() {
                document.querySelector(".result").innerHTML="Congratulations, You Win!";
                document.querySelector(".insideDoor2").classList.add("jump");
                }, 600);
               
            
          }
        else
        {
            setTimeout(function() {
                document.querySelector(".result").innerHTML="You Lose! Please Try again.";
                document.querySelector(".insideDoor2").classList.add("sway");
            }, 600);
          }
          document.querySelector(".description-text").innerHTML="";

        }
    }

function door3Click(){
    if (numClicks === 0){
        numClicks++;
        document.querySelector(".description-text").innerHTML="I have opened one of the losing doors. Would you like to switch?"
        if (WINNER===1){
            openDoor=2;
        }
        else if (WINNER===2){
            openDoor=1;
        }
        else
            do{
            openDoor = Math.floor((Math.random() * 3) + 1);
            } while(openDoor=== 3)


        if (openDoor===1){
            openDoor1()
        }
            else if (openDoor===2){
            openDoor2()
        }
            else{
            }
    }
    else
    {
        openDoor1();    
        openDoor2();
        openDoor3();
        if (WINNER===3)
        {
            setTimeout(function() {
                document.querySelector(".result").innerHTML="Congratulations, You Win!";
                document.querySelector(".insideDoor3").classList.add("jump");
                
            }, 600);
                    }
        else
        {
            setTimeout(function() {
                document.querySelector(".result").innerHTML="You Lose! Please Try again.";
                document.querySelector(".insideDoor3").classList.add("sway");
            }, 600);
        }
        document.querySelector(".description-text").innerHTML="";
    }

}

