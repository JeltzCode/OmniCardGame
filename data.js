const cardIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const cards = ["", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

let gameCardsV2 = [
    {id:0, name:"playerOne", cards: [0]},
    {id:1, name:"playerTwo", cards: [5]},
    {id:2, name:"playerThree", cards: [2]},
    {id:3, name:"playerOneCards", cards: [3]},
    {id:4, name:"playerTwoCards", cards: [4]},
    {id:5, name:"playerThreeCards", cards: [5]},
    {id:6, name:"playersOneTwo", cards: [6]},
    {id:7, name:"playersOneThree", cards: [7]},
    {id:8, name:"playersTwoThree", cards: [8]},
    {id:9, name:"newCard", cards: [4]}
]

const playerCards = gameCardsV2.filter(player => player.id < 3).map(player => player.cards)
const newCard = gameCardsV2.filter(player => player.id == 9).map(player => player.cards).toString()

// console.log(newCard)

// function inspect(playerCards) { // 0,1,2
//     return playerCards
// }

// console.log(inspect())

let playerCard1 = playerCards[0].toString()
let playerCard2 = playerCards[1].toString()
let playerCard3 = playerCards[2].toString()

console.log(`PlayerOne:${playerCard1}, PlayerTwo:${playerCard2}, PlayerThree:${playerCard3}, newCard:${newCard}`)

// console.log(`playerCard2 == newCard:${playerCard2 == newCard}, --playerCard2 == newCard:${--playerCard2 == newCard}, ++playerCard2 == newCard:${++playerCard2 + playerCard2 == newCard}`)

if (--playerCard2 - playerCard1 == newCard) {
    console.log(`newCard(${newCard}) is below playerCard2(${playerCard2})`)
    }
    else if (++playerCard2 + playerCard2 == newCard) {
             console.log(`newCard(${newCard}) is above playerCard2(${playerCard2})`)
             }
             else if (playerCard2 == newCard) {
                 console.log(`newCard(${newCard}) is the same as playerCard2(${playerCard2})`)
                 }
                 else {
                     console.log(`newCard(${newCard}) is not related to playerCard2(${playerCard2})`)
                 }

// console.log(++playerCard2)
// // console.log(playerCard2)

// let num2 = 6;
// num2++;
// console.log(num2)
// console.log(`gameCardsV2[9].cards: ${gameCardsV2[9].cards}`)
// let tableCards = []
// for (let i=3;i<(gameCardsV2.length);i++) {
//     tableCards.push(gameCardsV2[i].cards)}
// console.log(tableCards) // output: [[3], [4], [5], [6], [7], [8], [7]]

// gameCards.map(card => card)
// console.log(tableCards[0])
// console.log(tableCards[0+1])
// console.log(tableCards[0]-1)
// console.log((tableCards[0]) + (tableCards[6]))

// if (tableCards[0] = tableCards[6+1]) {
//     console.log("True")
// } else {console.log("false")}

// PROPERTIES ARE OBJECT PAIRS {KEY: VALUE, KEY: VALUE} = USE DOT NOTATION EX: CONST VALUE =                   OBJECT.SOMEPROPERTY
// ARRARYS = [VALUE, VALUE] = USE BRACKET NOTATION 


const gameCards = {
        playerOne: "x",
        1: [1],
        2: [2],
        playerOneCards: [3],
        playerTwoCards: [4],
        playerThreeCards: [5],
        playersOneTwo: [6],
        playersOneThree: [7],
        playersTwoThree: [8],
        newCard: [9]
}




export {gameCards, gameCardsV2, cardIndex, cards}
