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
                    />
                    <Cart
                        Image={Paginas.Beckman}
                        Alts="Diseño de tienda en línea para venta de mochilas en México"
                        Title="Beckman Mexico"
                        Description="Así luce un e-commerce para mochilas hecho a medida para el mercado mexicano. ¡Descúbrelo!"
                        Url="https://beckmann-mexico.com/"
                    />
                    <Cart
                        Image={Paginas.Textiles}
                        Alts="..."
                        Title="..."
                        Description="..."
                        Url="..."
                    />
                    <Cart
                        Image={Paginas.Romo}
                        Alts="..."
                        Title="..."
                        Description="..."
                        Url="..."
                    />
                    <Cart
                        Image={Paginas.Impresos}
                        Alts="..."
                        Title="..."
                        Description="..."
                        Url="..."
                    />
                </div>
            </section>
        </>
    );
}