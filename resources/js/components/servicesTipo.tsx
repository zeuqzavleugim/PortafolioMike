import { Link } from "@inertiajs/react";

export default function ServiciosTipo(props:{Tipo: boolean}) {
    if (props.Tipo === true) {
        return(
            <>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <h2></h2>
                        </div>
                        <div>
                            {/* aqui usar mejor .map */}
                            <p></p>
                        </div>
                        <div>
                            <Link href="" title="">Cotiza</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }else if (props.Tipo === false){
        return(
            <></>
        );
    }
}