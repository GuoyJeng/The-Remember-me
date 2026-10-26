#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <WiFiS3.h>

char ssid[] = "";
char pass[] = "";
String GOOGLE_SCRIPT_ID = "";

WiFiSSLClient client;
const char server[] = "script.google.com";

LiquidCrystal_I2C lcd(0x27, 16, 2);

const int buttonPins[] = { 2, 3, 4, 5 };
const int ledPins[] = { 10, 11, 12, 13 };
const int numLeds = 4;
const int buzzerPin = 7;
const int maxLevel = 100;

int gameSequence[maxLevel];
int currentLevel = 0;
int inputIndex = 0;
bool isGameOver = true;
String currentPlayerName = "PLAYER";

const int MAX_NAME_LEN = 8; 
const char* charset[] = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","OK"};
const int numChars = 27;

int getToneForLed(int index) {
  switch(index) {
    case 0: return 262;
    case 1: return 330;
    case 2: return 392;
    case 3: return 494;
    default: return 0;
  }
}

void setup() {
  Serial.begin(9600);
  pinMode(buzzerPin, OUTPUT);

  for (int i = 0; i < numLeds; i++) {
    pinMode(buttonPins[i], INPUT_PULLUP);
    pinMode(ledPins[i], OUTPUT);
  }

  lcd.init();
  lcd.backlight();
  randomSeed(analogRead(0));

  connectWiFi();
}

void loop() {
  if (isGameOver) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("THE REMEMBER ME");
    lcd.setCursor(0, 1);
    lcd.print(" Press to Start ");

    while (!waitForAnyButton()) {
      delay(50);
    }
    
    tone(buzzerPin, 800, 100); 

    inputName();
    startGame();
    return;
  }

  showSequence();

  if (playerTurn()) {
    currentLevel++;

    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(" >> AWESOME! << ");
    lcd.setCursor(0, 1);
    lcd.print("  Next Level: ");
    lcd.print(currentLevel + 1);
    
    tone(buzzerPin, 523, 150); delay(150);
    tone(buzzerPin, 659, 150); delay(150);
    tone(buzzerPin, 784, 250); delay(250);
    noTone(buzzerPin);
    
    delay(600);
  } else {
    gameOver();
  }
}

void connectWiFi() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("WiFi Connecting.");
  
  Serial.print("Connecting to WiFi ");
  while (WiFi.status() != WL_CONNECTED) {
    WiFi.begin(ssid, pass);
    delay(5000);
    Serial.print(".");
  }

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("WiFi Connected!");
  Serial.println("\nWiFi Connected!");
  delay(1500);
}

void inputName() {
  String tempName = "";
  int alphabetIndex = 0;
  bool isNaming = true;

  while (isNaming) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("NAME:");
    lcd.print(tempName);
    if (tempName.length() < MAX_NAME_LEN) lcd.print("_"); 

    lcd.setCursor(0, 1);
    for (int i = -2; i <= 2; i++) {
      int idx = (alphabetIndex + i) % numChars;
      if (idx < 0) idx += numChars; 
      
      String item = charset[idx];
      
      if (i == 0) {
        lcd.print("["); 
        lcd.print(item); 
        lcd.print("]");
      } else {
        lcd.print(" "); 
        lcd.print(item);
        lcd.print(" "); 
      }
    }

    int btn = getButtonPressed();
    
    if (btn == 0) {  
      alphabetIndex--;
      if (alphabetIndex < 0) alphabetIndex = numChars - 1;
      tone(buzzerPin, 1000, 50); 
    } 
    else if (btn == 1) {  
      alphabetIndex++;
      if (alphabetIndex >= numChars) alphabetIndex = 0;
      tone(buzzerPin, 1000, 50);
    } 
    else if (btn == 2) {  
      String selected = charset[alphabetIndex];
      
      if (selected == "OK") { 
        isNaming = false;
        tone(buzzerPin, 1500, 150); delay(150);
        tone(buzzerPin, 2000, 200);
      } else {
        if (tempName.length() < MAX_NAME_LEN) {
          tempName += selected;
          tone(buzzerPin, 1200, 100);
        } else {
          tone(buzzerPin, 200, 100); 
        }
      }
    } 
    else if (btn == 3) {  
      if (tempName.length() > 0) {
        tempName.remove(tempName.length() - 1);
        tone(buzzerPin, 800, 100);
      } else {
        tone(buzzerPin, 200, 100); 
      }
    }
    delay(150);
  }
  
  if (tempName.length() == 0) tempName = "PLAYER"; 
  currentPlayerName = tempName; 
}

void startGame() {
  currentLevel = 0;
  isGameOver = false;

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(" READY.. SET.. ");
  
  tone(buzzerPin, 440, 200); delay(500); 
  tone(buzzerPin, 440, 200); delay(500); 
  tone(buzzerPin, 440, 200); delay(500); 
  
  lcd.setCursor(0, 1);
  lcd.print("    GO !!!    ");
  tone(buzzerPin, 880, 400); delay(1000); 

  lcd.clear();
  lcd.print("Level: 1");
  delay(800);
}

