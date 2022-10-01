//Etape 3 Créer le carre de jeu et la taille du carre du serpent
const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
//Etape 5 dessiner son corps
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const snake = new Snake(SQUARE_SIZE);
const food = new Food(SQUARE_SIZE);
//Etape 11 Direction du serpent
let currentDirection = 'down';
//Etape 12 Touuche du clavier
function touch_pad(){
document.addEventListener('keydown', function(event){
    switch (event.key){
        case 'ArrowLeft' :
            currentDirection = 'left';
            break;
        case 'ArrowRight' :
            currentDirection = 'right';
            break;
        case 'ArrowUp' :
            currentDirection = 'up';
            break;
        case 'ArrowDown' :
            currentDirection = 'down';
            break;
        default : 
            break;
    }
});
}
//Etape 1 Définir la taille du canvas
//Etape 2 Fonction startn et update pour rappeler la fonction update toutes les 3secondes

//ETape 10 Nettoyer la trainer du serpent avec clearRect

function clearScreen(){
    ctx.clearRect(0,0, GAME_SIZE, GAME_SIZE);
}


function update(){
    clearScreen();
    food.draw();// Etape 14 Nourriture
    snake.update();//Etape 8 Rajout de la fonction update pour afficher la tête du serpent
    if(snake.Alive){
        setTimeout(update, 150); // Vitesse du serpent 1er niveau 150, 2eme niveau 120, 3eme niveau 90, 60 ect......
    } 

}

function start(){
    
    touch_pad();
    update();

}

start();

