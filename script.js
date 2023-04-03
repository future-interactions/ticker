addEventListener("load", function () {
  const tickerContainer = document.getElementById("tickerContainer");
  const tickerMain = document.getElementById("tickerMain");
  const mainLength = tickerMain.offsetWidth;
  const containerLength = tickerContainer.offsetWidth;
  const numOfTickers = Math.ceil(containerLength / mainLength) + 1;
  const tickerList = [numOfTickers];
  const startPos = [numOfTickers];
  setInterval(moveText, 1);

  for (let i = 0; i < numOfTickers; i++) {
    const node = document.getElementById("tickerMain");
    tickerList[i] = node.cloneNode(true);
    document.getElementById("tickerContainer").appendChild(tickerList[i]);
    tickerList[i].style.backgroundColor = "hsl(" + i * 4 + ", 100%, 50%)";
    startPos[i] = i * mainLength;
    tickerList[i].style.left = startPos[i];
    tickerList[i].style.top = "0px";
  }

  function moveText() {
    for (let i = 0; i < numOfTickers; i++) {
      if (startPos[i] + mainLength > 0) {
        startPos[i]--;
        tickerList[i].style.left = startPos[i] + "px";
      } else if (startPos[i] + mainLength == 0 && i == 0) {
        startPos[i] = startPos[numOfTickers - 1] + mainLength;
      } else if (startPos[i] + mainLength == 0 && i > 0) {
        startPos[i] = startPos[i - 1] + mainLength;
      }
    }
  }
});