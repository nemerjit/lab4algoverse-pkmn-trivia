let correctAnswer = ""

async function pageLoad() {
    let answersId = choosePokemon()
    let arr = await pokeapiCall(answersId[0], "answer")
    correctAnswer = arr[0]
    let name2 = await pokeapiCall(answersId[1], 1)
    let name3 = await pokeapiCall(answersId[2], 1)
    let name4 = await pokeapiCall(answersId[3], 1)
    let array = [arr[0], name2, name3, name4]
    for(let i = 1; i < 5; i++) {
        newAnswer = "a" + i + "-label"
        console.log(document.getElementById(newAnswer))
        document.getElementById(newAnswer).textContent = array[i-1]
    }
    document.getElementById('pkmn-img').src = arr[1]
}


async function runApp() {
    checkAnswer(correctAnswer)
    let answersId = choosePokemon()
    let arr = await pokeapiCall(answersId[0], "answer")
    correctAnswer = arr[0]
    let name2 = await pokeapiCall(answersId[1], 1)
    let name3 = await pokeapiCall(answersId[2], 1)
    let name4 = await pokeapiCall(answersId[3], 1)
    let array = [arr[0], name2, name3, name4]
    for(let i = 1; i < 5; i++) {
        newAnswer = "a" + i + "-label"
        console.log(document.getElementById(newAnswer))
        document.getElementById(newAnswer).textContent = array[i-1]
    }
    document.getElementById('pkmn-img').src = arr[1]
    
}

async function pokeapiCall(pokemon, type) {
    let pokeapiBase = "https://pokeapi.co/api/v2/pokemon/"
    let response = await fetch(pokeapiBase + pokemon)
    let json = await response.json()
    let name = await json.name
    if (type=="answer") {
        console.log(name)
        let sprites = await json.sprites
        let png = await sprites.front_default
        return [name, png]
    }
    return name
}

function choosePokemon() {
    let numPokemon = 1025
    let randPokemon = Math.floor(Math.random()*numPokemon) + 1
    let arr = []
    arr.push(randPokemon)
    for(let i = 0; i < 3; i++) {
        arr.push(sameNum(arr, numPokemon))
    }
    return arr
}

function sameNum(arr, numPokemon) {
    let incorrect = Math.floor(Math.random()*numPokemon) + 1
    for(let i = 0; i < arr.length; i++) {
        while (arr[i] == incorrect) {
            incorrect = Math.floor(Math.random()*numPokemon) + 1
        }
    }
    return incorrect
}

function checkAnswer(correctAnswer) {
    for(let i = 1; i < 5; i++) {
        newAnswer = "a" + i
        if (document.getElementById(newAnswer).checked) {
            if (document.getElementById(newAnswer + "-label").textContent == correctAnswer) {
                alert("Correct Answer!")
            } else {
                alert("Incorrect Answer")
            }
            
        }
    }
}

