class Main {

    constructor() {
    }

    width = 1000;
    height = 1000;

    listOfPrevPoints = [];
    listOfRanges = [];

    SetRanges(){
        for (let j = 0; j < this.height; j++){
            let layer = [];
            for (let i = 0; i < this.width; i++){
                layer.push(10000000);
            }
            this.listOfRanges.push(layer);
        }
    }

    createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        //canvas.style.background = 'lightgray';
        document.body.prepend(canvas);
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.SetRanges();

    }

    prepareCanvas(){
        this.context.fillStyle = 'rgb(255, 254, 255)';
        this.context.fillRect(0, 0, this.width, this.height);
    }

    appendPoint() {
        let _point = new Point(this.listOfPrevPoints, this.width, this.height, this.listOfRanges);
        _point.setXY();
        _point.drawPoint();
        _point.resetColors();
        this.listOfPrevPoints = _point.listOfPreviousPoints;
    }


}