enum Choice {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors"
}

class Game {
    private rounds: number;
    private currentRound: number;
    private userScore: number;
    private computerScore: number;

    constructor(rounds: number) {
        this.rounds = rounds;
        this.currentRound = 0;
        this.userScore = 0;
        this.computerScore = 0;
    }

    public playRound(userChoice: Choice): string {
        const computerChoice = this.getComputerChoice();
        const result = this.determineWinner(userChoice, computerChoice);
        this.updateScore(result);
        this.currentRound++;
        return `Runde ${this.currentRound}: Du wählst ${userChoice}, Computer wählt ${computerChoice}. ${result}`;
    }

    private getComputerChoice(): Choice {
        const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    private determineWinner(userChoice: Choice, computerChoice: Choice): string {
        if (userChoice === computerChoice) {
            return "Unentschieden!";
        }
        if (
            (userChoice === Choice.Rock && computerChoice === Choice.Scissors) ||
            (userChoice === Choice.Scissors && computerChoice === Choice.Paper) ||
            (userChoice === Choice.Paper && computerChoice === Choice.Rock)
        ) {
            this.userScore++;
            return "Du gewinnst!";
        } else {
            this.computerScore++;
            return "Computer gewinnt!";
        }
    }

    private updateScore(result: string): void {
        const scoreDisplay = document.getElementById("score");
        if (scoreDisplay) {
            scoreDisplay.innerHTML = `Punktestand - Du: ${this.userScore}, Computer: ${this.computerScore}`;
        }
    }

    public isGameOver(): boolean {
        return this.currentRound >= this.rounds;
    }

    public getFinalResult(): string {
        if (this.userScore > this.computerScore) {
            return "Du hast das Spiel gewonnen!";
        } else if (this.userScore < this.computerScore) {
            return "Der Computer hat das Spiel gewonnen!";
        } else {
            return "Das Spiel endet unentschieden!";
        }
    }
}

let game: Game;

document.getElementById("startGame")?.addEventListener("click", () => {
    const roundsInput = document.getElementById("rounds") as HTMLInputElement;
    const rounds = parseInt(roundsInput.value);
    game = new Game(rounds);
    document.getElementById("gameArea")!.style.display = "block";
    document.getElementById("startGame")!.style.display = "none";
});

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice") as Choice;
        const result = game.playRound(userChoice);
        document.getElementById("result")!.innerText = result;

        if (game.isGameOver()) {
            const finalResult = game.getFinalResult();
            document.getElementById("result")!.innerText += ` ${finalResult}`;
            document.getElementById("restartGame")!.style.display = "block";
            document.querySelectorAll(".choice").forEach(b => b.setAttribute("disabled", "true"));
        }
    });
});

document.getElementById("restartGame")?.addEventListener("click", () => {
    location.reload();
});