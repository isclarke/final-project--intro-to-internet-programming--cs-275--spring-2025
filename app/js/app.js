'use strict';

let input = window.prompt(`Enter the size of your diamond as a number:`);
let number = parseInt(input, 10);

if (isNaN(number) || number <= 0) {
    alert(`Error: Please enter a positive number.`);
} else {
    const container = document.getElementById(`diamond-container`);
    const isEven = number % 2 === 0;

    if (isEven) {
        // Top center star
        const topCenter = document.createElement(`div`);
        topCenter.textContent = `${`  `.repeat((number / 2) - 1)}*`;
        container.appendChild(topCenter);

        // Top half
        for (let j = 1; j <= number / 2; j++) {
            const spaceCount = (number / 2) - j;
            const starCount = 2 * (j + 1) - 2;
            const row = document.createElement(`div`);
            row.textContent = `${`  `.repeat(spaceCount)}${` *`.repeat(starCount)}`;
            container.appendChild(row);
        }

        // Bottom half
        for (let j = 0; j < number / 2 - 1; j++) {
            const spaceCount = j + 1;
            const starCount = number - 2 * (j + 1);
            const row = document.createElement(`div`);
            row.textContent = `${`  `.repeat(spaceCount)}${` *`.repeat(starCount)}`;
            container.appendChild(row);
        }

        // Bottom center star
        const bottomCenter = document.createElement(`div`);
        bottomCenter.textContent = `${`  `.repeat((number / 2) - 1)}*`;
        container.appendChild(bottomCenter);
    } else {
        // Top half (including center)
        for (let i = 0; i <= Math.floor(number / 2); i++) {
            const spaceCount = Math.floor(number / 2) - i;
            const starCount = 2 * i + 1;
            const row = document.createElement(`div`);
            row.textContent = `${` `.repeat(spaceCount)}${`*`.repeat(starCount)}`;
            container.appendChild(row);
        }

        // Bottom half
        for (let i = 0; i < Math.floor(number / 2); i++) {
            const spaceCount = i + 1;
            const starCount = number - 2 * (i + 1);
            const row = document.createElement(`div`);
            row.textContent = `${` `.repeat(spaceCount)}${`*`.repeat(starCount)}`;
            container.appendChild(row);
        }
    }
}
