import { Icons } from "@/imgs/Icons";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return(
        <>
            <footer>
                <div className="footer-info">
                    <div>
                        <picture>
                            <img src={Icons.Logo} alt="Logotipo" title="Logotipo" />
                        </picture>
                    </div>
                    <div className="footer-icons">
                        <Link href="/"><img src={Icons.Correo} alt="Correo" title="Correo" /></Link>
                        <Link href="/"><img src={Icons.Github} alt="GitHub" title="GitHub" /></Link>
                        <Link href="/"><img src={Icons.Linkedin} alt="Linkeding" title="Linkeding" /></Link>
                    </div>
                </div>
                <div className="footer-sitio">
                    <h4>Sitio</h4>
                    <Link href="#">Inicio</Link>
                    <Link href="#">Sobre mí</Link>
                    <Link href="#">Servicios</Link>
                    <Link href="#">Contacto</Link>
                </div>
            </footer>
        </>
    );
}