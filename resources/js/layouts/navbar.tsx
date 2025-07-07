import { Link } from "@inertiajs/react";
import { Icons } from "@/imgs/Icons";

export default function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg" id="inicio">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#inicio" title="maykcoffe">
                        <img 
                            src={Icons.Logo} 
                            className="iconsLogo" 
                            alt="Logotipo" 
                            title="Logotipo" 
                            loading="lazy"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="#desarrollos" title="desarrollos">Desarrollos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#conoceme" title="conoceme">Conoceme</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" title="servicios">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#planes" title="planes">Planes</Link>
                            </li>
                            <li className="navbar-blue">
                                <Link className="nav-link" href="#contacto" title="contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}