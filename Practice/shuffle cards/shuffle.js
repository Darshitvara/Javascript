
document.getElementById("shuffleButton").onclick = function(){
    let  cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

    let lengthOfCards = cards.length
    let random_index = 0
    let current_index = lengthOfCards
    let temp = 0
    let idname = ""

    while(current_index != 0){
        random_index = Math.floor(Math.random()*lengthOfCards)
        current_index-=1

        temp = cards[current_index]
        cards[current_index] = cards[random_index]
        cards[random_index] = temp
    }
    // console.log(lengthOfCards)
    for(let i = 0;i<lengthOfCards;i+=1){
        idname= 'card' + i
        document.getElementById(idname).innerHTML = cards[i]
    }
}
document.getElementById("resetButton").onclick = function(){
    let  cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    let lengthOfCards = cards.length
    let idname = ''
    for(let i= 0;i<lengthOfCards;i+=1){
        idname = "card" + i
        document.getElementById(idname).innerHTML = cards[i]
    }
}