console.log("|AR| conectado");

const titulo = document.getElementsByClassName('titulo')[0];
titulo.style.color = 'red';

titulo.addEventListener('hover', () => {
    console.log('click');
    titulo.style.color = 'black';
});

console.log('titulo: ', titulo);

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnSuma = document.getElementById('btnSuma');

btnSuma.addEventListener('click', () => {
    sumaValores();
});

const sumaValores = () =>{
    if(!isNaN(parseInt(num1.value))) {
        if(!isNaN(parseInt(num2.value))) {
            const res = parseInt(num1.value)+parseInt(num2.value);
            console.log(`Valores: ${num1.value} + ${num2.value} = ${res}`);
        }
    } else {
        alert('No hay numeros para sumar', res);
    }
}