'use strict';

// User input
let input = window.prompt(`Enter the size of your diamond as a number`, ``);
let aNum = parseInt(input, 10);

if (isNaN(aNum) || aNum <= 0) {
    alert(`Error: Please enter a positive number.`);
} else {
    let container = document.getElementById(`diamond-container`);

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let drawDiamond = (n) => {
        let isEven = n % 2 === 0;

        if (isEven) {
            // Top center star
            let space = n / 2;
            let topCenter = document.createElement(`div`);
            topCenter.textContent = ` `.repeat(space - 1) + `*`;
            container.appendChild(topCenter);

            // Top half
            let i = 1;
            while (i <= n / 2) {
                let spaceCount = n / 2 - i;
                let starCount = 2 * (i + 1) - 2;
                let row = document.createElement(`div`);
                row.textContent = ` `.repeat(spaceCount) + `*`.repeat(starCount);
                container.appendChild(row);
                i++;
            }

            // Bottom half
            i = 0;
            while (i < n / 2 - 1) {
                let spaceCount = i + 1;
                let starCount = n - 2 * (i + 1);
                let row = document.createElement(`div`);
                row.textContent = ` `.repeat(spaceCount) + `*`.repeat(starCount);
                container.appendChild(row);
                i++;
            }

            // Bottom center star
            let bottomCenter = document.createElement(`div`);
            bottomCenter.textContent = ` `.repeat(n / 2 - 1) + `*`;
            container.appendChild(bottomCenter);
        } else {
            // Top half (including middle)
            let i = 0;
            while (i <= Math.floor(n / 2)) {
                let spaceCount = Math.floor(n / 2) - i;
                let starCount = 2 * i + 1;
                let row = document.createElement(`div`);
                row.textContent = ` `.repeat(spaceCount) + `*`.repeat(starCount);
                container.appendChild(row);
                i++;
            }

            // Bottom half
            i = 0;
            while (i < Math.floor(n / 2)) {
                let spaceCount = i + 1;
                let starCount = n - 2 * (i + 1);
                let row = document.createElement(`div`);
                row.textContent = ` `.repeat(spaceCount) + `*`.repeat(starCount);
                container.appendChild(row);
                i++;
            }
        }
    };

    drawDiamond(aNum);
}
