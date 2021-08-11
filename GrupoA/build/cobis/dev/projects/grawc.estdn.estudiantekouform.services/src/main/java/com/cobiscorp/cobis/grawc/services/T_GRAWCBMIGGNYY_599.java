/*
 * Archivo: T_GRAWCBMIGGNYY_599.java
 * Fecha: 2021-08-11T15:29:13Z
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */
package com.cobiscorp.cobis.grawc.services;

import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.References;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.DynamicResponse;
import com.cobiscorp.designer.api.builder.FormEventBuilder;
import com.cobiscorp.designer.api.builder.QueryEventBuilder;
import com.cobiscorp.designer.api.builder.QueryViewEventBuilder;
import com.cobiscorp.designer.api.builder.ViewEventBuilder;
import com.cobiscorp.designer.api.customization.ILoadCatalogCobis;
import com.cobiscorp.designer.api.managers.EventManager;

/**
 * Servicio REST que recibe todas las peticiones de los formularios que confirman la tarea: 
 * T_GRAWCBMIGGNYY_599 - EstudianteKouForm 
 *
 */
@Path("/GRAWC/ESTDN/T_GRAWCBMIGGNYY_599")
@Component
@Service({T_GRAWCBMIGGNYY_599.class})
@References({
@Reference(name="formEventBuilder",
	referenceInterface = FormEventBuilder.class,
	bind = "addFormEventBuilder", 
	unbind = "removeFormEventBuilder", 
	cardinality = ReferenceCardinality.OPTIONAL_MULTIPLE, 
	policy=ReferencePolicy.DYNAMIC,
	target="(&(task.module=GRAWC)(task.submodule=ESTDN)(task.id=T_GRAWCBMIGGNYY_599)(task.version=1.0.0))")
,@Reference(name="VW_ESTUDIANTE_260", 
	referenceInterface=ViewEventBuilder.class, 
	bind = "addViewEventBuilder", 
	unbind = "removeViewEventBuilder",
	cardinality = ReferenceCardinality.OPTIONAL_MULTIPLE, 
	policy=ReferencePolicy.DYNAMIC,
	target="(&(view.id=VW_ESTUDIANTE_260)(view.version=1.0.0))")
,@Reference(name="LoadCatalogCobis",
	referenceInterface=ILoadCatalogCobis.class, 
	bind = "addLoadCatalogCobis", 
	unbind = "removeLoadCatalogCobis",
	cardinality = ReferenceCardinality.OPTIONAL_MULTIPLE, 
	policy=ReferencePolicy.DYNAMIC)
})
public class T_GRAWCBMIGGNYY_599 {

	/**
	 * Se encarga de ejecutar todos los eventos
	 **/
	private EventManager eventManager;

	/**
	 * Constructor por defecto
	 **/
	public T_GRAWCBMIGGNYY_599() {
		super();
		this.eventManager = new EventManager();
	}

	/**
	 * Todas las peticiones se reciben por POST 
	 * 
	 * @param request contiene el nombre del evento (event), el id del componente que genero el evento (source), 
	 * 				  los datos que representan el modelo de la pantalla (data), etc.
	 * @return el modelo de la pantalla modificado luego de ejecutar el evento.
	 **/
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@POST
	public DynamicResponse execute(DynamicRequest request) {
		return this.eventManager.processEvent(request.getEvent(), request.getSource(), request, request.getArgs());
	}

	/**
	 * Se ejecuta este método al detectar que eventos de formulario han sido registrados
	 *
	 * @param formEventBuilder contiene todos los eventos de formulario registrados
	 * @param properties mapa de propieades
	 **/
	public void addFormEventBuilder(FormEventBuilder formEventBuilder, Map<String, ?> properties) {
		this.eventManager.addEventBuilder(formEventBuilder, properties);
	}
	
	/**
	 * Se ejecuta este método al detectar que eventos de formulario han sido eliminados
	 *
	 * @param formEventBuilder contiene todos los eventos de formulario eliminados
	 * @param properties mapa de propieades
	 **/
	public void removeFormEventBuilder(FormEventBuilder formEventBuilder, Map<String, ?> properties) {
		this.eventManager.removeEventBuilder(formEventBuilder, properties);
	}
	
	/**
	 * Se ejecuta este método al detectar que eventos de vista han sido registrados
	 *
	 * @param viewEventBuilder contiene todos los eventos de vista registrados 
	 * @param properties mapa de propieades
	 **/
	public void addViewEventBuilder(ViewEventBuilder viewEventBuilder, Map<String, ?> properties) {
		this.eventManager.addEventBuilder(viewEventBuilder, properties);
	}
	
	/**
	 * Se ejecuta este método al detectar que eventos de vista han sido eliminados
	 *
	 *  @param viewEventBuilder contiene todos los eventos de vista eliminados
	 *  @param properties mapa de propieades
	 **/
	public void removeViewEventBuilder(ViewEventBuilder viewEventBuilder, Map<String, ?> properties) {
		this.eventManager.removeEventBuilder(viewEventBuilder, properties);
	}
	
	/**
	 * Se ejecuta este método para registar el servicio para cargar catalogos cobis
	 *
	 *  @param loadCatalogCobis contiene el servicio para cargar catalogos cobis
	 *  @param properties mapa de propieades
	 **/
	public void addLoadCatalogCobis(ILoadCatalogCobis loadCatalogCobis, Map<String,?> properties){
		this.eventManager.addLoadCatalogCobis(loadCatalogCobis, properties);
	}
	
	/**
	 * Se ejecuta este método para desvincular el servicio para cargar catalogos cobis
	 *
	 *  @param loadCatalogCobis contiene el servicio para cargar catalogos cobis
	 *  @param properties mapa de propieades
	 **/
	public void removeLoadCatalogCobis(ILoadCatalogCobis loadCatalogCobis, Map<String,?> properties){
		this.eventManager.removeLoadCatalogCobis();
	}
    
    /**
	 * Se ejecuta este método al detectar que eventos de consulta han sido registrados
	 *
	 * @param eventBuilder contiene todos los eventos de ejecucion de consultas registrados
	 * @param properties mapa de propieades
	 **/
    public void addQueryEventBuilder(QueryEventBuilder eventBuilder, Map<String, ?> properties) {
		this.eventManager.addEventBuilder(eventBuilder, properties);
	}

    /**
	 * Se ejecuta este método al detectar que eventos de consulta han sido eliminados
	 *
	 *  @param eventBuilder contiene todos los eventos de consulta eliminados
	 *  @param properties mapa de propieades
	 **/
	public void removeQueryEventBuilder(QueryEventBuilder eventBuilder, Map<String, ?> properties) {
		this.eventManager.removeEventBuilder(eventBuilder, properties);
	}

	/**
	 * Se ejecuta este método al detectar que eventos de grilla han sido registrados
	 *
	 * @param queryViewEventBuilder contiene todos los eventos de grilla registrados
	 * @param properties mapa de propieades 
	 **/
	public void addQueyViewEventBuilder(QueryViewEventBuilder queryViewEventBuilder, Map<String, ?> properties) {
		this.eventManager.addEventBuilder(queryViewEventBuilder, properties);
	}
	
	/**
	 * Se ejecuta este método al detectar que eventos de grilla han sido eliminados
	 *
	 * @param queryViewEventBuilder contiene todos los grilla de formulario eliminados
	 * @param properties mapa de propieades
	 **/
	public void removeQueyViewEventBuilder(QueryViewEventBuilder queryViewEventBuilder, Map<String, ?> properties) {
		this.eventManager.removeEventBuilder(queryViewEventBuilder, properties);
	}
}