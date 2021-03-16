class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null; 
    }

    update() {
        var playerIndex = "players/player" + this.index; 
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance

        });
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        }) 
    }

    updateCount(count){
        database.ref('/').update({
            playerCount :count
        });

    }

    static playerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",function(data){
        allPlayers = data.val();
        })

    }
}