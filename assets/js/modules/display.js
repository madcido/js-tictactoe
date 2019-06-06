const tileDivs = [...document.getElementById("board").children];
const p1ScoreSpan = document.getElementById("p1");
const p2ScoreSpan = document.getElementById("p2");

const display = (() => {
  const resetBoard = () => {
    tileDivs.forEach((tileDiv, index) => {
      tileDiv.innerHTML = index + 1;
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
    tileDivs[index].removeAttribute("class");
    tileDivs[index].setAttribute("class", mark.toLowerCase())
  }

  return { resetBoard, updateScores, handleMove }
})();
