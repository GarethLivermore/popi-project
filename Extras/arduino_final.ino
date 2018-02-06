#include <Wire.h>
#include <dht.h>

#define DHT11PIN 7
dht1wire DHT(DHT11PIN, dht::DHT11);

int temp;
int hum;
String value;

void setup() {
  // set up the LCD's number of columns and rows:
  // Print a message to the LCD.
  Serial.begin(9600);

}

void loop() {
 
 
 


  DHT.read();
  temp = DHT.getTemperature()/10;
  hum = DHT.getHumidity()/10;
  value =  hum + "," + temp;
  Serial.print(temp);
  Serial.print(",");
  Serial.print(hum);
  Serial.println();
  
  
  delay(2000);  //delay 2seconds
}


