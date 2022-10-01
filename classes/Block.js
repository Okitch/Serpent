//Etape 5 dessiner son corps
class Block{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.oldx = x;//Etape 16
        this.oldy = y;//Etape 16
        this.size = size;
    }
    //Etape 13 Gerer le hors map
    hors_map(){
        const maxSize = GAME_SIZE / this.size;
        if(this.x < 0){
           this.x = maxSize;
        }else if(this.x > maxSize){
            this.x = 0;
        }
        if(this.y < 0){
            this.y= maxSize;
         }else if(this.y > maxSize){
             this.y = 0;
         }
    }
    setPosition(x, y){ // Etape 16
        this.oldx = this.x;
        this.oldy = this.y;
        this.x=x;
        this.y=y;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}