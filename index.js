
let deckId = "s5ons7onnrel" // "sg9sq4vib4hc""y3w8gvn2dsls""hh3txc3txtrq""hh3txc3txtrq""fyggerdwxo5v""hj7wgv3sl33d" "mqln5zf1l0na"
const drawCardsBtn = document.querySelector("#deal-button")
const newDeckBtn = document.querySelector("#guess-button")


newDeckBtn.addEventListener("click", async()=>{
    const res = await fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const data = await res.json()
    console.log(data)
        deckId = data.deck_id
        console.log(data.deck_id)
})


drawCardsBtn.addEventListener("click", async() => {
    const res = await fetch(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
    const data = await res.json()
    console.log(data)
    console.log(`cards[0].image:${data.cards[0].image}
    cards[0].images.svg:${data.cards[0].images.svg}`)
    // document.querySelector("#player-2-card").innerHTML = `<img class="card" src="${data.cards[0].image}">`
    // document.querySelector("#player-3-card").innerHTML = `<img class="card" src="${data.cards[0].image}">`
    document.querySelector("#players-2-3-cards").innerHTML = `
    <img class="card" id="card0" src="${data.cards[0].image}">
    <img class="card" id="card1" src="${data.cards[1].image}">
    <img class="card" id="card2" src="${data.cards[2].image}">
    <img class="card" id="card3" src="${data.cards[3].image}">`
})  


// {"success":true;
// "deck_id":"05cornba8w81",
// "cards":
// [
//     {"code":"7D",
//     "image":"https://deckofcardsapi.com/static/img/7D.png",
//     "images":{
//         "svg":"https://deckofcardsapi.com/static/img/7D.svg",
//         "png":"https://deckofcardsapi.com/static/img/7D.png"
//     },
//         "value":"7",
//         "suit":"DIAMONDS"
//     },

//     {"code":"QS",
//     "image":"https://deckofcardsapi.com/static/img/QS.png",
//     "images":{
//         "svg":"https://deckofcardsapi.com/static/img/QS.svg",
//         "png":"https://deckofcardsapi.com/static/img/QS.png"
//     },
//         "value":"QUEEN","suit":"SPADES"}],"remaining":41}