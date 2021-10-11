const express = require("express");
const personas = require("./clases/personas");
const respuesta = require("./clases/respuesta");
const application = express();

gente = new personas();
application.use(express.json());

application.listen(4500, () => {
    console.log("Servidor inicializado puerto 4500");
});

application.get('/prueba', function(request, response){
    response.send("Respuesta de prueba.")
});

application.get('/listar', function(request,response)
{
    response.send(JSON.stringify(gente));
});

application.put('/agregar', function(request,response)
{
    let usuario = request.body;
    try {
        let res = this.gente.addpersona(usuario);
        if(res == true){response.send(JSON.stringify(new respuesta("exito","00")));}
        else{response.send(JSON.stringify(new respuesta("error","01")));}
        
    }catch(error)
    {
        response.send(JSON.stringify(new respuesta("error","02")));
    }
});