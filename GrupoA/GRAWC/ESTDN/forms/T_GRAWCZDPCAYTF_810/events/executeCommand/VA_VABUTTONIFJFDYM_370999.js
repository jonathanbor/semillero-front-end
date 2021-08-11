

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteJshForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONIFJFDYM_370999 = function(  entities, executeCommandEventArgs ) {
    console.log(entities.Estudiante.nombre+' '+entities.Estudiante.apellido);
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;

};