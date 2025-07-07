import { Icons } from "@/imgs/Icons";
import { Link } from "@inertiajs/react";
import WhatsButon from "./whatsButon";

export default function Footer() {
    return(
        <>
            <WhatsButon />
            <footer>
                <div className="footer-info">
                    <div>
                        <Link href="#inicio" className="footer-logo" title="maykcoffe">
                            <picture>
                                <img src={Icons.Logo} alt="Logotipo" title="Logotipo" loading="lazy" />
                            </picture>
                        </Link>
                    </div>
                    <div className="footer-icons">
                        <Link href="/"><img src={Icons.Correo} alt="Correo" title="Correo" /></Link>
                        <Link href="https://github.com/zeuqzavleugim" target="_blank" title="GitHub"><img src={Icons.Github} alt="GitHub" title="GitHub" /></Link>
                        <Link href="https://www.linkedin.com/in/miguel-angel-vazquez-aviles-170abb15a/" target="_blank" title="Linkeding"><img src={Icons.Linkedin} alt="Linkeding" title="Linkeding" /></Link>
                    </div>
                </div>
                <div className="footer-sitio">
                    <h4>Sitio</h4>
                    <Link href="#desarrollos" title="Desarrollos">Desarrollos</Link>
                    <Link href="#conoceme" title="conoceme">Conoceme</Link>
                    <Link href="#" title="Servicios">Servicios</Link>
                    <Link href="#planes" title="Planes">Planes</Link>
                    <Link href="#contacto" title="contacto">Contacto</Link>
                </div>
            </footer>
        </>
    );
}
                                