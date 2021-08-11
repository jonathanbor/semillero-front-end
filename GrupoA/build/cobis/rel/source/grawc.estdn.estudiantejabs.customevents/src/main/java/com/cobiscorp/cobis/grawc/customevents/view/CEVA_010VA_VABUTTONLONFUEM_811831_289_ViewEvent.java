/*
 * Archivo: VW_ESTUDIANSJ_831_ViewEvent.java
 * Fecha: 11/08/2021 13:06:32
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

package com.cobiscorp.cobis.grawc.customevents.view;

import java.util.List;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.builder.ViewEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Formulario
 *
 * VW_ESTUDIANSJ_831_ViewEvent - View of EstudianteJabs
 *
 */
@Component
@Service({ViewEventBuilder.class})
@Properties(value={
		@Property(name = "view.id", value = "VW_ESTUDIANSJ_831"),
		@Property(name = "view.version", value = "1.0.0")
})
public class CEVA_010VA_VABUTTONLONFUEM_811831_289_ViewEvent extends ViewEventBuilder
 implements IExecuteCommand
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(CEVA_010VA_VABUTTONLONFUEM_811831_289_ViewEvent.class);
    
	@Reference(name="iExecuteCommandVA_VABUTTONLONFUEM_811831",referenceInterface =IExecuteCommand.class,bind = "setiExecuteCommandVA_VABUTTONLONFUEM_811831",unbind = "unsetiExecuteCommandVA_VABUTTONLONFUEM_811831",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(view.id=VW_ESTUDIANSJ_831)(view.version=1.0.0)(view.controlId=VA_VABUTTONLONFUEM_811831))")
	private IExecuteCommand iExecuteCommandVA_VABUTTONLONFUEM_811831;

	public void setiExecuteCommandVA_VABUTTONLONFUEM_811831(IExecuteCommand iExecuteCommandVA_VABUTTONLONFUEM_811831) {
		this.iExecuteCommandVA_VABUTTONLONFUEM_811831 = iExecuteCommandVA_VABUTTONLONFUEM_811831;
	}

	public void unsetiExecuteCommandVA_VABUTTONLONFUEM_811831(IExecuteCommand iExecuteCommandVA_VABUTTONLONFUEM_811831) {
		this.iExecuteCommandVA_VABUTTONLONFUEM_811831 = iExecuteCommandVA_VABUTTONLONFUEM_811831;
	}

	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		try {
			iExecuteCommandVA_VABUTTONLONFUEM_811831.executeCommand(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addExecuteCommandEvent("VA_VABUTTONLONFUEM_811831", this);
	}

}

