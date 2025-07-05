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
                            alt="Foto de Perfil estilo Funco" 
                            title="Foto de Perfil estilo Funco" 
                            loading="lazy" />
                    </picture>
                </div>
                <div className="seccion-info-perfil">
                    <h1>
                        Diseño y Desarrollo Web con SEO  Impulsa tu 
                        Negocio Online
                    </h1>
                    <p>
                        Desarrollo sitios y aplicaciones web modernas, 
                        rápidas y listas para posicionarse en Google.
                        <br /><br /> 
                        Trabajo con tecnologías como Laravel y React, 
                        cuidando cada detalle desde el código hasta 
                        la experiencia del usuario, para que tu 
                        negocio no solo luzca bien, sino venda. 
                        <br /><br />
                        Aplico estrategias SEO, analizo el rendimiento 
                        con herramientas de Google y transformo tus 
                        ideas en soluciones digitales que atraen 
                        clientes. 
                        <br /><br />
                        Ya sea que necesites un portafolio 
                        simple o un sitio completo para impulsar tu 
                        empresa, estoy aquí para ayudarte a crecer 
                        online y preparar el camino hacia un 
                        marketing digital a otro nivel.
                    </p>
                    <div className="seccion-icons">
                        <a href="">
                            <img src={Icons.Correo} alt="Contacto" title="Contacto" />
                        </a>
                        <a href="https://github.com/zeuqzavleugim" target="_blank">
                            <img src={Icons.Github} alt="GitHub" title="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/miguel-angel-vazquez-aviles-170abb15a/" target="_blank">
                            <img src={Icons.Linkedin} alt="Linkedin" title="Linkedin"/>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}