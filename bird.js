class Bird extends Scene{
    constructor(width, height) {
        super(width, height);
    }

    birdX = 100;
    birdHeight = 500;
    birdYSpeed = 0;
    context = document.querySelector('canvas').getContext('2d');


    set changeSpeed (newSpeed) {
        this.birdYSpeed = -newSpeed;
    }

    set newListOfPipes (list) {
        this.listOfPipes = list;
    }

    Hitting () {
        this.listOfPipes.forEach((item) => {
            if(item.X < this.birdX && item.X + item.pipeWidth > this.birdX &&
                (this.birdHeight >= item.Y + item.space || this.birdHeight <= item.Y - item.space)){
                item.pipeColor = 'red';
                this.gameOver();
                this.birdYSpeed = 0;
            }
        });

    }

    isInPipe () {
        let isThere = false;

        this.listOfPipes.forEach((item) => {
            if(item.X < this.birdX && item.X + item.pipeWidth > this.birdX){

                isThere = true;
            }
        });
        return isThere;
    }

    drawAngle() {
        let angle = Math.atan(this.birdYSpeed / this.speed);
        let length = 20;
        let ctx = document.querySelector('canvas').getContext('2d');
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(this.birdX, this.birdHeight);
        ctx.lineTo(this.birdX + length * Math.cos(angle), this.birdHeight + length * Math.sin(angle));
        ctx.stroke();
    }

    drawBird () {
        let ctx = document.querySelector('canvas').getContext('2d');
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.birdX, this.birdHeight, 10, 0, Math.PI * 2, true);
        ctx.fill();
        this.drawAngle();

    }
    moveBird() {
        this.birdHeight += this.birdYSpeed;
        this.birdYSpeed += this.G;
    }




}