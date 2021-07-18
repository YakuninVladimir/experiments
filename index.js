let scene = new Scene(1000, 1000);
scene.createCanvas();
scene.generatePipe();
scene.generatePipe();
scene.generatePipe();
scene.generatePipe();
scene.generatePipe();
setInterval(scene.updateScene, 20);