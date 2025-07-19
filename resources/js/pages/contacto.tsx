import { Head, Link } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Formulario from "@/layouts/formulario";
import Footer from "@/layouts/footer";
import { General } from "@/imgs/general";

export default function Contacto({}) {
    return(
        <>
            <Head title="Agenda tu proyecto | Contacto con MaykCoffe - Desarrollo Web y SEO CDMX" />
            <Navbar />
            <main className="main-principal-contacto">
                <div className="main-contacto">
                    <div className="main-contacto-div">
                        <h1>
                            ¿Listo para transformar tu negocio?
                        </h1>
                        <h2>
                            ¡Hablemos hoy mismo!
                        </h2>
                        <p>
                            En MaykCoffe, somos una agencia digital 
                            en CDMX especializada en desarrollo web, 
                            SEO y marketing digital para empresas en 
                            México.
                            <br /> <br />
                            Creamos páginas web rápidas, optimizadas 
                            para Google, y estrategias personalizadas 
                            para que tu negocio aparezca primero en 
                            buscadores y aumente sus ventas.
                            <br /><br />
                            Cotiza gratis tu proyecto y descubre 
                            cuánto puede crecer tu empresa con un 
                            sitio web que realmente vende.
                        </p>
                    </div>
                    <div className="clas-img-div">
                        <img 
                        src={General.Contacto} 
                        alt="¿Listo para impulsar tu negocio?, Contactame" 
                        title="¿Listo para impulsar tu negocio?, Contactame"
                        className="img-contacto"
                        />
                    </div>
                </div>
            </main>
            <Formulario />
            <hr />
            <section className="section-contacto">
                <h3>
                    ¡Hablemos!
                </h3>
                <p>
                    ¿Prefieres WhatsApp? Escríbenos ahora.
                </p>
            </section>
            <Footer />
        </>
    );
}