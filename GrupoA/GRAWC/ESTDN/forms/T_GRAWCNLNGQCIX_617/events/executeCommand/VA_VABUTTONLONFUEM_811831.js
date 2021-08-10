

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteJabs
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONLONFUEM_811831 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;

    console.log('Nombre: ' + entities.Estudiante.nombre + ' apellido: ' + entities.Estudiante.apellido);
};