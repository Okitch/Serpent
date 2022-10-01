//Etape 4 definir la taille de la tete du serpent avec l'ajout de bloc a son corps
class Snake {
    constructor(){
        this.x=0;
        this.y=0;
        this.blockSize = SQUARE_SIZE;
        //Etape 6 Rajout des blocs
        this.blocks = [];
        this.addblock(this.x, this.y);
        //console.log(this.blocks);
        this.Alive = true;
    }
    addblock(x, y){
        const block = new Block(x,y, this.blockSize);
        this.blocks.push(block);
    }
    //Etape 11 Direction du serpent
    moveHead(direction){
         //Etape 9 faire bouger le serpent
        const head = this.blocks[0];
        head.oldx = head.x; // Etape 16 on sauvegarde la position de la tete
        head.oldy = head.y; // Etape 16 on sauvegarde la position de la tete
        switch (currentDirection){
            case 'left' : 
            head.x -= 1;
            break;
            case 'right' :
                head.x +=1;
                break;
            case 'up' :
                head.y -=1;
                break;
            case 'down' :
                head.y +=1;
                default : 
                break;
        }
        head.hors_map();//Appelé après avoir bouger la tete head.hors_map();

    }
    calcNewBlockPosition(){
        let x = this.blocks[this.blocks.length-1].x;
        let y = this.blocks[this.blocks.length-1].y;
        
        switch (currentDirection){
            case 'left' : 
            x += 1;
            break;
            case 'right' :
                x -=1;
                break;
            case 'up' :
                y +=1;
                break;
            case 'down' :
                y -=1;
                default : 
                break;    
        }
        return {x, y};
    }
    //Etape 15 faire manger le serpent
    //Etape 16 faire grandir le serpent
    eat(){
        const head = this.blocks[0];
        if(head.x === food.x && head.y === food.y){
            food.setRandomPosition();
            const x = this.calcNewBlockPosition().x;
            const y = this.calcNewBlockPosition().y;
            //console.log('miam');
            this.addblock(x, y);
        }
    }
    blockTouchDead(block){
        const head = this.blocks[0];
        const headX = head.x;
        const headY = head.y;
        
        return(headX === block.x && headY === block.y);
    }
//Etape 7 Rajout de la fonction draw pour afficher la tête du serpent
    update(){
        this.moveHead();
        this.eat();
        for(const [index, block] of this.blocks.entries()){
            if(index > 0){
                const oldx = this.blocks[index-1].oldx; // Etape 16
                const oldy = this.blocks[index-1].oldy;
                block.setPosition(oldx, oldy);
                if(this.blockTouchDead(block)){
                    this.Alive = false;
                }
            }
           
            block.draw();
        }
    }
}