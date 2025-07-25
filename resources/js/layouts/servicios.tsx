import ServiciosTipo from "@/components/servicesTipo";

export default function Servicios() {
    return(
        <>
            <section>
                <ServiciosTipo
                    Tipo={true}
                    Titulo="Landing Page"
                    Texto={[
                        'Consigue más clientes con una landing page profesional para tu negocio.', 
                        'Incluye todo lo que necesitas para empezar de inmediato: hosting, dominio y correo empresarial.',
                        'Tu página estará lista para vender desde el primer día, con un diseño único que refleja tu marca, optimizada para destacar en Google y con velocidad de carga ultrarrápida.',
                        'Para que tengas total tranquilidad, te ofrezco planes de soporte y mantenimiento. Así, tú te enfocas en hacer crecer tu negocio, y yo me encargo de toda la tecnología.',]}
                    Ruta="#"
                />
            </section>
        </>
    );    
}