class Main {

    constructor() {
    }

    set width(value){
        this._width = value;
    }

    set height(value){
        this._height = value;
    }

    listOfPrevPoints = [];
    listOfRanges = [];

    SetRanges(){
        for (let j = 0; j < this._height; j++){
            let layer = [];
            for (let i = 0; i < this._width; i++){
                layer.push(10000000);
            }
            this.listOfRanges.push(layer);
        }
    }

    createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = this._width;
        canvas.height = this._height;
        //canvas.style.background = 'lightgray';
        document.body.prepend(canvas);
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.SetRanges();

    }

    prepareCanvas(){
        this.context.fillStyle = 'rgb(255, 254, 255)';
        this.context.fillRect(0, 0, this._width, this._height);
    }

    appendPoint() {
        let _point = new Point(this.listOfPrevPoints, this._width, this._height, this.listOfRanges, 0, 0);
        _point.setXY();
        _point.drawPoint();
        _point.resetColors();
        this.listOfPrevPoints = _point.listOfPreviousPoints;
    }

    appendPointOnClick() {
        this.canvas.onclick = (event) => {
            let _point = new Point(this.listOfPrevPoints, this._width, this._height, this.listOfRanges, event.pageX, event.pageY);
            _point.setPoint();
            _point.drawPoint();
            _point.resetColors();
            this.listOfPrevPoints = _point.listOfPreviousPoints;
        }
    }
}