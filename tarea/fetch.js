// fetch(`https://pokeapi.co/api/v2/pokemon/ditto`,{
//     method: "GET",
// }).then((respuesta) => 
//     respuesta.json()
// ).then((datos)=>{
//     lconsole.log(datos);
// }).catch((error) => {
//     console.log(error);
// });




// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(respuesta => {
//     if (!respuesta.ok) {
//       throw new Error(`La solicitud falló con el código de estado ${respuesta.status}`);
//     }
//     return respuesta.json();
//   })
//   .then(datos => {
// //     console.log(`Nombre: ${datos.results[4].name}`);
// //     console.log(`Nombre: ${datos.results[5].name}`); 
// //     console.log(`Nombre: ${datos.results[6].name}`);
// //     console.log(`Nombre: ${datos.results[7].name}`);
// //     console.log(`Nombre: ${datos.results[8].name}`);
// //     console.log(`Nombre: ${datos.results[9].name}`);
//     console.log(datos);
//   })
//   .catch(error => {
//     console.error('Error al realizar la solicitud:', error);
//   });


  for(let i = 1; 1 <= 10; i++){
    if(i <= 10){
      let comodin = `https://pokeapi.co/api/v2/pokemon/${i}`;

      fetch(comodin)
      .then(respuesta => {
        if (!respuesta.ok) {
          throw new Error(`La solicitud falló con el código de estado ${respuesta.status}`);
        }
        return respuesta.json();
      })
      .then(datos => {
        // console.log(datos);
        console.log(`Id: ${datos.id}, Nombre: ${datos.name}, Experiencia: ${datos.base_experience}, Altura: ${datos.height}, Peso: ${datos.weight}`);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
    }else{
      break;
    }
  }