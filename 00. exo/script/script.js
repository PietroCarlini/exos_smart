// =================================
// 🌱 1. Sélection des éléments DOM
// =================================

const myInput = document.querySelector(`.inputChampion`)
const myBtn = document.querySelector(`.btnAjouter`)
const myMsg = document.querySelector(`.message`)
const myList = document.querySelector(`.listeFavoris`)

const favoris = ["Darius", "Ahri", "Thresh"];
// =================================
// 🧠 2. Variables globales / état
// =================================

// =================================
// 🎊 3. Fonctions (logique métier)
// =================================
function displayList() {
    for (let i = 0; i < favoris.length; i++) {
        const hero = document.createElement(`li`)
        hero.textContent = `${favoris[i]}`
        myList.appendChild(hero)
    }
}

function addHero(heroPg) {
    favoris.push(heroPg)
}

function reset() {
    myInput.focus()
    myInput.value = "";
    myMsg.textContent = `NUmber of choosen hero: ${favoris.length}`
}

// =================================
// 🧲 4. Événements (interactions)
// =================================

displayList()
reset()
console.log(favoris);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        myList.textContent = "";
        if (myInput.value == "") {
            myMsg.textContent = "Please choose your Hero!"
            displayList();
        } else {
            let newHero = myInput.value;
            addHero(newHero);
            reset();
            displayList();
        } event.preventDefault();
    }
})
