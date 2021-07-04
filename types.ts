// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = 'foo';
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ['foo', 'bar'];

let values: Array<number | string>;
values = [1, 2, 3, 'foo'];

// tuple - um array onde sei a quantidade de items e o tipo dos items, diferente do array onde a quantidade de items é indefinido.
let title: [number, string];

// enum - conjunto de chave e valor
enum Color {
  white = '#fff',
  black = '#000',
}

// any (anything) - habilite no tsconfig o noImplicitAny para avitar esse tipo no seu código
let anything: any;
anything = 'string';
anything = 21;
anything = [2, 4, 'string', {}];

// void (vazio)
const logger = (): void => {
  console.log('foo');
};

// null | undefined
type Title = string | undefined;
type Description = string | null;

// never - nunca terá retorno
const error = (): never => {
  throw new Error('error');
};

// object
let cart: object;
cart = {
  key: 'fi',
};
