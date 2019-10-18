A node project to interact with firebase database.

Current functionalities.

* Populate firebase with fake data.
* Retrive all data created from firebase.

USAGE

#### FIREBASE SETUPS

1. Create firebase project from firebase console (accept all defaults).

2. Create new "firestRealtime Database" by scrolling down to Realtime Database and clicking on `create database` button.

3. Setup the rules for your "Realtime Database" (start in test mode) would be fine for tests purposes.

4. Goto project settings and click on `service account`

5. Copy the `Admin SDK configuration snippet` and past it in `config/storage.ts` file.
The `databaseurl` value can be transfered to a `.env` file.

6. Generate project credentials by clicking on `Generate key`, which is located on same interface. 

This would generate and download a `.json` file with all your project credentials. 

You can use this file directly or use .env file for security.

Note: The current project setup uses `.env` to store details all project credentials.

A sample `.env` file can be seen in `./examplenv` file, located at the root of the project.

#### LOCAL SETUPS

* Clone repository

* Install project dependencies ( `npm install` )

* Create .env file with the credential generated for ( `Optional` )

* Populate the `movies_url` array inside `./src/components/admin/controller (line: 7)`

* Change the value for `randomIndex()` on `poster_url` property of `data_template (line: 41)` to suit your `movies_url`.

* Other variables can be changed as desired.

* Run server `npm run start`

* Make a `get` request to `http://locahost:3000/populate` via browser or any other means e.g using `curl` command, `postman` e.t.c. for populating your firebase database.


* Make a `get` request to `http://localhost:3000/getmovies` to view all data currently stored in firebase.


Note:
* The Number of data sent to firebase can be altered by specifying the maximum value of `i` in the `for` loop on  `line: 40` of `./src/components/admin/controller.ts`
