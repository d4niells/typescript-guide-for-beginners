// Type alias

/*
  Type alias

  Permite criar types mais complexos combinado com os tipos primitivos 

  O | deve ser usado para unir dois tipos primitivos em um unico type
  exemplo: string | number
*/

type Uid = number | string;

function logDetails(uid: Uid, username: string) {
  console.log(`A User with ${uid} has a name as ${username}`);
}

logDetails(231, 'Daniel Oliveira');
