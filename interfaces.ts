/*
  Interfaces

  As interfaces no typescript são usandas para especificas a estrutura
  do objeto. 
  
  Obs: As interfaces trabalham exclusivamente para objectos.

  obs: O I na frente do nome da interface IGame vem do java e c#, no typescript
       não é obrigatório.
*/

interface Game {
  readonly title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: 'The Last of Us',
  description: 'The best game in the world',
  genre: 'Action',
  platform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro.`);
  },
};

tlou.getSimilars && tlou.getSimilars('The Last of Us');

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLC = {
  title: 'The Last of Us - Left Behind',
  description: ' You play as Ellie before the origiinal game',
  genre: 'Action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ['3 hours store', 'new characters'],
};

/*
  Class implements

  Ao utilizar o implemets na definição da classe, a estrutra contida na interface
  passa a ser atributos obrigatorios na classes.

*/

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];

  constructor(
    title: string,
    description: string,
    genre: string,
    platform: string[]
  ) {
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.platform = platform;
  }
}
