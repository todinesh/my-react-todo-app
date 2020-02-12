npm install -g json-server
or
npm install json-server --save-dev

#Run json server from command line, using any one option
json-server --watch ./src/db/db.json --port 3001
or
cd ./src/db
node server.js

#Run the app, using another window
npm start

#App URL
http://localhost:3005/

#DB URL
http://localhost:3001/