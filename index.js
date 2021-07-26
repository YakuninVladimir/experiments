let handler = (event) => {
    if (event.code = 'Backspace'){
        scene.jump(birdSpeed);
    }
}

let scene = new Scene(1500, 1000);

scene.createCanvas();
scene.generatePipe();

let flips = 0;

const delayBetweenPipes = 300;
const birdSpeed = 3;

let frame = () => {
    scene.UpdateScene();
    if (scene.lose){
        document.removeEventListener('keydown', handler);
    }

    if (flips == delayBetweenPipes){
        scene.generatePipe();
        flips = -1;
        scene.listOfPipes.forEach((item, index,array) => {
            if (item.X < 0) scene.listOfPipes.splice(index, 1);
        });
    }
    flips += 1;
}



document.addEventListener('keydown', handler);


setInterval(frame, 0);
