/* variables locales de T_GRAWCNLNGQCIX_617*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.estudiantejabs;
    

    //"TaskId": "T_GRAWCNLNGQCIX_617"


    	

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteJabs
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONLONFUEM_811831 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;

    console.log('Nombre: ' + entities.Estudiante.nombre + ' apellido: ' + entities.Estudiante.apellido);
};



}));
