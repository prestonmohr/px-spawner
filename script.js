let size = 1

const colorPalettes = ["akc12", "microsoft-windows", "blk-aqu4", "spacehaze", "nymph-gb", "coral-4", "slimy-05", "grue", "blessing", "twilight-5", "nyx8", "lava-gb", "funkyfuture-8", "capp-5", "soda-cap", "sirens-at-night", "dullish-rainbow", "desatur8", "sls08", "fish-n-sea", "grape-soda", "12-bit-rainbow", "pollen8", "cryptic-ocean", "dream-haze-8", "curiosities", "cyclope6"];
const colorPaletteSelect = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
var colors;
switch (colorPaletteSelect) {
    case "akc12":
        colors = ['#201127', '#201433', '#1b1e34', '#355d68', '#6aaf9d', '#94c5ac', '#ffeb99', '#ffc27a', '#ec9a6d', '#d9626b', '#c24b6e', '#a73169'];
        break;
    case "microsoft-windows":
        colors = ['#000000', '#7e7e7e', '#bebebe', '#ffffff', '#7e0000', '#fe0000', '#047e00',  '#06ff04', '#7e7e00', '#ffff04', '#00007e', '#0000ff', '#7e007e', '#fe00ff', '#047e7e', '#06ffff'];
        break;
    case "blk-aqu4":
        colors = ['#002b59', '#005f8c', '#00b9be', '#9ff4e5']
        break;
    case "spacehaze":
        colors = ['#f8e3c4', '#cc3495', '#6b1fb1', '#0b0630']
        break;
    case "nymph-gb":
        colors = ['#2c2137', '#446176', '#3fac95', '#a1ef8c']
        break;
    case "coral-4":
        colors = ['#ffd0a4', '#f4949c', '#7c9aac', '#68518a']
        break;
    case "slimy-05":
        colors = ['#d1cb95', '#40985e', '#1a644e', '#04373b', '#0a1a2f']
        break;
    case "grue":
        colors = ['#0e0c1f', '#2f323e', '#4d5964', '#748380', '#b8c7bf']
        break;
    case "blessing":
        colors = ['#74569b', '#96fbc7', '#f7ffae', '#ffb3cb', '#d8bfd8']
        break;
    case "twilight-5":
        colors = ['#fbbbad', '#ee8695', '#4a7a96', '#333f58', '#292831']
        break;
    case "nyx8":
        colors = ['#08141e', '#0f2a3f', '#20394f', '#f6d6bd', '#c3a38a', '#997577', '#816271', '#4e495f']
        break;
    case "lava-gb":
        colors = ['#051f39', '#4a2480', '#c53a9d', '#ff8e80']
        break;
    case "funkyfuture-8":
        colors = ['#2b0f54', '#ab1f65', '#ff4f69', '#fff7f8', '#ff8142', '#ffda45', '#3368dc', '#49e7ec']
        break;
    case "capp-5":
        colors = ['#fadda2', '#6b61ff', '#66a1ff', '#8ecde6', '#f0eff4']
        break;
    case "soda-cap":
        colors = ['#2176cc', '#ff7d6e', '#fca6ac', '#e8e7cb']
        break;
    case "sirens-at-night":
        colors = ['#daf2e9', '#95e0cc', '#39707a', '#23495d', '#1c2638', '#9b222b', '#f14e52']
        break;
    case "dullish-rainbow":
        colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf', '#8409da']
        break;
    case "desatur8":
        colors = ['#f0f0eb', '#ffff8f', '#7be098', '#849ad8', '#e8b382', '#d8828e', '#a776c1', '#545155']
        break;
    case "sls08":
        colors = ['#0d2b45', '#203c56', '#544e68', '#8d697a', '#d08159', '#ffaa5e', '#ffd4a3', '#ffecd6']
        break;
    case "fish-n-sea":
        colors = ['#0e1c36', '#f97068', '#f1e3d3', '#6f8695', '#539987', '#383961', '#3b5249', '#79745c', '#a30b37', '#561f37', '#34252f', '#4f000b', '#8c1c13']
        break;
    case "grape-soda":
        colors = ['#aa81ff', '#b837ea', '#aa11bb', '#90006c', '#56002a', '#25000d', '#000000', '#15021e', '#47054f', '#c9298c', '#ee699e', '#ffbac0', '#fff6f6']
        break;
    case "12-bit-rainbow":
        colors = ['#881177', '#aa3355', '#cc6666', '#ee9944', '#eedd00', '#99dd55', '#44dd88', '#22ccbb', '#00bbcc', '#0099cc', '#3366bb', '#663399']
        break;
    case "pollen8":
        colors = ['#73464c', '#ab5675', '#ee6a7c', '#ffa7a5', '#ffe07e', '#ffe7d6', '#72dcbb', '#34acba']
        break;
    case "cryptic-ocean":
        colors = ['#2a173b', '#3f2c5f', '#443f7b', '#4c5c87', '#69809e', '#95c5ac']
        break;
    case "dream-haze-8":
        colors = ['#3c42c4', '#6e51c8', '#a065cd', '#ce79d2', '#d68fb8', '#dda2a3', '#eac4ae', '#f4dfbe']
        break;
    case "curiosities":
        colors = ['#46425e', '#15788c', '#00b9be', '#ffeecc', '#ffb0a3', '#ff6973']
        break;
    case "cyclope6":
        colors = ['#411d31', '#631b34', '#32535f', '#0b8a8f', '#0eaf9b', '#30e1b9']
        break;
    default:
        colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
}

