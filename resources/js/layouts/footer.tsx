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
                        <Link href="#inicio" className="footer-logo">
                            <picture>
                                <img src={Icons.Logo} alt="Logotipo" title="Logotipo" loading="lazy" />
                            </picture>
                        </Link>
                    </div>
                    <div className="footer-icons">
                        <Link href="/"><img src={Icons.Correo} alt="Correo" title="Correo" /></Link>
                        <Link href="https://github.com/zeuqzavleugim" target="_blank"><img src={Icons.Github} alt="GitHub" title="GitHub" /></Link>
                        <Link href="https://www.linkedin.com/in/miguel-angel-vazquez-aviles-170abb15a/" target="_blank"><img src={Icons.Linkedin} alt="Linkeding" title="Linkeding" /></Link>
                    </div>
                </div>
                <div className="footer-sitio">
                    <h4>Sitio</h4>
                    <Link href="#desarrollos">Desarrollos</Link>
                    <Link href="#">Conoceme</Link>
                    <Link href="#">Servicios</Link>
                    <Link href="#planes">Planes</Link>
                    <Link href="#">Contacto</Link>
                </div>
            </footer>
        </>
    );
}
                                