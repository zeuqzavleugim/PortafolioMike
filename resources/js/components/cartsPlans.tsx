export default function CartPlans(props: {Titulo: string, Presio1: number, Presio2: number, Datos: Array<string>, Tipo: Boolean}) {
    
    if (props.Tipo === false) {
        return(
            <>
                <div className="cartTipUno">
                    <h2>{props.Titulo}</h2>
                    <p>Desde</p>
                    <div className="cartTipoPrecio">
                        <p><b>${props.Presio1}</b> - <b>${props.Presio2}</b></p><span>MX</span> 
                    </div>
                    <div className="cartTipoLista">
                        <ul>
                            {props.Datos.map((dato, index) => (
                                <li key={index}>{dato}</li>
                            ))}
                        </ul>
                    </div>
                    <a href="mailto:contacto@maykcoffe.com.mx" title="contacto">
                        Contacto
                    </a>
                </div>
            </>
        );    
    }else {
        return(
            <>
                <div className="cartTipDos">
                    <h2>{props.Titulo}</h2>
                    <p>Desde</p>
                    <div className="cartTipoPrecio">
                        <p><b>${props.Presio1}</b> - <b>${props.Presio2}</b></p><span>MX</span>
                    </div>
                    <div className="cartTipoListaB">
                        <ul>
                            {props.Datos.map((dato, index) => (
                                <li key={index}>{dato}</li>
                            ))}
                        </ul>
                    </div>
                    <a href="mailto:contacto@maykcoffe.com.mx" title="contacto">
                        Contacto
                    </a>
                </div>
            </>
        );
    }
}