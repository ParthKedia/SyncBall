class Form{
    constructor(){
        this.input = createInput("name"); 
        this.button = createButton("play");
        this.reset = createButton("reset");
        this.greeting = createElement("h1");
    }

display(){


var title = createElement("h1");
title.html("Project Carz");
title.position(displayWidth/2-100,-3);

    
    this.input.position(displayWidth/2-100,displayHeight/2-200);
   
    this.button.position(displayWidth/2-170,displayHeight/2-200);

    this.reset.position(100,100);


    


    this.button.mousePressed(()=>{ 

        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        
        playerCount +=1 ;
        player.index = playerCount;



        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Welcome "+ player.name);
        this.greeting.position(500,300);
    

    });

    this.reset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0); 
    })
}

hide(){
    this.input.hide();
    this.button.hide();
    
    this.greeting.hide();
}

}