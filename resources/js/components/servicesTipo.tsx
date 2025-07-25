import { Link } from "@inertiajs/react";

export default function ServiciosTipo(props:{Tipo: boolean, Titulo: string, Texto: Array<string>, Ruta: string, RutaSitio: string, Imagen: string}) {
    if (props.Tipo === true) {
        return(
            <>
                <div className="cart-services-uno">
                    <div>
                        <img src={props.Imagen} alt={`Imagen-${props.Titulo}`} />
                    </div>
                    <div>
                        <div>
                            <h2> {props.Titulo} </h2>
                        </div>
                        <div>
                            {/* aqui usar mejor .map */}
                            {props.Texto.map((texto, index) =>(
                                <p key={index}>{texto}</p>
                            ))}
                        </div>
                        <div>
                            <Link href={props.Ruta} title="">Cotiza</Link>
                            <Link href={props.RutaSitio} title="">Saber más</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }else if (props.Tipo === false){
        return(
            <>
                <div>
                    <div>
                        <h2> {props.Titulo} </h2>
                    </div>
                    <div>
                        {/* aqui usar mejor .map */}
                        {props.Texto.map((texto, index) =>(
                            <p key={index}>{texto}</p>
                        ))}
                    </div>
                    <div> 
                        <Link href={props.Ruta} title="">Cotiza</Link>
                        <Link href={props.RutaSitio} title="">Saber más</Link>
                    </div>
                </div>
                <div>
                    <img src={props.Imagen} alt={`Imagen-${props.Titulo}`} />
                </div>
            </>
        );
    }
}