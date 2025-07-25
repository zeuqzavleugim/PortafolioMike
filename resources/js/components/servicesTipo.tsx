import { Link } from "@inertiajs/react";

export default function ServiciosTipo(props:{Tipo: boolean, Titulo: string, Texto: Array<string>, Ruta: string, RutaSitio: string, Imagen: string}) {
    if (props.Tipo === true) {
        return(
            <>
                <div className="cart-services-uno">
                    <div className="cart-services-imag">
                        <img src={props.Imagen} alt={`Imagen-${props.Titulo}`} />
                    </div>
                    <div className="cart-services-info-text">
                        <div>
                            <h2> {props.Titulo} </h2>
                        </div>
                        <div>
                            {/* aqui usar mejor .map */}
                            {props.Texto.map((texto, index) =>(
                                <p key={index}>{texto}</p>
                            ))}
                        </div>
                        <div className="cart-services-butons">
                            <Link href={props.Ruta} title="" className="butonEsp">Cotiza</Link>
                            <Link href={props.RutaSitio} title="" className="butonEsp">Saber más</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }else if (props.Tipo === false){
        return(
            <>
            <div className="cart-services-uno">
                <div className="cart-services-info-text">
                    <div>
                        <h2> {props.Titulo} </h2>
                    </div>
                    <div>
                        {/* aqui usar mejor .map */}
                        {props.Texto.map((texto, index) =>(
                            <p key={index}>{texto}</p>
                        ))}
                    </div>
                    <div className="cart-services-butons"> 
                        <Link href={props.Ruta} title="" className="butonEsp">Cotiza</Link>
                        <Link href={props.RutaSitio} title="" className="butonEsp">Saber más</Link>
                    </div>
                </div>
                <div className="cart-services-imag">
                    <img src={props.Imagen} alt={`Imagen-${props.Titulo}`} />
                </div>
            </div>
            </>
        );
    }
}