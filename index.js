console.log('hola mundo')
const miPrimerVariable = 'bruno';
const miSegundaVariable = 25;
const miTercerVariable = true;
const miCuartaVariable = null;
const miQuintaVariable = miSegundaVariable + 50;
console.log(miPrimerVariable,miSegundaVariable,miTercerVariable,miCuartaVariable,miQuintaVariable)
 alert('bienvenidos a bruno´s page')

document.getElementsByTagName('boton')[0].addEventListener("click",function() {
    this.style.color = 'green';
    console.log(this, this.style.color)
    alert('8 01 2021');
});

document.getElementsByTagName('boton')[0].addEventListener("click",function() {
    
    console.log(this,this.textContent);
     this.textContent = "boton";
    
    alert('8 01 2021');

});
document.getElementsByTagName('h1')[0].addEventListener("mouseleave",function() {
    
    console.log(this,this.textContent);
    // this.textContent = "Aprendiendo otra vez";
    this.append('baraja');
    //alert('');
    
});