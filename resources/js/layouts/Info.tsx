import { General } from "@/imgs/general";
import { Link } from "@inertiajs/react";
import { Icons } from "@/imgs/Icons";

export default function Info() {
    return(
        <>
            <header className="first-seccion" id="conoceme">
                <div className="seccion-img-perfil">
                    <picture>
                        <img 
                            src={General.Perfil} 
                            alt="Foto estilo Funco" 
                            title="Foto estilo Funco" 
                            loading="lazy" />
                    </picture>
                </div>
                <div className="seccion-info-perfil">
                    <h1>
                        Agencia de Desarrollo Web y SEO en CDMX para 
                        Impulsar tu Negocio Online
                    </h1>
                    <p>
                        Creamos páginas web y aplicaciones modernas, 
                        rápidas y optimizadas para Google. 
                        <br />
                        En MaykCoffe diseñamos estrategias SEO que 
                        mejoran tu posición en buscadores, analizamos 
                        el rendimiento con herramientas de Google y 
                        transformamos tu negocio en un imán de clientes.
                        <br />
                        ¿Necesitas un sitio corporativo, un portafolio 
                        o una tienda online? Te ayudamos a crecer con 
                        marketing digital, posicionarte en Google y 
                        atraer más ventas.
                        <br />
                        ¡Cotiza tu proyecto sin costo y lleva tu 
                        negocio al siguiente nivel!.
                    </p>
                    <div className="seccion-icons">
                        <Link href="" className="navbar-blue">Cotiza Aqui</Link>
                    </div>
                </div>
            </header>
        </>
    );
}