console.log("running");

let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".resetBtn");
let newGameBtn = document.querySelector(".newGamebtn");
let winner = document.querySelector("h2");
let turn = 0;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
   
function disabledBtn(){
    boxes.forEach(function(btn){
        btn.disabled = true;
    })
}
function enabledBtn(){
    boxes.forEach(function(btn){
        btn.disabled = false;
        btn.innerHTML = "";
    })
}
function newGame(){
        winner.style.display = "none";
        turn = 0;
        enabledBtn();
        newGameBtn.style.display = "none";
        resetBtn.style.display = "block";
        resetBtn.style.marginLeft = "40%";
    }

boxes.forEach(function(btns){
    btns.addEventListener("click", function(){
    if(turn === 0){
        btns.style.color = "green";
        btns.innerHTML = "O";
        turn = 1;
    }else{
        btns.style.color = "crimson";
        btns.innerHTML = "X";
        turn = 0;
    }
    btns.disabled = true;
    checkWinner();
});
});

function checkWinner(){
    for(let patterns of winPattern){
        let pos1 = boxes[patterns[0]].innerHTML;
        let pos2 = boxes[patterns[1]].innerHTML;
        let pos3 = boxes[patterns[2]].innerHTML;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner");
                winner.innerHTML = `Winner is ${pos1}`;
                winner.style.display = "block";
                disabledBtn();
                newGameBtn.style.display = "block";
                resetBtn.style.display = "none";
            }
        }
    }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);
