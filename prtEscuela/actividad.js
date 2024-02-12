//Crear un arrego de objetos dinamico donde uno pida (nombre,apellido,fecha,puesto,matricula,carrera,edad,escuela,semestre,) 5 datos y leerlos

const datos = [
    {
        nombre:'jose',
        apellido:'avila',
        fecha:'10/05/2009',
        puesto:'sistema',
        matricula:9232343,
        carrera:'sis',
        edad:20,
        escuela:'itma2',
        semestre:8
    },
    {
        nombre:'ana',
        apellido:'peres',
        fecha:'10/05/2007',
        puesto:'gestion',
        matricula:1232343,
        carrera:'sis',
        edad:18,
        escuela:'itma2',
        semestre:2
    },
    {
        nombre:'julio',
        apellido:'lopez',
        fecha:'06/05/2002',
        puesto:'industrial',
        matricula:8232343,
        carrera:'sis',
        edad:19,
        escuela:'itma2',
        semestre:10
    },
    {
        nombre:'Ariel',
        apellido:'Barrientos',
        fecha:'25/02/1989',
        puesto:'sistemas',
        matricula:151190104,
        carrera:'sis',
        edad:30,
        escuela:'itma2',
        semestre:99
    }
]

datos.map(({nombre, apellido, fecha, puesto, matricula, carrera, edad, escuela, semestre } = persona)=>{
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha}, ${puesto}, ${matricula}, ${carrera}, ${edad}, ${escuela}, ${semestre}`);
}); 
console.log('--------------------------');
datos.push(
    {
        nombre:'Brayan',
        apellido:'Solis',
        fecha:'23/05/2000',
        puesto:'sistemas',
        matricula:191190104,
        carrera:'sis',
        edad:23,
        escuela:'itma2',
        semestre:10
    }
);
datos.push(
    {
        nombre:'Jorge',
        apellido:'Meza',
        fecha:'19/05/1999',
        puesto:'sistemas',
        matricula:161190018,
        carrera:'sis',
        edad:24,
        escuela:'itma2',
        semestre:10
    }
);
datos.push(
    {
        nombre:'Random',
        apellido:'rac',
        fecha:'34/05/2000',
        puesto:'gestion',
        matricula:201190006,
        carrera:'sis',
        edad:23,
        escuela:'itma2',
        semestre:10
    }
);

datos.map(({nombre, apellido, fecha, puesto, matricula, carrera, edad, escuela, semestre } = persona)=>{
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha}, ${puesto}, ${matricula}, ${carrera}, ${edad}, ${escuela}, ${semestre}`);
}); 