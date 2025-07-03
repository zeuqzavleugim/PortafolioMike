import { Head, Link } from "@inertiajs/react";
import Navbar from "../layouts/navbar";
import Footer from "@/layouts/footer";

export default function Home() {
    return(
        <>
            <Head title="Desarrollador Web | Sitios, SEO y Marketing Digital" />
            <Navbar />
            <Footer />
        </>
    );
}