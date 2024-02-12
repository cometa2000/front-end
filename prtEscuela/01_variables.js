// constante
// const saludo = (nombre = null, edad = null) => { return  `hola ${nombre} eres ${edad >= 18 ? 'mayor' : 'menor'} de edad` };
// console.log(saludo("brayan",23));

// -------------------------------------------------------------------------------------------------------------------------------

// const suma = (num1 = 0, num2 = 0) =>{
//     return `Suma: ${num1+num2}`
// }
// const resta = (num1 = 0, num2 = 0) =>{
//     return `Resta: ${num1-num2}`
// }
// const multiplicacion = (num1 = 0, num2 = 0) =>{
//     return `Multiplicación: ${num1*num2}`
// }
// const division = (num1 = 0, num2 = 0) =>{
//     return `División: ${num1/num2}`
// }
// console.log(suma(2,3)); 

// --------------------------------------------------------------------------------------------------------------------------------

const lista = [1,2,3,4,5,6,7,8,9]
let [num1, num2,num3, num4, num5, num6, num7, num8, num9] = lista
// console.log(num1);

const datos_personales = {
    nombre: 'brayan',
    ap_p: 'solis',
    ap_m: 'cortes'
}
// console.log(datos_personales['nombre']);
// console.log(datos_personales.nombre);

// let {nombre,ap_p,ap_m} = datos_personales
// console.log(nombre+" "+ap_p);

// ----------------------------------------------------------------------------------------------------------------------------------

const datos = [
    {
        nombre:'jose',
        apellido:'avila',
        fecha:'10/05/2009',
        puesto:'sistema',
        matricula:1232343
    },
    {
        nombre:'ana',
        apellido:'peres',
        fecha:'10/05/2007',
        puesto:'gestion',
        matricula:1232343
    },
    {
        nombre:'julio',
        apellido:'lopez',
        fecha:'06/05/2002',
        puesto:'industrial',
        matricula:1232343
    },
    ['carrera',2012,12,6]
]

/* datos.map((persona)=>{
    let {nombre, apellido, fecha, puesto, matricula } = persona
    if(nombre != undefined){
        console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha}, ${puesto}, ${matricula}`); 
    }else{
        let [carrera, año, mes, dia] = persona
        console.log(`${carrera}, ${año}, ${mes}, ${dia}`);
    }
}); */

/* datos.map(({nombre, apellido, fecha, puesto, matricula } = persona)=>{
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha}, ${puesto}, ${matricula}`);
}); */

const datos_basicos = (...datos) => {
    let [nombre, apellido, carrera] = datos
    console.log(`Tus datos son: ${nombre}, ${apellido}, ${carrera}`);
}

datos_basicos('brayan', 'solis', 'sis')