// =================================
// 🌱 1. Sélection des éléments DOM
// =================================
const myInput = document.querySelector(`.inputChampion`)
const mySelect = document.querySelector(`#hero-selector`)
const btnAdd = document.querySelector(`.btnAjouter`)
const btnReset = document.querySelector(`.btnReset`)
const message = document.querySelector(`.message`)
const myComp = document.querySelector(`.compteur`)
const myList = document.querySelector(`.liste-champions`)

let roaster = []
const champions = [
    // Top
    "Darius", "Garen", "Malphite", "Fiora", "Camille", "Teemo", "Nasus", "Irelia", "Riven", "Sett",
    // Jungle
    "Vi", "Warwick", "Hecarim", "Lee Sin", "Ekko", "Amumu", "Shyvana", "Kha'Zix", "Rengar", "Nidalee",
    // Mid
    "Yasuo", "Lux", "Syndra", "Zed", "Ahri", "Fizz", "Orianna", "Veigar", "Viktor", "Katarina",
    // ADC
    "Jinx", "Caitlyn", "Ezreal", "Jhin", "Miss Fortune", "Vayne", "Ashe", "Draven", "Kai'Sa", "Xayah",
    // Support
    "Thresh", "Lulu", "Blitzcrank", "Soraka", "Nautilus", "Leona", "Morgana", "Zilean", "Nami", "Pyke"
];

// =================================
// 🧠 2. Variables globales / état
// =================================

// =================================
// 🎊 3. Fonctions (logique métier)
// =================================

function initSelect(){
    for (let i= 0; i < champions.length; i++){
        const listOpt = document.createElement(`option`)
        listOpt.textContent=`${champions[i]}`
        listOpt.value=`${champions[i]}`
        mySelect.appendChild(listOpt)
    }
}



function addFreeHero(){
     // NB:indexOF -1 = not present -- here is frome input
    if (roaster.indexOf(myInput.value) === -1){
    const freeHero = document.createElement('li')
    freeHero.textContent = `${myInput.value}`
    // adding element to list in HTML
    myList.appendChild(freeHero)
    //NB adding myInput.value tu roaster Array
    roaster.push(myInput.value)
    // I want to change the content of my P with the numeber of hero in my roaster (roaster.length)
    myComp.textContent = roaster.length;
    if(roaster.length == 5) {
        message.textContent = `Your party is complete: go get them!!`
        btnAdd.disabled= true
    }
} else {
    message.textContent = `${myInput.value} is already been added to your party: chose another Hero!`
}
}

function addSelectedHero(){
    // NB:indexOF -1 = not present -- here is frome selection
    if (roaster.indexOf(mySelect.value) === -1){
        const selHero = document.createElement('li')
        selHero.textContent = `${mySelect.value}`
        // adding element to list in HTML
        myList.appendChild(selHero)
        //NB adding mySelect.value tu roaster Array
        roaster.push(mySelect.value)
        // I want to change the content of my P with the numeber of hero in my roaster (roaster.length)
        myComp.textContent = roaster.length;
        if(roaster.length == 5) {
            message.textContent = `Your party is complete: go get them!!`
            btnAdd.disabled= true
        }
    } else {
        message.textContent = `${mySelect.value} is already been added to your party: chose another Hero!`
    }
}

function resetParty (){
    myList.innerHTML = "";
    myComp.textContent = 0;
    roaster = []
    console.log(roaster)
    message.textContent = "Chose your team!"
    btnAdd.disabled= false
}

function reset(){
    myInput.value = "";
    myInput.focus()
}

// =================================
// 🧲 4. Événements (interactions)
// =================================

initSelect()

btnAdd.addEventListener('click', function(){
    if (myInput.value != ""){
        addFreeHero()
        console.log(roaster)
        reset()
    } else{
        addSelectedHero()
        console.log(roaster)
        reset()
    }
})

btnReset.addEventListener('click', function(){
    resetParty();
    reset()
})