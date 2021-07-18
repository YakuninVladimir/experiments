class Pipe {
    constructor(speed, width, height) {
        this._width = width;
        this._height = height;
        this._speed = speed;
        this._X = this._width;
        this._Y = this.PipeHeight();

    }

    _pipeWidth = 50;

    PipeHeight () {
        return Math.floor(Math.random() * this._height);
    }

    drawPipe() {
        let ctx = document.querySelector('canvas').getContext('2d');
        ctx.fillStyle = 'green';
        ctx.fillRect(this._X, this._Y, 100, 100);
    }

    move() {
        this._X -= this._speed;
    }
}