// =================================
// 🌱 1. Sélection des éléments DOM
// =================================

const myInput = document.querySelector(`.inputNom`)
const btnAdd = document.querySelector(`.btnAjouter`)
const addMsg = document.querySelector(`#messageAjout`)
const comp = document.querySelector(`.compteur`)
const myList = document.querySelector(`.listeParticipants`)
const inputSearch = document.querySelector(`.inputRecherche`)
const btnSearch = document.querySelector(`.btnRechercher`)
const result = document.querySelector(`.resultatRecherche`)
const recap = document.querySelector(`.recap`)

let listPart = []



// =================================
// 🧠 2. Variables globales / état
// =================================

// =================================
// 🎊 3. Fonctions (logique métier)
// =================================
function displayPart() {
    myList.innerHTML = "";
    //4. Gérer le cas où le tableau est vide (au début ou si il devient vide) avec un message par défaut
    if (listPart.length == 0) {
        recap.textContent = "Aucun participant à l'événement pour l'instant"
    } else {
        for (let i = 0; i < listPart.length; i++) {
            let partecipant = document.createElement('li')
            partecipant.innerHTML = `
        <p>${listPart[i]}</p>
        <button class="delete">Supprimer</button>
        `
            myList.appendChild(partecipant)
        }
        //temporary var to stock string
        let listName = "";
        // adding listPart content to listName at each turn
        for (let j = 0; j < listPart.length; j++) {
            // to add , after name
            if (j < listPart.length - 1) {
                listName += `${listPart[j]}` + ","
                //avoiding , after last one
            } else {
                listName += `${listPart[j]}`
            }
        }
        //insert listName in recap
        recap.textContent = listName
    }
    // compt update link to the lenght of the listPart table!
    comp.textContent = listPart.length
}

function reset(){
    myInput.value = "";
    myInput.focus()
}

// =================================
// 🧲 4. Événements (interactions)
// =================================

btnAdd.addEventListener('click', function (){
    if (myInput.value != ""){
        if (listPart.indexOf(myInput.value) == -1){
        listPart.push(myInput.value)
        reset()
        displayPart()
        addMsg.textContent = `${myInput.value} ajouté à la liste des participants`
        } else {
            addMsg.textContent = `${myInput.value} a déjà été ajouté à la liste!`
        }
    } else {
        addMsg.textContent = "Indiquez le nom du participant, svp"
    }
})

myList.addEventListener('click', function(e){
    //checking if what I click has a class .delete
    if(e.target.matches(`.delete`)){
        //I create a var that contains the closest li to the button I've clicked
        let li = e.target.closest(`li`)
        // then I create a var that look from the first p ONLY in li, not in DOCUMENT as usual
        let name = li.querySelector(`p`)
        //name.textcontent = text written inside p!!! GAME CHANGER! it's scan the arraylist partfor the value "name.content" and give back a position index
        let toDelete = listPart.indexOf(name.textContent)
        //splice use the position of toDelete to eliminate the element with taht position (only that one because it's written , 1) inside listPart
        listPart.splice(toDelete, 1)
        displayPart()
    }
})

// Esatto, stesso processo! indexOf() ti restituisce -1 se non trova il nome, o la posizione se lo trova. Quindi puoi usarlo per sapere se il partecipante è presente o assente. Prova a scrivere l'event listener su btnSearch!

btnSearch.addEventListener('click', function (){
    if (listPart.indexOf(inputSearch.value) === -1){
        result.textContent = "le nom que vous recherchez ne figure pas dans la liste"
    } else {
        result.textContent = `${inputSearch.value} Il a déjà été ajouté à la liste des participants`
    }
})

