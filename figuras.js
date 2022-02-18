//Código del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado mide: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado mide: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado mide: ${areaCuadrado}cm^2`);
console.groupEnd("Cuadrados");

console.group("Triángulos");
//Código del triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`Los lados del triágnulo mide ${ladoTriangulo1}cm ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
console.log(`La alturua del triángulo es de : ${alturaTriangulo}`);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}cm`);
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triángulo es de: ${areaTriangulo}cm^2`)

console.groupEnd("Triángulos");


//Código del círculo
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log(`El radio del círculo es de: ${radioCirculo}cm`)

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es de: ${diametroCirculo}cm`)
//PI
const PI = Math.PI;
console.log(`El radio del círculo es de: ${PI}cm`)

//Circunferencia
const circunferencia = diametroCirculo * PI;
console.log(`La circunferencia del círculo es de: ${circunferencia}cm`)

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del círculo es de: ${areaCirculo}cm^2`)

console.end