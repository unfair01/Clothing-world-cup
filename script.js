const numImages = 14;
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

     const leftImageElement = document.getElementById("leftImage");
    const rightImageElement = document.getElementById("rightImage");

    leftImageElement.src = images[leftIndex];
    rightImageElement.src = images[rightIndex];


    leftImageElement.onclick = () => selectImage(leftIndex, rightIndex);
    rightImageElement.onclick = () => selectImage(rightIndex, leftIndex);
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
    document.getElementById("result").innerText = `최종 우승: ${selected[0]}`;
}

window.onload = function() {
    startGame();
};
