const ticTac = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box");
const h1 = document.getElementsByTagName("h1"); // console.log(ticTac);
const rstbtn = document.getElementById("rstbtn");

let currentPlayer = "X";
let count = 0;

let winingCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
];

function startGame(e) {
  // console.log(e.target.className);
  if (e.target.className !== "ticTac") {
    if (e.target.innerText === "") {
      e.target.textContent = currentPlayer;
      count++;
      winner();
      // console.log(boxes);
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      if (count === 9) {
        // console.log("Match Draw");
        h1[0].innerText = "Match Draw";
      }
    }
  }
}
ticTac.addEventListener("click", startGame);

function winner() {
  winingCondition.forEach((item) => {
    let index0 = item[0];
    let index2 = item[2];
    let index1 = item[1];
    // console.log(item,index0);
    let val0 = boxes[index0].innerText;
    let val2 = boxes[index2].innerText;
    let val1 = boxes[index1].innerText;
    console.log(index0, val0, index1, val1, index2, val2);
    if (val0 !== "" && val1 !== "" && val2 !== "") {
      if (val0 === val1 && val1 === val2) {
        // boxes[index0].style.backgroundColor="aqua"
        // boxes[index1].style.backgroundColor="aqua"
        // boxes[index2].style.backgroundColor="aqua"
        boxes[index0].classList.add("winner");
        boxes[index1].classList.add("winner");
        boxes[index2].classList.add("winner");
        h1[0].innerText = `Winner is ${val2}`;
        // console.log("Winner",val0);
        ticTac.removeEventListener("click", startGame);
      }
    }
  });
}
rstbtn.addEventListener("dblclick", () => {
  count = 0;
  currentPlayer = "X";
  h1[0].innerText = "Tic Tac";
  boxes.forEach((item) => {
    item.classList.remove("winner");
    item.innerText = "";
  });
  ticTac.addEventListener("click", startGame);
});
