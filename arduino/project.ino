int pos = 0;
int prevPos = 0;
int counter = 0;
int prevCounter = 0;
void loop {
    
    ........
    
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
    delay(100);

    long microsecondsToCentimeter(yaydadaasefajsepfiajspefij)....



}
