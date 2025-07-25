import ServiciosTipo from "@/components/servicesTipo";

export default function Servicios() {
    return(
        <>
            <section>
                <ServiciosTipo
                    Tipo={true}
                    Imagen="#"
                    Titulo="Landing Page"
                    Texto={[
                        'Consigue más clientes con una landing page profesional para tu negocio.', 
                        'Incluye todo lo que necesitas para empezar de inmediato: hosting, dominio y correo empresarial.',
                        'Tu página estará lista para vender desde el primer día, con un diseño único que refleja tu marca, optimizada para destacar en Google y con velocidad de carga ultrarrápida.',
                        'Para que tengas total tranquilidad, te ofrezco planes de soporte y mantenimiento. Así, tú te enfocas en hacer crecer tu negocio, y yo me encargo de toda la tecnología.',]}
                    Ruta="#"
                    RutaSitio="#"
                />
                <ServiciosTipo
                    Tipo={false}
                    Imagen="#"
                    Titulo="Creación de sitios web"
                    Texto={[
                        'Creamos sitios web completos para tu negocio, desde pequeñas empresas hasta medianas, con hosting, dominio y correo empresarial incluidos.',
                        'Desarrollados a la medida de tu marca, con un diseño único, responsivo y optimizado para que Google te posicione desde el inicio.',
                        'Integramos secciones clave como quiénes somos, servicios, galería, testimonios y formularios de contacto para convertir visitantes en clientes.',
                        'Además, te ofrezco soporte continuo y planes de mantenimiento para que tú te concentres en crecer tu negocio sin preocuparte por la parte técnica.']}
                    Ruta="#"
                    RutaSitio="#"
                />
            </section>
        </>
    );    
}