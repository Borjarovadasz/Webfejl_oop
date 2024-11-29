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




const gomszab = new Player("gomszab")

console.log(gomszab)

gomszab.play()
console.log(gomszab.getTierlevel())
