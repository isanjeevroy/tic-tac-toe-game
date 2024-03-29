let boxes = document.querySelectorAll(".box");

let msg = document.querySelector("#msg");
let turns = document.querySelector("#turns");


let playerX = document.querySelector("#user1");
let playerO = document.querySelector("#user2");
let play = document.querySelector("#play");
let users = document.querySelector(".users");
let usersIdnt = document.querySelector(".users-identity");

// const newGame = document.querySelector("#new-game");
const resetGame = document.querySelector("#reset-game");

let turnO=true;

// Display user identity
    
let winner =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// show the winner messge
const showWinner =(pos1)=>{
    if(pos1==="X"){
        msg.innerText=`Congratulations, Winner is  ${playerX.value} !`;
    }
    else{
        msg.innerText=`Congratulations, Winner is  ${playerO.value} !`;
    }
    
    for(let box of boxes){
        box.disabled=true;
    }
    turns.style.display="none";
}

// check the winner
const checkWinner=()=>{
    for(let pattern of winner){

      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;

      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
        }
      }
    }
};

// logic here

const playGame = ()=>{
    usersIdnt.innerText=`${playerX.value} = X , ${playerO.value} = O`;

    boxes.forEach((box) => {
        box.addEventListener("click",() => {
            turns.style.display="block";
            if(playerO.value!="" && playerX.value!=""){
                if(turnO){ 
                    box.innerText ="O";
                    turns.innerText=`It's ${playerX.value} turns.`;
                    turnO=false;
                    
                }else{
                    box.innerText ="X";
                    turns.innerText=`It's ${playerO.value} turns.`;
                    turnO=true;
                }
               box.disabled=true;  
               checkWinner();
            }   

        });
    });
};


const resetGameFun = () =>{
    users.style.display="none";
    turns.style.display="block";

    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText="";
        msg.innerText="";
    });
      
    if(pos1==="X"){
        turnO=false;
        turns.innerText=`It's ${playerX.value} turns.`;
        
    }else{
        turnO=true;
        turns.innerText=`It's ${playerO.value} turns.`;
    }
    
}

resetGame.addEventListener("click",()=>{
    if(playerO.value!="" && playerX.value!=""){
        
        resetGameFun();
    }
    else{
        alert("First you play later can re-start");
    }
    
});

play.addEventListener("click",()=>{
    if(playerO.value!="" && playerX.value!=""){
        users.style.display="none";
        turns.style.display="block";
        playGame();
    }
    else{
        alert("Please enter the players name.");
    }
    
});





