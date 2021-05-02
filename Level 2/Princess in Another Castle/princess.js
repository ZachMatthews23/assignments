
class Player {
    constructor(name, totalCoins = 0, status = "Powered Up", hasStar = false, gameActive = true){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePicked){
        this.name = namePicked
    }

    gotHit(){
        if(this.hasStar = true){
            console.log("You were saved by the star!")
        } else if (this.status = "Powered Up"){
            return this.status = "Big"
        } else if(this.status = "Big"){
            return this.status = "Small"
        } else if(this.status = "Small"){
            return this.status = "Dead"
        }

        // player.print()
    }

    powerUp(){
        if(this.status = "Powered Up"){
            console.log("You found a star!")
            return this.hasStar = true
        } else if (this.status = "Big"){
            return this.status = "Powered Up"
        } else if(this.status = "Small"){
            return this.status = "Big"
        }
        // player.print()
    }

    addCoin(){
        this.totalCoins++
        return this.totalCoins
    }

    print(){
        console.log(player)
    }

    gameActive(){
        if(this.status === "Dead"){
            this.gameActive = false
            console.log("Game Over!")
            return this.gameActive
        }
    }
}


const player = new Player("Luigi")

function randomNumber(){
    let number = Math.floor(Math.random() * 3)
    if(number === 0){
        player.gotHit()
    } else if(number === 1){
        player.powerUp()
    } else if(number === 2){
        player.addCoin()
    }
}

function runGame(player) {
    const play = setInterval(() => {
        randomNumber(player)
        if (player.gameActive === false) {
            clearInterval(play)
        } else { 
            player.print()}
    }, 3000)
};

runGame(player)
