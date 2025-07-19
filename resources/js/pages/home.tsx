import { Head, Link } from "@inertiajs/react";
import Navbar from "../layouts/navbar";
import Footer from "@/layouts/footer";
import Info from "@/layouts/Info";
import Desarrollo from "@/layouts/desarrollos";
import Planes from "@/layouts/planes";
import Formulario from "@/layouts/formulario";

export default function Home() {
    return(
        <>
            <Head title="Agencia de Desarrollo Web y SEO en CDMX | Sitios que Venden - MaykCoffe" />
            <Navbar />
            <hr />
            <Info />
            <hr />
            <Desarrollo/>
            <Planes/>
            <section className="desarrollos">
                <hr />
                <h2>
                    Páginas web modernas, SEO técnico y 
                    marketing digital que posiciona tu 
                    empresa en Google.
                </h2>
                <hr />
            </section>
            {/* aqui poner los Servicios */}
            <section className="desarrollos">
                <hr />
                <h2>
                    Consultoría en marketing digital para 
                    escalar tu negocio
                </h2>
                <hr />
            </section>
            <Formulario/>
            <Footer />
        </>
    );
}