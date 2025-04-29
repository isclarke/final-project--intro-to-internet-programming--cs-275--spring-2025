'use strict';

// User input
let input = window.prompt(`Type a positive num`, ``);
let aNum = parseInt(input, 10);

// Check if the input is a positive number
if (isNaN(aNum) || aNum <= 0) {
    alert(`Error: Please enter a positive number.`);
} else {
    let container = document.getElementById(`diamond-container`);
    container.innerHTML = ``;

    // Create Diamond
    let drawDiamond = (n) => {
        let isEven = n % 2 === 0;

        if (isEven) {
            // Top center star
            let space = n / 2;
            let topCenter = document.createElement(`div`);
            topCenter.textContent = ` `.repeat(space - 1) + `*`;
            container.appendChild(topCenter);

            // Top half
            for (let i = 1; i <= n / 2; i++) {
                let spaceCount = n / 2 - i;
                let starCount = 2 * (i + 1) - 2;
                let row = document.createElement(`div`);
                row.textContent = ` `.repeat(spaceCount) + `*`.repeat(starCount);
                container.appendChild(row);
            }

            // Bottom half
            for (let i = 0; i < n / 2 - 1; i++) {
                let spaceCount = i + 1;
                let starCount = n - 2 * (i + 1);
                let row = document.createElement(`div`);
                row.textContent = ` `.repeat(spaceCount) + `*`.repeat(starCount);
                container.appendChild(row);
            }

            // Bottom center star
            let bottomCenter = document.createElement(`div`);
            bottomCenter.textContent = ` `.repeat(n / 2 - 1) + `*`;
            container.appendChild(bottomCenter);
        } else {
            // Top half (including middle)
            for (let i = 0; i <= Math.floor(n / 2); i++) {
                let spaceCount = Math.floor(n / 2) - i;
                let starCount = 2 * i + 1;
                let row = document.createElement(`div`);
                row.textContent = ` `.repeat(spaceCount) + `*`.repeat(starCount);
                container.appendChild(row);
            }

            // Bottom half
            for (let i = 0; i < Math.floor(n / 2); i++) {
                let spaceCount = i + 1;
                let starCount = n - 2 * (i + 1);
                let row = document.createElement(`div`);
                row.textContent = ` `.repeat(spaceCount) + `*`.repeat(starCount);
                container.appendChild(row);
            }
        }
    };

    drawDiamond(aNum);
}
