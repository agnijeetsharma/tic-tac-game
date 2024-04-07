var turn = new Audio("ting.mp3");
var gameover = new Audio("gameover.mp3");
var bgmusic=new Audio("bgmusic.mp3")
let finish = false;
let newTurn = "X";
const reset=document.querySelector('.reset')
let changeTurn=()=> {
 return newTurn === "X" ? "0" : "X";
}
const checkWin = () => {
    const boxtexts = document.querySelectorAll(".boxtext");
  let win = [
    [0, 1, 2,5,5,0],
    [3, 4, 5,5,15,0],
    [6, 7, 8,5,25,0],
    [0, 4, 8,5,15,45],
    [2, 4, 6,5,15,135],
    [0, 3, 6,-5,15,90],
    [1, 4, 7,5,15,90],
    [2, 5, 8,15,15,90],
  ];
  win.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector("#info").innerText =
        boxtexts[e[0]].innerText + " Has Won The Game";
        gameover.play();
        finish = true;
        document.querySelector('.winimg').querySelector("img").style.width="200px"
        // document.querySelector(".line").style.width="20vw"
        // document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`

    }
   
  });
  let draw=0;
  win.forEach((e)=>{
    if (
       ( boxtexts[e[0]].innerText !== ""&&boxtexts[e[1]].innerText !== ""&&boxtexts[e[2]].innerText !== "")
      ){
          draw++;
      }
     
  })
  if(draw===8){
    document.querySelector("#info").innerText =
        "Match Has Drawn";
        gameover.play();
        finish = true;
        draw=0;
  }
  else{
    draw=0;
  }

};

const boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((item) => {
  let boxText = item.querySelector(".boxtext");
  item.addEventListener("click", () => {
   turn.currentTime=0;
    if (boxText.innerText === "") {
      boxText.innerText = newTurn;
      checkWin();
      if (!finish) {
        newTurn=changeTurn();
          turn.play();
        document.querySelector("#info").innerText = " Turn For " + newTurn;
       
      }
    }
  });
});

reset.addEventListener('click',(e)=>{
    const boxtexts = document.querySelectorAll(".boxtext");
    boxtexts.forEach(item=>{
        item.innerText="";
    })
    finish=false;
    newTurn="X"
    document.querySelector("#info").innerText = " Turn For " + newTurn;
    document.querySelector('.winimg').querySelector("img").style.width="0px"
    // document.querySelector(".line").style.width="0px"

})
let music=false;
const bg=document.querySelector(".bgmusic")
bg.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!music){
    music=true;
    bgmusic.play();
    }
    else{
        bgmusic.pause();
        bgmusic.currentTime=0;
        music=false;
    }
})