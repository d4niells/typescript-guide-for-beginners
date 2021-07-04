/*
  Generics types

  Os tipos genericos permitem ter uma flexibilidade maior para que possamos 
  criar mótodos mais genericos com diferente tipos e retornos para serem reaproveitados 
  no código.
*/

/*
  Name pattern for the generics types

  S => usage for State
  T => usage for Type
  K => usage for Key
  V => usage for Value
  E => usage for Element
*/

/*
  S extends NumberOrString está sendo usado para restrigir os tipos do tipo generico 
  para somente string | number
*/

/*
  Na expressão S extends NumberOrString = string o = string está sendo usando para
  definir um tipo default caso não seja passado nenhum tipo
*/

type NumberOrString = string | number;

function useState<S extends NumberOrString = string>() {
  let state: S;

  const getState = (): S => {
    return state;
  };

  const setState = (newState: S): S => {
    state = newState;
  };

  return { getState, setState };
}

const newState = useState<string>();

newState.setState('');
