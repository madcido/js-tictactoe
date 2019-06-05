const tiles = [...document.getElementById("board").children];

(() => tiles.forEach((tile, index) => tile.setAttribute("onclick", "playerMove(" + index + ")")))();

function playerMove(index) {
    tiles[index].innerHTML = "hello";
}
