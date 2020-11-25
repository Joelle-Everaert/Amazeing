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

const mazeArray = multiline.split('\n');
console.log(mazeArray)

for (let i = 0; i < mazeArray.length; i++) {
    const ligne = document.createElement('div');
    ligne.className = 'labyrinthe'; // toutes mes lignes horizontales de mon labyrinthe

    // on demande la longueur de la ligne 0 qui correspond au nombre de caractere dans la ligne
    for (let j = 0; j < mazeArray[0].length; j++) { // lis les caractere de la premiere ligne de multiline (donnera tjs la largeur de base)
        const tile = document.createElement('div');
        const caracter = mazeArray[i]; // reprensente l'ensemble des caractères de la ligne (j) de multiline
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
            stockTresorPositionX = caracter.indexOf('T');
            console.log('caracter.indexOf(t) est egal à ', caracter.indexOf("T"));
            stockTresorPositionY = i // chaque ligne i = une ligne 
            console.log(i)
        }
    }

    main.appendChild(ligne);
}

// ____________________________________________TIMER & IMAGE LOOSER__________________________________________

const timer = document.createElement('div');
timer.className = 'timer'
const imageLooser = document.createElement('div');
imageLooser.className = 'imageLooser'
main.appendChild(timer)


let sec = 5;

setInterval(function () {
    sec--;
    timer.innerHTML = sec + ' secondes '
    if (sec == 0) {
        main.appendChild(imageLooser)  ///affichage de l'image
        // alert('YOU LOOSE!!')
        setTimeout(function(){   //effectue une action
            window.location=''
         }, 3000);
    }

}, 1000);


// ____________________________________________TIMER & IMAGE LOOSER________________________________________



// ____________________________________DEFINIT POSITION X & Y POUR LVL SUIVANT________________________________
let positionY = 0; // position verticale
positionY += stockPositionY + 1 // creation stockposition en ligne 40
let positionX = 0; // position horizontale
positionX += stockPositionX + 1 // 

let posY = 0;
posY += stockTresorPositionY + 1 // (+1 car on doit faire +1 dans mon tableau --> je sais pas pq mais sinon ca cale mal les div)
let posX = 0;
posX += stockTresorPositionX + 1

// ____________________________________DEFINIT POSITION X & Y POUR LVL SUIVANT________________________________

let perso = document.createElement('div');
perso.className = 'perso';
document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);

document.body.addEventListener('keydown', function (e) {
    console.log(e.code)
})

//___________________________________________EVENT TOUCHE________________________________________________________
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
        if (positionY <= mazeArray.length) { // evite msg erreurs console
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

        if (positionY >= 1) { // evite msg erreurs console
            positionY--
            if (document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").classList.contains('mur')) {
                positionY++
                document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
            } else {
                document.querySelector("body > main > div:nth-child(" + positionY + ") > div:nth-child(" + positionX + ")").appendChild(perso);
            }

        }
    }

    if (document.querySelector("body > main > div:nth-child(" + posY + ") > div.tresor > div")) { // div.tresor 
        const winner = document.createElement('img');
        winner.className = 'winner';
        main.appendChild(winner)
    }

})