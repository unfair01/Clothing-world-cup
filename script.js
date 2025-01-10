const numImages = 14; // 총 이미지 개수 (4.jpg 제외)
const images = [];
for (let i = 1; i <= 15; i++) {
   if(i != 4) {
        images.push(`${i}.jpg`);
   }
}

let round = 1;
let selected = [];

function startGame() {
    showPair();
}

function showPair() {
    if (images.length === 0) {
        showResult();
        return;
    }
    if (images.length === 1) {
        selected.push(images[0]);
        images.shift();
        showResult();
        return;
    }

    const leftIndex = Math.floor(Math.random() * images.length);
    let rightIndex;
    do {
        rightIndex = Math.floor(Math.random() * images.length);
    } while (leftIndex === rightIndex);

    document.getElementById("leftImage").src = images[leftIndex];
    document.getElementById("rightImage").src = images[rightIndex];

    document.getElementById("leftButton").onclick = () => selectImage(leftIndex, rightIndex);
    document.getElementById("rightButton").onclick = () => selectImage(rightIndex, leftIndex);
}

function selectImage(selectedIndex, otherIndex) {
    selected.push(images[selectedIndex]);
    if (selectedIndex > otherIndex) {
         images.splice(otherIndex, 1);
         images.splice(selectedIndex - 1, 1);
    } else {
        images.splice(selectedIndex, 1);
        images.splice(otherIndex - 1, 1);
    }
    showPair();
}


function showResult() {
    document.getElementById("container").style.display = "none";
    document.getElementById("leftButton").style.display = "none";
    document.getElementById("rightButton").style.display = "none";

    if (selected.length === 1) {
        document.getElementById("result").innerText = `최종 우승: ${selected[0]}`;
    } else {
        document.getElementById("result").innerText = "선택된 이미지가 없습니다.";
    }
}

window.onload = function() {
    startGame();
};
