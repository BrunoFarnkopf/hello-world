console.log('hola mundo')
const miPrimerVariable = 'bruno';
const miSegundaVariable = 25;
const miTercerVariable = true;
const miCuartaVariable = null;
const miQuintaVariable = miSegundaVariable + 50;
// console.log(miPrimerVariable,miSegundaVariable,miTercerVariable,miCuartaVariable,miQuintaVariable)
//  alert('bienvenidos a bruno´s page')

// document.getElementsByTagName('boton')[0].addEventListener("click",function() {
//     this.style.color = 'green';
//     console.log(this, this.style.color)
//     alert('8 01 2021');
// });

// document.getElementsByTagName('boton')[0].addEventListener("click",function() {
    
//     console.log(this,this.textContent);
//      this.textContent = "boton";
    
//     alert('8 01 2021');

// });
// document.getElementsByTagName('h1')[0].addEventListener("mouseleave",function() {
    
//     console.log(this,this.textContent);
//     // this.textContent = "Aprendiendo otra vez";
//     this.append('baraja');
//     //alert('');
    
// });

function holaMundo (nombre) {
    console.log('hola mundo');
    console.log('vos sos ' + nombre);
    console.log(`hola vos sos ${nombre}`)

}

holaMundo();
holaMundo('jose');
holaMundo('bruno');
holaMundo('sergio');

const segundaForma = (numero, numero2) => {
    // alert('segunda forma');
    // alert(numero + numero2);
    // alert(numero - numero2);
    // alert(numero / numero2);
    // alert(numero * numero2);
}
segundaForma(1, 2);
segundaForma(3, 9);
segundaForma(100, 1000);
segundaForma(10.87, 0.0004);

const laSuperFuncion = (nombre) => {
    console.log(`hola ${nombre}`);
    if (nombre === 'bruno') {
        console.log('sos el mejor');
    }
};
laSuperFuncion();
laSuperFuncion('roberto');
laSuperFuncion('bruno');
laSuperFuncion('rodrigo');

//funcion que agarre como paametros array de numeros que haga console log en cada numero(loop )
//que  en el log 2 cosas numero y index y despues que la funcion retorte el valor de el primer numero mas el ultimo

const numero = [1,2,3,4,5]
function funcionDeArray (colleccion){
    console.log(colleccion);

    for (let i = 0; i < colleccion.length; i = i + 1) {
        console.log(i, colleccion[i])

    }
    console.log(colleccion[0], colleccion[-1],colleccion)
    return colleccion[0] + colleccion[colleccion.length - 1]
}
const miResultado = funcionDeArray(numero);
const miResultado2 = funcionDeArray([3, 9, 8]);
const miResultado3 = funcionDeArray([10, 100 , 1000 ]);
console.log(miResultado, miResultado2, miResultado3);



