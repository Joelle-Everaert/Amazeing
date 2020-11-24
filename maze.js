const main = document.querySelector('main');

// _______________________________________level I__________________________________________________

const multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

// _______________________________________level II__________________________________________________

// const multiline = `**********************
// *..S.................*
// ********************.*
// *....................*
// *.********************
// *...................T*`

// _______________________________________level III__________________________________________________

// const multiline = `********
// ****S***
// ****.***
// ****.***
// ****.***
// *......*
// *.****.*
// *..***.*
// *..***.*
// **.*****
// *T.*****
// ********`
// _________________________________________CODE______________________________________________________

const ligneArray = multiline.split('\n');
console.log(ligneArray)

for (let i = 0; i < ligneArray.length; i++) {
    const ligne = document.createElement('div');
    ligne.className = 'labyrinthe'; // toutes mes lignes horizontales de mon labyrinthe

    // on demande la longueur de la ligne 0 qui correspond au nombre de caractere dans la ligne
    for (let j = 0; j < ligneArray[0].length; j++) { // lis les caractere de la premiere ligne de multiline
        const tile = document.createElement('div');
        const caracter = ligneArray[i]; // reprensente l'ensemble des caractères de  la ligne (j) de multiline
        tile.innerHTML = caracter[j]; // j represente chaque caractere d'une ligne
        ligne.appendChild(tile); // en un tour de i, je construis la premiere ligne avec j
        if (tile.innerHTML == '*') {
            tile.className = 'mur';
            tile.innerHTML = '';
        }
        if (tile.innerHTML == '.') {
            tile.className = 'chemin';
            tile.innerHTML = '';
        }
        if (tile.innerHTML == 'S') {
            tile.className = 'start';
            tile.innerHTML = '';
            stockPositionX = caracter.indexOf('S'); // on va chercher la place de S
            console.log('caracter.indexOf(s)', caracter.indexOf("S"));
            stockPositionY = i
            console.log('mon start commence à :', i, 'vertical')
        }
        if (tile.innerHTML == 'T') {
            tile.className = 'tresor';
            tile.innerHTML = '';
        }
    }

    main.appendChild(ligne);
}

// definit position X et Y pour futur labyrinthe

let positionY = 0; // position verticale
positionY += stockPositionY + 1  // creation stockposition en ligne 40
let positionX = 0; // position horizontale
positionX += stockPositionX + 1  // 


let perso = document.createElement('div');
perso.className = 'perso';
document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);

document.body.addEventListener('keydown', function (e) {
    console.log(e.code)
})

// Evenement sur les touches //
const deplacement = document.addEventListener('keydown', function (e) {

    if (e.code == 'ArrowRight') {
        positionX++
        if (document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").classList.contains('mur')) {
            positionX--
            document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
        } else {
            document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
        }
    }
    if (e.code == "ArrowLeft") {
        positionX--
        if (document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").classList.contains('mur')) {
            positionX++
            document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
        } else {
            document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
        }
    }
    if (e.code == 'ArrowDown') {
        if (positionY <= ligneArray.length){   // evite msg erreurs console
            positionY++
            if (document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").classList.contains('mur')) {
                positionY--
                document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
            } else {
                document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso); // affiche la boule qui se déplace
            }
            console.log(positionY) // savoir notre position Y max possible
        }
    }
    if (e.code == 'ArrowUp') {
        
        if (positionY >= 1) {   // evite msg erreurs console
            positionY--
            if (document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").classList.contains('mur')) {
                positionY++
                document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
            } else {
                document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
            }

        }
    }
    if (document.querySelector("body > main > div:nth-child(2) > div.tresor > div")){
        alert ('You Won Little Lucky Guy ! ')
    }

})