let colorIndex = 0;
const squares = [];
const occupiedPositions = [];
let waiting = false;

const title = document.createElement('div');
title.style.position = 'fixed';
title.style.top = '5px';
title.style.left = '36px';
title.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
title.style.padding = '5px 10px';
title.style.borderRadius = '20px';
title.style.fontSize = '12px';
title.style.fontFamily = 'Arial, Helvetica, sans-serif';
title.style.color = 'rgba(255, 255, 255, 0.75)';
title.style.zIndex = '999999';
title.textContent = `px-spawner`;
document.body.appendChild(title);

const backArrow = document.createElement('div');
backArrow.style.position = 'fixed';
backArrow.style.top = '5px';
backArrow.style.left = '5px';
backArrow.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
backArrow.style.padding = '5px 10px';
backArrow.style.borderRadius = '20px';
backArrow.style.fontSize = '12px';
backArrow.style.fontFamily = 'Arial, Helvetica, sans-serif';
backArrow.style.color = 'rgba(255, 255, 255, 0.75)';
backArrow.style.zIndex = '999999';
var linkGit = document.createElement("a");
linkGit.href = "https://github.com/prestonmohr/px-spawner";
linkGit.textContent = "<";
linkGit.target="_blank"
linkGit.style.fontSize = '12px';
linkGit.style.fontFamily = 'Arial, Helvetica, sans-serif';
linkGit.style.color = 'rgba(255, 255, 255, 0.75)';
linkGit.style.textDecoration = 'none';
backArrow.appendChild(linkGit);
document.body.appendChild(backArrow);

const display = document.createElement('div');
display.style.position = 'fixed';
display.style.bottom = '33px';
display.style.left = '5px';
display.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
display.style.padding = '5px 10px';
display.style.borderRadius = '20px';
display.style.fontSize = '12px';
display.style.fontFamily = 'Arial, Helvetica, sans-serif';
display.style.color = 'rgba(255, 255, 255, 0.75)';
display.style.zIndex = '999999';
display.textContent = `${size}x${size}`;
document.body.appendChild(display);

const displayPalette = document.createElement('div');
displayPalette.style.position = 'fixed';
displayPalette.style.bottom = '5px';
displayPalette.style.left = '5px';
displayPalette.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayPalette.style.padding = '5px 10px';
displayPalette.style.borderRadius = '20px';
displayPalette.style.fontSize = '12px';
displayPalette.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayPalette.style.color = 'rgba(255, 255, 255, 0.75)';
displayPalette.style.zIndex = '999999';
var linkPalette = document.createElement("a");
linkPalette.href = "https://lospec.com/palette-list/" + `${colorPaletteSelect}`;
linkPalette.textContent = `${colorPaletteSelect}`;
linkPalette.target="_blank"
linkPalette.style.fontSize = '12px';
linkPalette.style.fontFamily = 'Arial, Helvetica, sans-serif';
linkPalette.style.color = 'rgba(255, 255, 255, 0.75)';
linkPalette.style.textDecoration = 'none';
displayPalette.appendChild(linkPalette);
document.body.appendChild(displayPalette);

const displayCredit = document.createElement('div');
displayCredit.style.position = 'fixed';
displayCredit.style.bottom = '5px';
displayCredit.style.right = '5px';
displayCredit.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayCredit.style.padding = '5px 10px';
displayCredit.style.borderRadius = '20px';
displayCredit.style.fontSize = '12px';
displayCredit.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayCredit.style.color = 'rgba(255, 255, 255, 0.75)';
displayCredit.style.zIndex = '999999';
var link = document.createElement("a");
link.href = "https://www.prestonmohr.com";
link.textContent = "preston mohr";
link.target="_blank"
link.style.fontSize = '12px';
link.style.fontFamily = 'Arial, Helvetica, sans-serif';
link.style.color = 'rgba(255, 255, 255, 0.75)';
link.style.textDecoration = 'none';
displayCredit.appendChild(link);
document.body.appendChild(displayCredit);

