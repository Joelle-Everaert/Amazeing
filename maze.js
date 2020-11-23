const main = document.querySelector('main');



const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`

// const multiline = `***********.*
// *S.....**.*.T
// *****.....*.*
// *****.***.*.*
// *****.*****.*
// *****.*****.*
// *****.......*
// *****.*******
// *.........***
// *.******...**
// *....********`

for (let i = 0; i < multiline.length; i++) {
    const ligne = document.createElement('div');
    ligne.className = 'labyrinthe';
    main.appendChild(ligne);
    // ligne.innerHTML = multiline[i].split('')

    if (multiline[i] === '*') {
        ligne.className += ' mur';
    }
    if (multiline[i] === '.') {
        ligne.className += ' chemin';
    }
    if (multiline[i] === 'S') {
        ligne.className = 'start'
    }
    if (multiline[i] === 'T') {
        ligne.className = "tresor"
    }
}

let perso = document.createElement('div');
perso.className = 'perso';
document.querySelector("body > main > div:nth-child(15)").appendChild(perso)

let posX = 15;


document.body.addEventListener('keydown', function (e) {
    console.log(e.code)

    if (e.code === "ArrowRight") {
        posX++
        if (document.querySelector("body > main > div:nth-child(" + posX + ")").classList.contains('mur')) {
            alert('NOPE -> WALL')
            posX -= 1
            document.querySelector("body > main > div:nth-child(" + posX + ")").appendChild(perso)
        } else {
            document.querySelector("body > main > div:nth-child(" + posX + ")").appendChild(perso)
        }
    }
    if (e.code === "ArrowLeft") {
        posX--
        if (document.querySelector("body > main > div:nth-child(" + posX + ")").classList.contains('mur')) {
            alert('NOPE -> WALL')
            posX += 1
            document.querySelector("body > main > div:nth-child(" + posX + ")").appendChild(perso)
        } else {
            document.querySelector("body > main > div:nth-child(" + posX + ")").appendChild(perso)
        }
    }
    if (e.code === "ArrowDown") {
        posX += 13
        if (document.querySelector("body > main > div:nth-child(" + posX + ")").classList.contains('mur')) {
            alert('NOPE -> WALL')
            posX -= 13
            document.querySelector("body > main > div:nth-child(" + posX + ")").appendChild(perso)
        } else {
            document.querySelector("body > main > div:nth-child(" + posX + ")").appendChild(perso)

        }
    }
    if (e.code === "ArrowUp") {
        posX -= 13
        if (document.querySelector("body > main > div:nth-child(" + posX + ")").classList.contains('mur')) {
            alert('NOPE -> WALL')
            posX += 13
            document.querySelector("body > main > div:nth-child(" + posX + ")").appendChild(perso)
        } else {
            document.querySelector("body > main > div:nth-child(" + posX + ")").appendChild(perso)
        }
    }
    if (document.querySelector("body > main > div.tresor > div.perso")) {
        alert('YOU WIN!')

    }

})