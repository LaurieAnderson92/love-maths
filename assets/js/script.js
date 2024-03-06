// wait for the Document Object Model (DOM) to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            } else{
                let gameType = this.getAttribute("data-type")
                alert(`You clicked ${gameType}`)
            }
        })
    }
})

function runGame(){

}

function checkAnswer(params) {
    
}

function calculateCorrectAnswer(params) {
    
}

function incrementScore(params) {
    
}

function incrementWrongAwnser(params) {
    
}

function displayAdditionQuestion(params) {
    
}

function displaySubtractQuestion(params) {
    
}

function displayMultiplyQuestion(params) {
    
}

// space for division question