void showSequence() {
  gameSequence[currentLevel] = random(0, numLeds);
  for (int i = 0; i <= currentLevel; i++) {
    int ledIndex = gameSequence[i];
    digitalWrite(ledPins[ledIndex], HIGH);
    
    tone(buzzerPin, getToneForLed(ledIndex));
    delay(500);
    
    digitalWrite(ledPins[ledIndex], LOW);
    noTone(buzzerPin);
    delay(250);
  }
}

bool playerTurn() {
  inputIndex = 0;
  while (inputIndex <= currentLevel) {
    int pressedButton = getButtonPressed();

    digitalWrite(ledPins[pressedButton], HIGH);
    tone(buzzerPin, getToneForLed(pressedButton));
    delay(300);
    digitalWrite(ledPins[pressedButton], LOW);
    noTone(buzzerPin);

    if (pressedButton != gameSequence[inputIndex]) return false;
    inputIndex++;
  }
  return true;
}

int getButtonPressed() {
  while (true) {
    for (int i = 0; i < numLeds; i++) {
      if (digitalRead(buttonPins[i]) == LOW) {
        while (digitalRead(buttonPins[i]) == LOW) delay(10);
        return i;
      }
    }
  }
}

bool waitForAnyButton() {
  for (int i = 0; i < numLeds; i++) {
    if (digitalRead(buttonPins[i]) == LOW) {
      while (digitalRead(buttonPins[i]) == LOW) delay(10);
      return true;
    }
  }
  return false;
}

void gameOver() {
  isGameOver = true;

  tone(buzzerPin, 300); delay(300);
  tone(buzzerPin, 250); delay(300);
  tone(buzzerPin, 200); delay(500);
  noTone(buzzerPin);

  for (int j = 0; j < 3; j++) {
    for (int i = 0; i < numLeds; i++) digitalWrite(ledPins[i], HIGH);
    delay(200);
    for (int i = 0; i < numLeds; i++) digitalWrite(ledPins[i], LOW);
    delay(200);
  }

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("OOPS! GAME OVER");
  lcd.setCursor(0, 1);
  lcd.print("Score: ");
  lcd.print(currentLevel);
  delay(2500);

  sendDataToGoogle(currentPlayerName, currentLevel);
}

void sendDataToGoogle(String name, int score) {
  lcd.clear();
  lcd.print("Uploading Score.");
  lcd.setCursor(0, 1);
  lcd.print("Please wait...");
  
  Serial.println("\n--- Sending Data ---");
  Serial.println("Name: " + name + " | Score: " + String(score));

  if (client.connect(server, 443)) {
    String url = "/macros/s/" + GOOGLE_SCRIPT_ID + "/exec?name=" + name + "&score=" + String(score);

    client.println("GET " + url + " HTTP/1.0");
    client.println("Host: script.google.com");
    client.println("Connection: close");
    client.println();

    String newHost = "";
    String newUrl = "";
    bool isRedirect = false;

    unsigned long timeout = millis();
    String line = "";

    while (client.connected() || client.available()) {
      if (client.available()) {
        char c = client.read();
        if (c == '\n') {
          String lowerLine = line;
          lowerLine.toLowerCase();
          if (lowerLine.startsWith("location:")) {
            int httpIndex = line.indexOf("https://");
            if (httpIndex != -1) {
              int hostStart = httpIndex + 8;
              int pathStart = line.indexOf("/", hostStart);
              if (pathStart != -1) {
                newHost = line.substring(hostStart, pathStart);
                newUrl = line.substring(pathStart);
                newUrl.trim();
                isRedirect = true;
                break;
              }
            }
          }
          line = "";
        } else if (c != '\r') {
          line += c;
        }
      }
      if (millis() - timeout > 10000) break;
    }
    client.stop();

    if (isRedirect && newHost.length() > 0) {
      if (client.connect(newHost.c_str(), 443)) {
        client.println("GET " + newUrl + " HTTP/1.0");
        client.println("Host: " + newHost);
        client.println("Connection: close");
        client.println();

        timeout = millis();
        while (client.connected() || client.available()) {
          if (client.available()) {
            break; 
          }
          if (millis() - timeout > 5000) break;
        }
        client.stop();

        Serial.println("Status: Success!");
        
        tone(buzzerPin, 1000, 150); delay(200); 
        tone(buzzerPin, 1200, 200);
        
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print(" SCORE SAVED! ");
        lcd.setCursor(0, 1);
        lcd.print(" Great playing! ");
      } else {
        Serial.println("Status: Redirect Failed");
        tone(buzzerPin, 200, 500);
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print(" Upload Failed! ");
      }
    } else {
      Serial.println("Status: Error (No Redirect URL)");
      tone(buzzerPin, 200, 500);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print(" Server Error! ");
    }
  } else {
    Serial.println("Status: Connection Failed");
    tone(buzzerPin, 200, 500);
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(" No Internet! ");
  }
  delay(2000);
}