/* variables locales de T_GRAWCBMIGGNYY_599*/

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

    
        var task = designerEvents.api.estudiantekouform;
    

    //"TaskId": "T_GRAWCBMIGGNYY_599"


    	

//Entity: Estudiante
//Estudiante. (Button) View: EstudianteKouForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONDVNJEJJ_253260 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Estudiante = true;
    const estudiante =  entities.Estudiante;
    const nombre = estudiante.nombre;
    const apellido = estudiante.apellido;
    const sexo = estudiante.sexo;
    const edad = estudiante.edad;
    
    console.log(nombre + " " + apellido + " " + sexo + " " + edad);
};



}));
