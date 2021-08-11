/* variables locales de T_GRAWCJFYKXDTH_245*/

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

    
        var task = designerEvents.api.estudianterszrform;
    

    //"TaskId": "T_GRAWCJFYKXDTH_245"


    	

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteRszrForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONTYMSTWE_972284 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    console.log(entities.Persona.nombre+" "+entities.Persona.apellido);
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;

};



}));
