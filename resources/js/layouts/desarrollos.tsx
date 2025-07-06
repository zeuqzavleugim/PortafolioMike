import { Paginas } from "@/imgs/pag";
import Cart from "@/components/carts";

export default function Desarrollo() {
    return(
        <>
            <section id="desarrollos" className="desarrollos">
                <h2>Desarrollos</h2>
                <div className="carts-div">
                    <Cart
                        Image={Paginas.Decoracion}
                        Alts="Diseño de página web para empresa de decoración corporativa enfocada en medianas y grandes empresas"
                        Title="Decoración de Oficinas"
                        Description="Diseño web para empresa de decoración que transforma espacios corporativos. ¡Descubre el proyecto!"
                        Url="https://decoraciondeoficinas.com.mx/"
                    ></Cart>
                </div>
            </section>
        </>
    );
}