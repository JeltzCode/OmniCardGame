import {gameCards, gameCardsV2, cardIndex, cards} from "./data.js"
// import {render} from ".index.js"

function drawCard() {
    let randomNum = Math.floor(Math.random()*13)
    return cardIndex[randomNum]
}

function compareCards() {
    
    
    // forEach(function(card) {
    // })
    
    
    // let newCardData = gameCards.newCard
    // console.log(`Player One: ${gameCards.playerOne}`)
    // console.log(`Player Two: ${gameCards.playerTwo}`)
    // console.log(`Player three: ${gameCards.playerThree}`)
    console.log(`New Card: ${gameCards.newCard}`)
    
    // function comparePlayerOne() {
    //     if (gameCards.newCard === (gameCards.playerOne - 1)) {
    //         return "lower"
    //     }   else if (gameCards.newCard === (gameCards.playerOne + 1)) {
    //                 return "higher"
    //         } else if (gameCards.newCard === gameCards.playerOne) {
    //                     return "same"
    //           } else {"NR"}
    // }
    // function compareCards() {
        // if (gameCards.newCard === (gameCards.playerTwo - 1)) {
        //     console.log("lower")
        // }   else 
        // if (gameCards.newCard === (gameCards.playerTwo + 1)) {
        //             console.log("higher")
            // } else if (gameCards.newCard === gameCards.playerTwo) {
            //             console.log("same")
    //           } else {console.log("NR")}
    // }
    
    // function comparePlayerThree() {
    //     if (gameCards.newCard === (gameCards.playerThree - 1)) {
    //         return "lower"
    //     }   else if (gameCards.newCard === (gameCards.playerThree + 1)) {
    //                 return "higher"
    //         } else if (gameCards.newCard === gameCards.playerThree) {
    //                     return "same"
    //           } else {"NR"}
    // }
    
    // if (comparePlayerTwo() === "higher") {
    //     // gameCards.playersTwoThree = gameCards.newCard
    //     console.log(`PlayerTwo-Three`)

    // }
    
    // console.log(`Compared to Player One: "${comparePlayerOne()}"
    // Compared to Player Two: "${comparePlayerTwo()}"
    // Compared to Player Three: "${comparePlayerThree()}"`)
}

export {drawCard, compareCards}