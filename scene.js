class Scene {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }

    isBirdInPipe = false;
    score = 0;
    speed = 1;
    G = 0.03;
    listOfPipes = [];
    lose = false;


    createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.style.background = 'lightblue';
        document.body.prepend(canvas);
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.bird = new Bird(1500, 1000);
    }

    drawScore () {
        this.context.fillStyle = 'gray';
        this.context.font = 'bold 30px sans-serif';
        this.context.fillText(`score: ${this.score}`, 1300, 40);

    }

    updateScore () {
        if (this.bird.isInPipe()) {
            if (!this.isBirdInPipe) {
                this.score++;
                this.isBirdInPipe = true;
            }
        }else {
            this.isBirdInPipe = false;
        }

    }

    gameOver () {
        this.speed = 0;
        this.G = 0;
        this.context.fillStyle = 'red';
        this.context.font = 'bold 30px sans-serif';
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText('GAME OVER ЁПТА', this.width / 2, this.height / 2);
        this.lose = true;
        this.listOfPipes.forEach((item) => {
            item.speed = 0;
        });
    }

    jump (newBirdSpeed) {
        this.bird.changeSpeed = newBirdSpeed;
    }

    clean () {
        this.context.fillStyle = 'lightblue';
        this.context.fillRect(0, 0, this.width, this.height);
    }

    generatePipe() {
        this.listOfPipes.push(new Pipe( this.width, 1000));
    }


    UpdateScene () {
        this.bird.newListOfPipes = this.listOfPipes;
        this.clean();
        this.listOfPipes.forEach((item, index, array) => {
            item.move();
            item.drawPipe();
        });
        this.bird.moveBird();
        this.bird.drawBird();
        this.drawScore();
        this.updateScore();
        this.bird.Hitting();

    }
}