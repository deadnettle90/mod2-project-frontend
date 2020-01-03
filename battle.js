const kingDropdown = document.getElementsByClassName("dropdown")
const battleForm = document.getElementById("battle-form")
const battleResultsDiv = document.getElementById("battle-results")
const battleButton = document.getElementById("battle-button")
const card1 = document.getElementById("card-1")
const card2 = document.getElementById("card-2")

fetch("http://localhost:3000/kings")
    .then(response => response.json())
    .then(kings => {
        kingSelector(kings)
    })

function kingSelector(kings) {
    battleButton.addEventListener("click", () => {
        event.preventDefault()
        kingBattle(kings)
    })
    kings.map(king => {
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')
        option1.textContent = king.name
        option2.textContent = king.name
        option1.value = king.id
        option2.value = king.id
        kingDropdown[0].appendChild(option1)
        kingDropdown[1].appendChild(option2)
    })
}


function kingBattle(kings) {
    attackKingID = kingDropdown[0].options[kingDropdown[0].selectedIndex].value
    defendKingID = kingDropdown[1].options[kingDropdown[1].selectedIndex].value

    attackerPower = 0
    defenderPower = 0
    
    kings.map(king => {
        if (king.id == attackKingID) {
            let house = king.houses[Math.floor(Math.random() * king.houses.length)]
            let houseName = house.name
            let housePower = house.power

            let houseNameH2 = document.createElement("h2")
            let housePowerH2 = document.createElement("h2")
            houseNameH2.textContent = `House: ${houseName}`
            housePowerH2.textContent = `Power: ${housePower}`
            card1.append(houseNameH2, housePowerH2)

            attackerPower = housePower
        }

        if (king.id == defendKingID) {
            let house = king.houses[Math.floor(Math.random() * king.houses.length)]
            let houseName = house.name
            let housePower = house.power


            let houseNameH2 = document.createElement("h2")
            let housePowerH2 = document.createElement("h2")
            houseNameH2.textContent = `House: ${houseName}`
            housePowerH2.textContent = `Power: ${housePower}`
            card2.append(houseNameH2, housePowerH2)

            defenderPower = housePower
        }

    })
    
    // console.log(battleResultsDiv.childNodes[0].textContent)
    // console.log(battleResultsDiv.childNodes[1].textContent)
    // console.log(battleResultsDiv.childNodes[2].textContent)
    // console.log(battleResultsDiv.childNodes[3].textContent)
    // console.log(kings, attackKingID, defendKingID)
    
    let winnerH1 = document.createElement("h1")
    winnerH1.textContent = "Winner! This house scored higher"

    if (attackerPower > defenderPower){
        console.log("Attacker won")
        card1.appendChild(winnerH1)
    } else {
        console.log("Defender won")
        card2.appendChild(winnerH1)
    }
}


// battleButton.addEventListener("click", () => {
    
//     fetch(`http://localhost:3000/kings/${attackKingID}`)
//         .then(response => response.json())
//         .then(king => {
//             let attackKingH1 = document.createElement("h1")
//             attackKingH1.innerText = king.name
//             battleResultsDiv.appendChild(attackKingH1)
//         })
    
//     fetch(`http://localhost:3000/kings/${defendKingID}`)
//         .then(response => response.json())
//         .then(king => {
//             let attackKingH1 = document.createElement("h1")
//             attackKingH1.innerText = king.name
//             battleResultsDiv.appendChild(attackKingH1)
//         })            
// })

