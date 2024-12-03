// function Player(nickname) {
//     this.nickname = nickname
//     this.playedmatch = 0
// }

// Player.prototype.play = function() {
//     this.playedmatch++
//     console.log(this.nickname, this.playedmatch);
//     }
    
// Player.prototype.getTierlevel = function() {
//     if(this.playedmatch <= 3)
//     {
//         return 'a' 
//     }else if(this.playedmatch >3 && this.playedmatchs <=6) {
//         return 'b'
//     }else if(this.playedmatch > 6) {
//         return 'c'
//     }
    

// }

class Player {
    constructor(nickname) {
        this.nickname = nickname
        this.playedmatch = 0;
    }
    play() {
        this.playedmatch++;
       console.log(this.nickname, this.playedmatch);
       
    }
    
getTierlevel() {
    if(this.playedmatch <= 3)
         {
          return 'a' 
         }else if(this.playedmatch >3 && this.playedmatchs <=6) {
             return 'b'
            }else if(this.playedmatch > 6) {
              return 'c'
           }
}
}

function printTierLevel(nickname, getTierlevel)
{
    console.log(nickname + " játékos " + getTierlevel + " ligában van." )
}


printTierLevel("János", "Arany")
printTierLevel("Alszik", "Kuka")




const gomszab = new Player("gomszab")

console.log(gomszab)

gomszab.play()
console.log(gomszab.getTierlevel())

class Ember {
    constructor(nev = "Géza") {
        this.nev = nev;
    }

    MiaNeve() {
        return `Név: ${this.nev}`;
    }
}


class Diak extends Ember {
    constructor(nev, sulko) {
        super(nev)
        this.sulko = sulko
    }

    HovaJar() {
        return `Iskola: ${this.sulko}`;
    }
}


const tancsi1 = new Diak("Alszik", "Bolyia");
console.log(tancsi1.MiaNeve())
console.log(tancsi1.HovaJar())