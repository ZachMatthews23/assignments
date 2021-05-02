let playerStatus = ["Powered Up", "Big", "Small", "Dead"]

gameActive = true

class Player {
    constructor(name, totalCoins = 0, status = playerStatus[0], hasStar = false){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked){
        this.name = namePicked
    }

    gotHit(){
        if(this.hasStar = true){
            this.hasStar = false
            console.log("You used your star!")
        } else {
            this.status = playerStatus[1]
        }
    }

    powerUp(){
        if(this.status === "Powered Up"){
            this.hasStar = true
            console.log("You gained a star!")
        } else {
            this.status = playerStatus[0]
        }
    }

    addCoin(){
        this.totalCoins++
    }

    print(name, totalCoins, status, hasStar){
        console.log(player)
    }

    
}

const player = new Player("Luigi")

const number = function(){
    Math.floor(Math.random() * 3)
    if(number === 0){
        player.gotHit()
    } else if(number === 1){
        player.powerUp()
    } else if(number === 2){
        player.addCoin()
    }

    player.print()
}

setInterval(number, 1000)