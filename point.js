class Point {

    constructor(listOfPrevPoints, width, height, listOfRanges) {
        this.listOfPrevPoints = listOfPrevPoints;
        this.height = height;
        this.width = width;
        this.listOfRanges = listOfRanges;

    }
    canvas = document.querySelector('canvas')
    context = this.canvas.getContext('2d');
    radius = 4;

    chooseColor (){
        return Math.floor(Math.random() * 255 + 1);
    }

    setXY () {
        let x, y;
        do {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
        } while (y * this.width + x in this.listOfPrevPoints);
        this.listOfPrevPoints.push(y * this.width + x);
        this.x = x;
        this.y = y;
        this.fieldColor = [this.chooseColor(), this.chooseColor(), this.chooseColor()];
    }

    get listOfPreviousPoints () {
        return this.listOfPrevPoints;
    }

    drawPoint() {
         let ctx = this.context;
         ctx.fillStyle = 'rgb(0, 0, 0)';
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
         ctx.fill();
    }

    isNotBlack(pixels, currentPixel){
        if (pixels[currentPixel] + pixels[currentPixel + 1] + pixels[currentPixel + 2] === 0){
            return false;
        }
        return true;
    }

    resetColors() {
        let img = this.context.getImageData(0, 0, this.width, this.height);
        let pixels = img.data;
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                let currentRange = Math.sqrt(Math.pow(this.x - j, 2) + Math.pow(this.y - i, 2));
                let currentPixel = (i * this.width + j) * 4;

                if (this.listOfRanges[i][j] >= currentRange && this.isNotBlack(pixels, currentPixel)){
                    pixels[currentPixel] = this.fieldColor[0];
                    pixels[currentPixel + 1] = this.fieldColor[1];
                    pixels[currentPixel + 2] = this.fieldColor[2];
                    pixels[currentPixel + 3] = 255;
                    this.listOfRanges[i][j] = currentRange;
                }
            }
        }
        this.context.putImageData(img, 0, 0);
    }
}