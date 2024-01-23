//1.Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío"
let titulo = document.querySelector('h1')
titulo.innerHTML ='Hora del Desafio';

//2.Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function Consol(){
    console.log('El botón fue clicado');
}

/*3.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre 
de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta 
con el texto: "Estuve en {ciudad} y me acordé de ti". */

function question(){
    let ciudad =prompt('Dime una ciudad de Brazil');
    alert(`estuve en ${ciudad} y me acordé  de tí`);
}

//4.Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function ilove(){
    alert('Yo amo JS');
}

//5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function sum(){
    let num1 = parseInt(prompt('dime un numero'));
    let num2 = parseInt(prompt('dime otro numero'));
    let result = (num1+num2);
    alert(`la suma es ${result}`);
}

