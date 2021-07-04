/* 
  Modified Access 

  readonly - permite ser lido e não pode ser editado mesmo dentro da classe onde foi definido
  private - so pode ser acessado no escopo da classes onde foi definido
  public - tanto pode ser lido quanto alterar fora da classes onde foi definido
  protected - so pode ser lida/alterar nas classes extendidas (extends)

*/

/*
  Classes

  abstract - não permite instanciar a classe por ser abstrata 

*/

/* 
  Constructor

  O contructor permite passar valor para a classes no momento que ela está
  sendo instanciada.
*/


class UserAccount {
  public name: string;
  protected age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} yaers old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;

  constructor(name:string, age:number, nickname: string, level: number) {
    super(name, age); // Herda os atrivutos da classes superior

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  set setLevel(level:number) {
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
  }
}

const daniel = new UserAccount('Daniel', 20);
const john = new CharAccount('John', 22, 'johnlens', 20);

john.setLevel = 4

console.log(john.getLevel)