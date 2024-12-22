let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new_btn");
let msg = document.querySelector("#msg");
let msgContaner = document.querySelector(".msg-container");


let click = 0;
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
 

const resetGame = () => {
    turn0 = true;

    anabledBoxces();
    msgContaner.classList.add("hide");
};
//add onclick event 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        click++;
        if(turn0){
            box.innerText = "X";
          box.style.color = "green";
            turn0 = false;
        }else{
            box.innerText = "O";
	   box.style.color = "yellow"
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

    const disabledBoxces = () => {
        for(let box of boxes) {
            box.disabled = true;
        }
    }

    const anabledBoxces = () => {
        for(let box of boxes) {
            box.disabled = false;
            box.innerText = "";  
        }
    }
   


const showWinner = (winner) => {
    msg.innerText = `Congratulation,  Winner is ${winner} `;
    msgContaner.classList.remove("hide");
    disabledBoxces();
}

const checkWinner = () => {
    for(pattern of winPatterns) {
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
      

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            
            if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === pos3Val) {
                showWinner(pos1Val);
                
            }
         
    }
  }
}



newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

