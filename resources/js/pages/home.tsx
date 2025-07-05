import { Head, Link } from "@inertiajs/react";
import Navbar from "../layouts/navbar";
import Footer from "@/layouts/footer";
import Info from "@/layouts/Info";
import Desarrollo from "@/layouts/desarrollos";
export default function Home() {
    return(
        <>
            <Head title="Desarrollador Web | Sitios, SEO y Marketing Digital" />
            <Navbar />
            <Info />
            <Desarrollo/>
            <Footer />
        </>
    );
}