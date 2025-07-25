import { Link } from "@inertiajs/react";

export default function ServiciosTipo(props:{Tipo: boolean, Titulo: string, Texto: Array<string>, Ruta: string, RutaSitio: string}) {
    if (props.Tipo === true) {
        return(
            <>
                <div>
                    <div>
                        <img src="" alt="" />
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
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </>
        );
    }
}