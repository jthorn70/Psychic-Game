var computerChoices = [" a"," b"," c"," d"," e"," f"," g"," h"," i"," j"," k"," l"," m"," n"," o"," p"," q"," r"," s"," t"," u"," v"," w"," x"," y"," z"]
var wins = 0
var losses = 0
var chances = 5
var guesses = []


var computerText = document.getElementById("computer")
var userText = document.getElementById("user")
var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var guessesText = document.getElementById("guesses")



document.onkeyup = function()
{if (chances > 0){
    var userGuess = event.key
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    
    if (userGuess === computerGuess){
        wins++
        chances = 5
        guesses.push(userGuess)
    } else{
        chances--
        guesses.push(userGuess)
        
    }




    computerText.textContent = "Computer has chosen " +computerGuess + "."
    userText.textContent = "User has chosen " + userGuess + "."
    winsText.textContent = "wins: " + wins
    lossesText.textContent = "losses: " + losses
    guessesText.textContent = "Letters Guessed: " + guesses
    
} else{
    losses++
    chances = 5
    guesses = []
}
}

