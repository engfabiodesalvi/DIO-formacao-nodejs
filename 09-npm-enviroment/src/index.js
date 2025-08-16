import connectToDatabase from "./database/data.js";
import { connectToDatabaseWrong } from "./database/data.js";

async function main() {
  await connectToDatabaseWrong("sasuke", "uchina");

  await connectToDatabase(
    process.env.USERDATABASE, // process variable
    process.env.PASSWORDDATABASE // process variable
  );
}

main();
