const tileDivs = [...document.getElementById("board").children];
const p1Div = document.getElementById("p1");
const p2Div = document.getElementById("p2");
const p1ScoreSpan = document.getElementById("p1-score");
const p2ScoreSpan = document.getElementById("p2-score");

const display = (() => {
  const resetBoard = () => {
    tileDivs.forEach((tileDiv, index) => {
      tileDiv.innerHTML = "";
      tileDiv.setAttribute("onclick", "playerMove(" + index + ")");
      tileDiv.setAttribute("class", "clickable");
    });
  }

  const updateScores = (p1, p2) => {
    p1ScoreSpan.innerHTML = p1.score;
    p2ScoreSpan.innerHTML = p2.score;
  }

  const handleMove = (index, mark) => {
    tileDivs[index].innerHTML = mark;
    tileDivs[index].removeAttribute("onclick");
    tileDivs[index].setAttribute("class", mark)
  }

  const activePlayer = (mark) => {
    if (mark == "X") {
        p2Div.removeAttribute("class");
        p1Div.setAttribute("class", "active");
    } else {
        p1Div.removeAttribute("class");
        p2Div.setAttribute("class", "active");
    }
  }

  return { resetBoard, updateScores, handleMove, activePlayer }
})();
