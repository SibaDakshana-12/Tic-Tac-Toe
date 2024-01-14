 let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector("#reset-btn");
 let newGameBtn=document.querySelector("#new-btn");
 let restartBtn=document.querySelector("#restart");
 let msgContainer=document.querySelector(".msg-container");
 let drawContainer=document.querySelector(".draw-container");
 let msg=document.querySelector("#msg");

 const resetGame = () => {
    turnO=true;
    enableBoxes();
    count=0;
    msgContainer.classList.add("hide");
 }

const restartGame = () =>{
    turnO=true;
    enableBoxes();
    drawContainer.classList.add("hide");
   count=0;
}

 let turnO=true;//playerX,playerY
 const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,6],
    [0,4,8],
    [2,4,6],
 ]
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
 })

 const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }

const showWinner= (winner) => {
 msg.innerText=`Congratulations,Winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disableBoxes();
}
const showDraw= () => {
 drawContainer.classList.remove("hide");
}

 const checkWinner=()=>{
for(let pattern of winPatterns){
   let pos1Val=boxes[pattern[0]].innerText;
   let pos2Val=boxes[pattern[1]].innerText;
   let pos3Val=boxes[pattern[2]].innerText;
   if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val===pos2Val && pos2Val===pos3Val){
        showWinner(pos1Val);
    }
   }
}
 }

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
restartBtn.addEventListener("click",restartGame);


// restart idea
let count=0;
boxes.forEach((box)=>{
      box.addEventListener("click",()=>{
        count++;
        if(count >=9){
            showDraw();
           
        }
      })

})