const displayYear = document.createElement('div');
displayYear.style.position = 'fixed';
displayYear.style.bottom = '33px';
displayYear.style.right = '5px';
displayYear.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayYear.style.padding = '5px 10px';
displayYear.style.borderRadius = '20px';
displayYear.style.fontSize = '12px';
displayYear.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayYear.style.color = 'rgba(255, 255, 255, 0.75)';
displayYear.style.zIndex = '999999';
displayYear.textContent = '2023';
document.body.appendChild(displayYear);

const continueDisplay = document.createElement('div');
continueDisplay.style.position = 'fixed';
continueDisplay.style.left = '50%';
continueDisplay.style.top = '50%';
continueDisplay.style.transform = 'translate(-50%, -50%)';
continueDisplay.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
continueDisplay.style.padding = '5px 10px';
continueDisplay.style.borderRadius = '20px';
continueDisplay.style.fontSize = '12px';
continueDisplay.style.opacity = 0;
continueDisplay.style.fontFamily = 'Arial, Helvetica, sans-serif';
continueDisplay.style.color = 'rgba(255, 255, 255, 0.75)';
continueDisplay.style.transition = 'opacity 0.25s';
continueDisplay.style.zIndex = '999999';
continueDisplay.textContent = 'press any key to continue';
document.body.appendChild(continueDisplay);

const beginDisplay = document.createElement('div');
beginDisplay.style.position = 'fixed';
beginDisplay.style.left = '50%';
beginDisplay.style.top = '50%';
beginDisplay.style.transform = 'translate(-50%, -50%)';
beginDisplay.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
beginDisplay.style.padding = '5px 10px';
beginDisplay.style.borderRadius = '20px';
beginDisplay.style.fontSize = '12px';
beginDisplay.style.opacity = 1;
beginDisplay.style.fontFamily = 'Arial, Helvetica, sans-serif';
beginDisplay.style.color = 'rgba(255, 255, 255, 0.75)';
beginDisplay.style.transition = 'opacity 0.25s';
beginDisplay.style.zIndex = '999999';
beginDisplay.textContent = 'press any key to play';
document.body.appendChild(beginDisplay);

const grid = document.createElement('div');
grid.style.width = `100%`;
grid.style.height = `100%`;
grid.style.overflow = `hidden`;
grid.scroll = `no`;
document.body.appendChild(grid);

document.addEventListener('keydown', event => {
    if (event.code !== 'Escape' && !waiting) addSquare();
});
document.addEventListener('touchstart', event => {
    if (!waiting) addSquare();
});

function addSquare() {
    beginDisplay.style.opacity = 0;
    if (squares.length === size * size) {
        waiting = true;
        continueDisplay.style.opacity = 0;
        squares.forEach(square => {
            square.style.transition = 'opacity 1s';
            square.style.opacity = 0;
            setTimeout(() => square.remove(), 1000);
        });
        setTimeout(() => {
            squares.length = 0;
            occupiedPositions.length = 0;
            size *= 2;
            colorIndex = 0;
            waiting = false;
            display.textContent = `${size}x${size}`;
        }, 500);
    } else if (squares.length === (size * size) - 1) {
        continueDisplay.style.opacity = 1;
        let randomLeft = Math.floor(Math.random() * size) * (100 / size);
        let randomTop = Math.floor(Math.random() * size) * (100 / size);
        while (occupiedPositions.some(pos => pos.left === randomLeft && pos.top === randomTop)) {
            randomLeft = Math.floor(Math.random() * size) * (100 / size);
            randomTop = Math.floor(Math.random() * size) * (100 / size);
        }
        occupiedPositions.push({ left: randomLeft, top: randomTop });
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100vw / ${size})`;
        square.style.height = `calc(100vh / ${size})`;
        square.style.left = `${randomLeft}vw`;
        square.style.top = `${randomTop}vh`;
        square.style.backgroundColor = colors[colorIndex % colors.length];
        colorIndex++;
        grid.appendChild(square);
        squares.push(square);
    } else {
        let randomLeft = Math.floor(Math.random() * size) * (100 / size);
        let randomTop = Math.floor(Math.random() * size) * (100 / size);
        while (occupiedPositions.some(pos => pos.left === randomLeft && pos.top === randomTop)) {
            randomLeft = Math.floor(Math.random() * size) * (100 / size);
            randomTop = Math.floor(Math.random() * size) * (100 / size);
        }
        occupiedPositions.push({ left: randomLeft, top: randomTop });
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100vw / ${size})`;
        square.style.height = `calc(100vh / ${size})`;
        square.style.left = `${randomLeft}vw`;
        square.style.top = `${randomTop}vh`;
        square.style.backgroundColor = colors[colorIndex % colors.length];
        colorIndex++;
        grid.appendChild(square);
        squares.push(square);
    }
}
