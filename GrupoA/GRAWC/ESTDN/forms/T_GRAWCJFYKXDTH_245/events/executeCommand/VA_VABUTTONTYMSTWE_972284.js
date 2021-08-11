

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteRszrForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONTYMSTWE_972284 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    console.log(entities.Persona.nombre+" "+entities.Persona.apellido);
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;

};