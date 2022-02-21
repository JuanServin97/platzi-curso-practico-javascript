//Código del cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado mide: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado){
    return lado * 4;
}

perimetroCuadrado();

function areaCuadrado(lado) {
    return lado * lado;
}; 
areaCuadrado();


//console.log(`El área del cuadrado mide: ${areaCuadrado}cm^2`);
console.groupEnd("Cuadrados");

console.group("Triángulos");
//Código del triángulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log(`Los lados del triágnulo mide ${ladoTriangulo1}cm ${ladoTriangulo2}cm y ${baseTriangulo}cm`);


// console.log(`La alturua del triángulo es de : ${alturaTriangulo}`);
function perimetroTriangulo (lado1,lado2,lado3) { 
    return lado1 + lado2 + base;
};
// console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} ;
// console.log(`El area del triángulo es de: ${areaTriangulo}cm^2`)

console.groupEnd("Triángulos");


//Código del círculo
console.group("Círculo");

//Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es de: ${radioCirculo}cm`)

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
};
// console.log(`El diámetro del círculo es de: ${diametroCirculo}cm`)
//PI
const PI = Math.PI;
// console.log(`El radio del círculo es de: ${PI}cm`)

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}; 
// console.log(`El área del círculo es de: ${areaCirculo}cm^2`)

console.end