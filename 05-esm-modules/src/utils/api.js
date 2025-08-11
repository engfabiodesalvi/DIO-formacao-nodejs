// export directly
// ESM standard

export const key = {
  value: "2313jklfds",
  permission: "admin",
};

export const getDataFromApi = () => {
  console.log("dados da api sendo buscados...");
};

// or

// export through objects

const key2 = {
  value: "2313jklfds",
  permission: "admin",
};

async function getDataFromApi2() {
  console.log("desconectando do banco de dados")  ;
}

export {key2, getDataFromApi2};