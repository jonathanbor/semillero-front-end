

//Entity: Estudiantes
//Estudiantes. (Button) View: EstudianteRszrForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONFLZYOVU_794635 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    console.log(entities.Personas.nombre+" "+entities.Personas.apellido);
    //executeCommandEventArgs.commons.serverParameters.Estudiantes = true;

};