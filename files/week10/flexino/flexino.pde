import processing.serial.*;

Serial myPort; // The serial port is opened


void setup () {
size(800, 800); // window size

// List all the available serial ports
println(Serial.list());

String portName = Serial.list()[0];
myPort = new Serial(this, portName, 9600);

background(10,4,64);

}


void draw () {
}

void serialEvent (Serial myPort) {
int inByte = myPort.read();
println(inByte);

float yPos = height - inByte;

float map = map(inByte,37,200,10,width-200);

noFill();
stroke(255);
strokeWeight(5);
ellipse(width/2,width/2,map,map);

background(10,4,64);

}

