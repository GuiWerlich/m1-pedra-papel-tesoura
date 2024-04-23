function playRockPaperScissor(player1, player2) {

    if (player1 === "Pedra") {
        if (player2 === "Tesoura") {
            return "Jogador 1 venceu!"
        } else if (player2 === "Papel") {
            return "Jogador 2 venceu!"
        } else if (player2 === "Pedra") {
            return "Empate!"
        }
    } else if (player1 === "Papel") {
        if (player2 === "Pedra") {
            return "Jogador 1 venceu!"
        } else if (player2 === "Tesoura") {
            return "Jogador 2 venceu!"
        } else if (player2 === "Papel") {
            return "Empate!"
        }
    } else if (player1 === "Tesoura") {
        if (player2 === "Papel") {
            return "Jogador 1 venceu!"
        } else if (player2 === "Pedra") {
            return "Jogador 2 venceu!"
        } else if (player2 === "Tesoura") {
            return "Empate!"
        }
    } 
}

const resultado = playRockPaperScissor("Pedra", "Papel")
console.log(resultado)
