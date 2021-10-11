class personas {

    constructor()
    {
        this.usuarios = [];
    }

    addpersona(usuario)
    {
        if(this.checkPersona(usuario.nombre)){   
            this.usuarios.push(usuario);
            return true;
        }else{
            return false;
        }
    }

    checkPersona(nombre)
    {
        let comparacion = true; 
        for(var x=0; x<this.usuarios.length;x++)
        {
            if(nombre == this.usuarios[x].nombre){
                comparacion = false;
                break;
            }
        }
       return comparacion;
    }
}

module.exports=personas;