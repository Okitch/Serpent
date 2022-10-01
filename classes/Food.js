//Etape 14 Nourriture
class Food{
    constructor(){
       this.size = SQUARE_SIZE;
       this.setRandomPosition();
    }
    setRandomPosition(){
        const maxSize = ((GAME_SIZE / this.size) - 1);
        this.x = Math.round(Math.random() * GAME_SIZE % maxSize); // Apparation aleatoire de la nourriture
        this.y = Math.round(Math.random() * GAME_SIZE % maxSize);
        //console.log(this.x, this.y);
    }
    draw(){
        ctx.fillStyle = 'lime';
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
    
}