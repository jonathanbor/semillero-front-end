

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteRszrForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONJXIHDKY_559446 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    console.log(entities.Estudiante.nombre+" "+entities.Estudiante.apellido);
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;

};