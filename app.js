let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");


function adicionarNumero(numero1, numero2) {
   if (typeof numero1 === 'number' && typeof numero2 === 'number') {
      return numero1 + numero2
   } else
      return number(numero1) + number(numero2)
}
button.addEventListner('click', {}) => {
   console.log((input1.value, input2.value))
}

function adicionarNumero(numero1, numero2) {
   return numero1 + numero2;
}
if (button) {
   button.addEventListner('click', function () {
      if (input1 && input2) {
         console.log(adicionarNumero(number(input1.value), number(input2.value)));
      }
   });
}


