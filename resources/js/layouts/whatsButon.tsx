import { Icons } from "@/imgs/Icons";

export default function WhatsButon() {
    return(
        <>
        <a href="https://wa.me/525511302387?text=Hola%20MaykCoffe,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?" 
            target="_blanck"
            className="btn-flotante"
            title="Whatsapp">
                <img src={Icons.Whatsapp} alt="Boton de whatsapp" title="Boton de whatsapp" loading="lazy"/>
        </a>
        </>
    );
}