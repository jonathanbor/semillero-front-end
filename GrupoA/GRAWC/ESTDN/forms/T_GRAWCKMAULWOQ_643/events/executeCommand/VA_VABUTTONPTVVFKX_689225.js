

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteKouForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONPTVVFKX_689225 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;
    const estudiante =  entities.Estudiante;
    const nombre = estudiante.nombre;
    const apellido = estudiante.apellido;
    const sexo = estudiante.sexo;
    const edad = estudiante.edad;
    
    console.log(nombre + " " + apellido + " " + sexo + " " + edad);

};