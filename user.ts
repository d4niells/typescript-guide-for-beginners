/*
  Type alias - Intersection
*/

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string; // ? define o tipo como opcional
};

const account: AccountInfo = {
  id: 1,
  name: 'Danie Oliveira',
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: 'Daniel0liver',
  level: 10,
};

// & corresponde a interseção entre dois tipos, ou melhor, o merge de dois tipos
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 1,
  name: 'Daniel Oliveira',
  nickname: 'daniel0liver',
  level: 10,
  email: 'danieloliver.dev@gmail.com',
};
