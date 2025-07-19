import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import { General } from "@/imgs/general";

export default function Construccion() {

    return(
        <>
            <Head title="Sitio en Construccion"/>
            <Navbar/>
            <main>
                <img src={General.Construccion} alt="Estamos trabajando para ti" title="Estamos trabajando para ti"/>
            </main>
            <Footer/>
        </>
    );
}