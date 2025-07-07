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
            <Head title="Desarrolladores Web | Sitios, SEO y Marketing Digital" />
            <Navbar />
            <Info />
            <Desarrollo/>
            <Planes/>
            <main className="secForm">
                <Formulario/>
            </main>
            <Footer />
        </>
    );
}