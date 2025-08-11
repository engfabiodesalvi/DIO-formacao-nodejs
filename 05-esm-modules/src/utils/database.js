const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};

async function connectToDatabase(dataName) {
  // lógica de conexão
  console.log(`conectado ao banco  ${dataName}`);
}

async function disconnectDatabase() {
  console.log("desconectando do banco de dados");
}

// EcmaScript Modules (ESM)

//export for two or more things
//export { disconnectDatabase, databaseType };
//export { connectToDatabase, disconnectDatabase, databaseType };
export { disconnectDatabase, databaseType };

// export default for one thing
export default connectToDatabase;

// commonjs (CJS)
// module.exports = {
//   connectToDatabase,
//   disconnectDatabase
// }
