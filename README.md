Starting the app
- open a node window
- cd into the applications directory
- run command: npm install (Only on the first time launching the application)
- run command: npm start

Starting the server
- open the project in Webstorm and run the file: server/handle-a-websocket-client-connection.js

Testing the app
- open a node window
- cd into the applications directory
- run npm test
- 4 tests should run and pass including 1 snapshot test
- if any tests fail please analyse any errors and react accordingly
- the expected output from running the tests can been viewed in the 'ExpectedTestOutput.PNG' file

Styling and alert functionality
The primary purpose of the styling of this app is to be clean and accesible.
If any of the sensors read a light, noise or air quality level outside of the acceptable measurement range, the measurements title will change from blue to red.

Setting the maximum acceptable measurement
The ability to input the maximum acceptable measurement has been added in order to prevent unneccessary alerts when high measurement levels are ever expected and intended to be ignored.

NoteBox
A notebox feature has been added in order to make note of any unacceptable readings.
All notes will be timestamped to help with the recorded of any incidents.

Hiding and viewing categories
Each category can be collapsed and expanded.
Hiding the readings WILL NOT  prevent alerts.
This feature is not needed and can be removed if requested.

Readings
Readings occur every 5 seconds. Making these even more frequent is not advised as without automated reporting alerts may be missed when monitored.


**I have also added some resources that I used during development. These may help a new developer taking further work on this project. File: usefulResources.txt

