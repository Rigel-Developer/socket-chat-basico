



class Usuarios {


  constructor(){
    this.personas = []
  }
  
  //agregar una persona al arreglo
  agregarPersona(id,nombre,sala){

    let persona = {id,nombre,sala}
    this.personas.push(persona)
    return this.personas
  }
  
  //retornar una persona por su ID
  getPersona(id){
    let persona = this.personas.filter(persona =>persona.id === id)[0]
    return persona
  }
  

  getPersonas(){
    return this.personas
  }

  getPersonasPorSala(sala){
    let personasEnSala = this.personas.filter(persona => persona.sala === sala)
   return personasEnSala
  }
  
  borrarPersona(id){
  //almacenar la persona a eliminar
    let personaBorrada = this.getPersona(id)



    //devuelve un nuevo arreglo solo con las personas
    //que no sean iguales al ID enviado como parametro
    //para simular una desconexion o salida del chat
    this.personas = this.personas.filter(persona => persona.id != id)
    
    return personaBorrada


  }


}

module.exports = {
  Usuarios
}





