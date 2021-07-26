class Pipe extends Scene{

    constructor(width, height) {
        super(width, height);
        this.X = this.width;
        this.Y = this.PipeCenterHeight();
    }

    pipeColor = 'green';
    space = 100;
    pipeHeight = this.height;
    pipeWidth = 100;


    PipeCenterHeight () {
        let border = 200;
        let maxHeight = this.height - border;
        let minHeight = border;
        return Math.floor(minHeight + Math.random() * (maxHeight - minHeight));
    }

    drawPipe() {
        let ctx = document.querySelector('canvas').getContext('2d');
        ctx.fillStyle = this.pipeColor;
        ctx.fillRect(this.X, this.Y + this.space, this.pipeWidth, this.pipeHeight);
        ctx.fillRect(this.X, this.Y - this.space - this.pipeHeight, this.pipeWidth, this.pipeHeight);

    }

    move() {
        this.X -= this.speed;
    }
}