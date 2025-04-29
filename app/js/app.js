'use strict';

// Ask for input and parse
let input = window.prompt(`Type a positive num`, ``);
let aNum = parseInt(input, 10);

// Error checking loop
while (typeof aNum !== `number` || Number.isNaN(aNum) || aNum <= 0) {
    input = window.prompt(`Please type a **positive** whole number:`, ``);
    aNum = parseInt(input, 10);
}

// Use client height as part of a message (for demo)
const screenHeight = document.documentElement.clientHeight;
document.body.innerHTML = `<p>Drawing a diamond of size ${aNum}.
Your screen height is ${screenHeight}px.</p>`;

// Optional: Set up a blinking cursor effect using setInterval (just for demo)
let show = true;
const cursor = document.createElement(`span`);
cursor.textContent = `|`;
cursor.style.fontWeight = `bold`;
cursor.style.marginLeft = `4px`;
document.body.appendChild(cursor);

setInterval(() => {
    cursor.style.visibility = show === true ? `visible` : `hidden`;
    show = !show;
}, 500);

// Example: draw diamond in console (odd size only)
const drawDiamond = (size) => {
    const midpoint = Math.floor(size / 2);
    for (let i = 0; i < size; i++) {
        const numStars = i <= midpoint
            ? 1 + 2 * i
            : 1 + 2 * (size - i - 1);
        const numSpaces = (size - numStars) / 2;
        const line = ` `.repeat(numSpaces) + `*`.repeat(numStars);
        console.log(line);
    }
};

drawDiamond(aNum);
