/* variables locales de T_GRAWCXHEJXDEQ_234*/

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

    
        var task = designerEvents.api.estudiantejibyform;
    

    //"TaskId": "T_GRAWCXHEJXDEQ_234"


    	

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteJibyForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONRPUIHIV_536241 = function(  entities, executeCommandEventArgs ) {

    console.log(entities.Estudiante.nombre + " " + entities.Estudiante.apellido)
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;

};



}));
