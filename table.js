import {gameCards, gameCardsV2, cardIndex, cards} from "./data.js"
import {drawCard} from "./utils.js"

class Table {
    constructor(data) {
        Object.assign(this, data)
    }
        
    getTableHtml() {
        const {playerOne, playerTwo, playerThree, playerOneCards, playerTwoCards, playerThreeCards,     playersOneTwo, playersOneThree, playersTwoThree} = this
        return `
            <div class="layout-row-one">
                <div class="other-player card">${playerTwo}</div>
                <div class="others-cards card">${playersTwoThree}</div>
                <div class="other-player card">${playerThree}</div>
            </div>
            <div class="layout-row-two">
                <div class="others-cards card">${playerTwoCards}</div>
                <div class="others-cards card">${playerThreeCards}</div>
            </div>
            <div class="layout-row-three">
                <div class="others-cards card">${playersOneTwo}</div>
                <div class="others-cards card">${playersOneThree}</div>
            </div>
            <div class="layout-row-four">
                <div class="playerOne">${playerOne}</div>
                <div class="my-cards card">${playerOneCards}</div>
            </div>`
    }
    
//     {id:1, name:"playerOne",value: []},
//     {id:2, name:"playerTwo",value: []},
//     {id:3, name:"playerThree",value: []},
//     {id:4, name:"playerOneCards",value: []},
//     {id:5, name:"playerTwoCards",value: []},
//     {id:6, name:"playerThreeCards",value: []},
//     {id:7, name:"playersOneTwo",value: []},
//     {id:8, name:"playersOneThree",value: []},
//     {id:9, name:"playersTwoThree",value: []},
//     {id:10, name:"newCard",value: []}
    
    // getNewCard() {
    //     // const {newCard} = this
    //     return drawCard()
    // }
    
    // compareCards(cards) {
    //     const {playerOne, playerTwo, playerThree} = this
    //     let currentCardArray = ""
    // }
}

export default Table