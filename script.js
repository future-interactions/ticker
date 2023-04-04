addEventListener("load", function () {
  const tickerContainer = document.getElementById("tickerContainer");

  const tickerMain1 = document.getElementById("tickerMain1");
  const mainLength1 = tickerMain1.offsetWidth;
  const containerLength = tickerContainer.offsetWidth;
  const numOfTickers1 = Math.ceil(containerLength / mainLength1) + 1;
  const tickerList1 = [numOfTickers1];
  const startPos1 = [numOfTickers1];

  //2
  const tickerMain2 = document.getElementById("tickerMain2");
  const mainLength2 = tickerMain2.offsetWidth;
  const numOfTickers2 = Math.ceil(containerLength / mainLength2) + 1;
  const tickerList2 = [numOfTickers2];
  const startPos2 = [numOfTickers2];

  //3
  const tickerMain3 = document.getElementById("tickerMain3");
  const mainLength3 = tickerMain3.offsetWidth;
  const numOfTickers3 = Math.ceil(containerLength / mainLength3) + 1;
  const tickerList3 = [numOfTickers3];
  const startPos3 = [numOfTickers3];

    //4
    const tickerMain4 = document.getElementById("tickerMain4");
    const mainLength4 = tickerMain4.offsetWidth;
    const numOfTickers4 = Math.ceil(containerLength / mainLength4) + 1;
    const tickerList4  = [numOfTickers4];
    const startPos4 = [numOfTickers4];

  for (let i = 0; i < numOfTickers1; i++) {
    const node = document.getElementById("tickerMain1");
    tickerList1[i] = node.cloneNode(true);
    document.getElementById("tickerContainer").appendChild(tickerList1[i]);
    // tickerList1[i].style.backgroundColor = "hsl(" + i * 10 + ", 100%, 50%)";
    startPos1[i] = i * mainLength1;
    tickerList1[i].style.left = startPos1[i];
    tickerList1[i].style.top = "0px";
  }

  //2
  for (let i = 0; i < numOfTickers2; i++) {

    const node2 = document.getElementById("tickerMain2");
    tickerList2[i] = node2.cloneNode(true);
    document.getElementById("tickerContainer").appendChild(tickerList2[i]);
    // tickerList2[i].style.backgroundColor = "hsl(" + i *9 + ", 100%, 50%)";
    startPos2[i] = i * mainLength2;
    tickerList2[i].style.left = startPos2[i];
    tickerList2[i].style.top = "25vh";
  }

  //3
  for (let i = 0; i < numOfTickers3; i++) {

    const node3 = document.getElementById("tickerMain3");
    tickerList3[i] = node3.cloneNode(true);
    document.getElementById("tickerContainer").appendChild(tickerList3[i]);
    // tickerList3[i].style.backgroundColor = "hsl(" + i * 3 + ", 100%, 50%)";
    startPos3[i] = i * mainLength3;
    tickerList3[i].style.left = startPos3[i];
    tickerList3[i].style.top = "50vh";
  }


  //4
  for (let i = 0; i < numOfTickers4; i++) {

    const node4 = document.getElementById("tickerMain4");
    tickerList4[i] = node4.cloneNode(true);
    document.getElementById("tickerContainer").appendChild(tickerList4[i]);
    // tickerList4[i].style.backgroundColor = "hsl(" + i * 12 + ", 100%, 50%)";
    startPos4[i] = i * mainLength4;
    tickerList4[i].style.left = startPos4[i];
    tickerList4[i].style.top = "75vh";
  }

  setInterval(moveText, 1);
  setInterval(moveText2, 30);
  setInterval(moveText3, 10);
  setInterval(moveText4, 2);

  function moveText() {
    for (let i = 0; i < numOfTickers1; i++) {
      if (startPos1[i] + mainLength1 > 0) {
        startPos1[i]--;
        tickerList1[i].style.left = startPos1[i] + "px";
      } else if (startPos1[i] + mainLength1 == 0 && i == 0) {
        startPos1[i] = startPos1[numOfTickers1 - 1] + mainLength1;
      } else if (startPos1[i] + mainLength1 == 0 && i > 0) {
        startPos1[i] = startPos1[i - 1] + mainLength1 ;
      }
    }
  }
  
    //2
    function moveText2() {
    for (let i = 0; i < numOfTickers2; i++) {
      if (startPos2[i] + mainLength2 > 0) {
        startPos2[i]--;
        tickerList2[i].style.left = startPos2[i] + "px";
      } else if (startPos2[i] + mainLength2 == 0 && i == 0) {
        startPos2[i] = startPos2[numOfTickers2 - 1] + mainLength2;
      } else if (startPos2[i] + mainLength2 == 0 && i > 0) {
        startPos2[i] = startPos2[i - 1] + mainLength2;
      }
    }
  }

    //3
    function moveText3() {
    for (let i = 0; i < numOfTickers3; i++) {
      if (startPos3[i] + mainLength3 > 0) {
        startPos3[i]--;
        tickerList3[i].style.left = startPos3[i] + "px";
      } else if (startPos3[i] + mainLength3 == 0 && i == 0) {
        startPos3[i] = startPos3[numOfTickers3 - 1] + mainLength3;
      } else if (startPos3[i] + mainLength3 == 0 && i > 0) {
        startPos3[i] = startPos3[i - 1] + mainLength3;
      }
    }
  }
    //4
    function moveText4() {
    for (let i = 0; i < numOfTickers4; i++) {
      if (startPos4[i] + mainLength4 > 0) {
        startPos4[i]--;
        tickerList4[i].style.left = startPos4[i] + "px";
      } else if (startPos4[i] + mainLength4== 0 && i == 0) {
        startPos4[i] = startPos4[numOfTickers4 - 1] + mainLength4;
      } else if (startPos4[i] + mainLength4 == 0 && i > 0) {
        startPos4[i] = startPos4[i - 1] + mainLength4 - 1;
      }
    }
  }
  
  
});

window.onresize = function(){ location.reload(); }
