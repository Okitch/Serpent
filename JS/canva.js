const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

(function draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(50,50,100,100);
})();

(function drawCircle(){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(100,100,50,0,2*Math.PI);
    ctx.fill();
})();
