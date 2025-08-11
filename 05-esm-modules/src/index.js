//(ESM modules)
//import * as database from "./utils/database.js";
//(CJS modules)
//const database = require("./utils/database.js");

// import for default thing
import connectToDatabase from "./utils/database.js";
// import for non-default thing
// import { connectToDatabase } from "./utils/database.js";

// destructuring
import { disconnectDatabase, databaseType } from "./utils/database.js";
// import all functions from a module
import * as api from "./utils/api.js";

//database.connectToDatabase("my-database");
//database.connectToDatabase("my-database");

connectToDatabase("my-database");



api.getDataFromApi();
api.getDataFromApi2();
disconnectDatabase();
