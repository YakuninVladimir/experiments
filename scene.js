class Scene {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    listOfPipes = [];

    createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = this._width;
        canvas.height = this._height;
        canvas.style.background = 'lightblue';
        document.body.prepend(canvas);
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }

    clean () {
        this.context.fillStyle = 'lightblue';
        this.context.fillRect(0, 0, this._width, this._height);
    }

    generatePipe() {
        this.listOfPipes.push(new Pipe(10, 1000, 1000));
        console.log(this.listOfPipes);
    }

    updateScene () {
        scene.clean();
        scene.listOfPipes.forEach((item, index, array) => {
            item.move();
            item.drawPipe();
        });

    }

}