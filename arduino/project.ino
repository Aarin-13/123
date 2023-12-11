#include <Servo.h>
//#include <NewPing.h>

Servo myservo;
int pos = 0;
int prevPos = 0;
int counter = 0;
int prevCounter = 0;
const int pingPin = 7;
//NewPing ultra_left(TRIGGERL, ECHOL, MAX_DISTANCE);
//NewPing ultra_bottom_left(TRIGGERBL, ECHOBL, MAX_DISTANCE);
//NewPing ultra_top(TRIGGERT, ECHOT, MAX_DISTANCE);
//NewPing ultra_bottom_right(TRIGGERBR, ECHOBR, MAX_DISTANCE);
//NewPing ultra_right(TRIGGERR, ECHOR, MAX_DISTANCE); // initializes the pings from the ultrasonic sensors

void setup() {
  myservo.attach(9); // attaches the pins of the servos to the servo object

  Serial.begin(9600); // object to transmit the ultrasonic values back to computer
  
  

  

}



void prepGrab() { // prepare to grab the payload
  myservo.write(180); // the jaw opens
}

void grab() {
  myservo.write(0);
}


void loop() {
 // unsigned int distanceL = ultra_left.ping_cm();
  //unsigned int distanceBL = ultra_bottom_left.ping_cm();
  //unsigned int distanceT = ultra_top.ping_cm();
 // unsigned int distanceBR = ultra_bottom_right.ping_cm();
 // unsigned int distanceR = ultra_right.ping_cm(); // grabs the distance from the ultrasound
 
 // while (counter>0) {
 //   prepGrab();
 //   delay(1000);
 //   grab();
 //   delay(1000);
 //   counter--;
 // }
  long duration, cm;
  pinMode(pingPin, OUTPUT);
  digitalWrite(pingPin, LOW);
  delayMicroseconds(2);
  digitalWrite(pingPin, HIGH);
  delayMicroseconds(5);
  digitalWrite(pingPin, LOW);

  pinMode(pingPin, INPUT);
  duration = pulseIn(pingPin, HIGH);
  cm = microsecondsToCentimeters(duration);

  Serial.print(cm);
  Serial.print("cm");
  Serial.println();

  
  delay(15);
  
  if (cm <= 16) {
        if (counter>prevCounter) {
            if (prevPos==0) {
                myservo.write(180);
                prevPos = 180;
            } else if (prevPos==180) {
                myservo.write(0);
                prevPos = 0;
            }
            prevCounter=counter;
        }
    } else if (cm > 16) {
        counter++;
    }
        /*if (prevPos==0) {
            myservo.write(180);
            prevPos = 180;
        } else if (prevPos==180) {
            myservo.write(0);
            prevPos = 0;
        }*/
        /***if (counter%2==0) {
          myservo.write(180);
          counter+=0.5;
        } else if (counter%2==1) {
          myservo.write(0);
          counter+=0.5;
        }
  } else {
    counter+=0.5;
  }***/
    delay(15);
}// plan use prep grab and say if the degree is 0 change to 180 if degree is 180 change to 0 and then find a way to make the if command detect a chance in distance and FLIP
// so when i move my hand in front of it and leave - it rotates only one time - just like walking through a door, the sensor detects a close reading then a far reading, but it should flick the lever only once

long microsecondsToCentimeters(long microseconds) {
  // The speed of sound is 340 m/s or 29 microseconds per centimeter.
  // The ping travels out and back, so to find the distance of the object we
  // take half of the distance travelled.
  return microseconds / 29 / 2;
}
