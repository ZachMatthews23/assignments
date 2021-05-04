
class Player {
    constructor(name, totalCoins = 0, status = "Powered Up", hasStar = false, gameActive = true){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    // setName(namePicked){
    //     this.name = namePicked
    // }

    gotHit(){
        // if(this.hasStar = true){
        //     console.log("You were saved by the star!")
        if (this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small"){
            this.status = "Dead"
        } 

        // if(this.status === "Dead"){
        //     this.gameActive = false
        //     if(player.gameActive === false){
        //         clearInterval(play)
        //     }
        // }
        // player.print()
    }

    powerUp(){
        if(this.status === "Powered Up"){
            // console.log("You found a star!")
            this.hasStar = true
        } else if (this.status === "Big"){
            this.status = "Powered Up"
        } else if(this.status === "Small"){
            this.status = "Big"
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

    // gameActive(){
    //     if(this.status === "Dead"){
    //         this.gameActive = false
    //         return this.gameActive
    //     } else{
    //         randomNumber()
    //     }
    // }
}


const player = new Player("Mario")

function randomNumber(){
    let number = Math.floor(Math.random() * 3)
    if(number === 0){
        player.gotHit()
        console.log("You got hit!")
    } else if(number === 1){
        player.powerUp()
        console.log("You powered up!")
    } else if(number === 2){
        player.addCoin()
        console.log("You found a coin!")
    }
}

function run() {
    const play = setInterval(() => {
        randomNumber()
        if (player.status === "Dead") {
            clearInterval(play)
            player.print()
            console.log("You died, game over!")
        } else { 
            player.print()}
    }, 2000)
};

run(player)

