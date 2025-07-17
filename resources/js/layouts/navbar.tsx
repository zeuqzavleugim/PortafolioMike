import { Link } from "@inertiajs/react";
import { Icons } from "@/imgs/Icons";

export default function Navbar() {
    return(
        <>
        <nav className="navbar navbar-contraint">
            <div className="container-fluid nav-var-expain">
                <Link className="navbar-brand" href="#inicio" title="maykcoffe">
                    <img 
                        src={Icons.Logo} 
                        className="iconsLogo" 
                        alt="Logotipo" 
                        title="Logotipo" 
                        loading="lazy"/>
                </Link>
                <ul className="navbar-nava">
                    <li className="nav-item">
                        <Link className="nav-link" href="#portafolios" title="portafolios">Portafolios</Link>
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
                        <Link className="nav-link" href={route('contacto')} title="contacto">Contacto</Link>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h4 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img 
                            src={Icons.Logo} 
                            className="iconsLogo" 
                            alt="Logotipo" 
                            title="Logotipo" 
                            loading="lazy"/>
                        </h4>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                            <li className="nav-item">
                                <Link className="nav-link" href="#contacto" title="contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}