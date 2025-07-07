import { Paginas } from "@/imgs/pag";
import Cart from "@/components/carts";

export default function Desarrollo() {
    return(
        <>
            <section id="desarrollos" className="desarrollos">
                <h3>Desarrollos</h3>
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
                        Alts="Página web para venta de textiles industriales a empresas"
                        Title="Textiles"
                        Description="Sitio web para empresa de textiles industriales, orientado a ventas B2B. ¡Conoce el proyecto!"
                        Url="https://www.magicpop.com.mx/"
                    />
                    <Cart
                        Image={Paginas.Romo}
                        Alts="Diseño de página web para firma de abogados en Estados Unidos"
                        Title="Romo & Becerril"
                        Description="Página web para firma de abogados ofreciendo servicios legales en Estados Unidos."
                        Url="https://www.rbip.com.mx/"
                    />
                    <Cart
                        Image={Paginas.Impresos}
                        Alts="Página web para empresa de decoración dirigida a pequeñas empresas"
                        Title="Magic pop Impresos"
                        Description="Así luce una página web creada para negocios de decoración que venden a pymes."
                        Url="https://magicpop-impresos.mx/"
                    />
                    <Cart
                        Image={Paginas.TuDesarrollo}
                        Alts="Ejemplo de página web, tu próximo proyecto puede lucir así"
                        Title="¿Listo para ver cómo puede lucir tu próximo proyecto digital?"
                        Description="Tu próximo sitio web podría verse así. ¡Descúbrelo!"
                        Url="#contacto"
                    />
                </div>
            </section>
        </>
    );
}