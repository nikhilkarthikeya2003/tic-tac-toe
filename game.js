let box = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newgame = document.getElementById("newgame");
let msg = document.getElementById("msg");
let msgcontainer = document.querySelector(".msg-container");


const winpatterns=[
    [0 ,1 ,2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnO = true;

box.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("button was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const disableboxes = () =>{
    for(let val of box){
        val.disabled = true;
    }
};

const enableboxes = () =>{
    for(let val of box){
        val.disabled = false;
        val.innerText = "";
    }
};


const showwinner=(winner) =>{
    msg.innerText=`winner is ${winner}`; 
    msgcontainer.classList.remove("hide");
    disableboxes();
    reset.disabled = true;
}

const checkwinner=() =>{
    for(let pattern of winpatterns){
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner is player", pos1val);
                showwinner(pos1val);
                newgame.disabled = false;
            }
        }
    }
}

const resetgame = () =>{
    turnO = true;
    msgcontainer.classList.add("hide");
    enableboxes();
    newgame.disabled = true;
}

const newg = ()=>{
    msgcontainer.classList.add("hide");
    enableboxes();
    reset.disabled = false;
}

newgame.addEventListener("click", newg);
reset.addEventListener("click", resetgame);