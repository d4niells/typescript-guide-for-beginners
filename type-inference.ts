/*
  Type Inference

  Em alguns casos o typescript é inteligente o bastante para inferir os tipos de forma implicita 
*/
let message1 = 'defined messsage';

// event: MouseEvent
window.addEventListener('click', (event) => console.log(event.target));

// getAge returns type number
const getAge = () => {
  return 20;
};
