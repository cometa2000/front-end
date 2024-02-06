fetch(`local.php`,{
    method:"POST",
    body: ""
}).then((respuesta) => 
    respuesta.json()
).then((respuesta)=>{
    let [estado, msj] = respuesta
    if(estado == 1){
        console.log(msj);
    }else{
        console.error("Se produjo un error");
    }
}).catch((error) => {
    console.log(error);
});