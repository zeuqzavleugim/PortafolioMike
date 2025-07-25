import ServiciosTipo from "@/components/servicesTipo";

export default function Servicios() {
    return(
        <>
            <section className="services-in-home">
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
                        'Además, te ofrezco soporte continuo y planes de mantenimiento para que tú te concentres en crecer tu negocio sin preocuparte por la parte técnica.'
                    ]}
                    Ruta="#"
                    RutaSitio="#"
                />
                <ServiciosTipo
                    Tipo={true}
                    Imagen="#"
                    Titulo="Consultoria SEO"
                    Texto={[
                        'Atrae más clientes potenciales desde Google con una estrategia SEO diseñada para tu negocio.',
                        'Analizo tu sitio, tu competencia y defino un plan para posicionarte en los primeros lugares, generando tráfico orgánico que realmente convierte.',
                        'Mi consultoría SEO es práctica y directa: sabrás exactamente qué mejorar para que tu web venda más sin invertir de más en anuncios.',
                        'Tú te enfocas en tu negocio, yo me encargo de que tu público te encuentre.'
                    ]}
                    Ruta="#"
                    RutaSitio="#"
                />
                <ServiciosTipo
                    Tipo={false}
                    Imagen="#"
                    Titulo="Optimización para motores de búsqueda"
                    Texto={[
                        'Optimizo tu sitio web para que aparezca en los primeros resultados de Google, atrayendo clientes reales que buscan exactamente lo que ofreces.',
                        'Mejoro la velocidad, la estructura técnica y el contenido con estrategias probadas que aumentan el tráfico orgánico y tus conversiones.',
                        'Así tu página no solo recibe más visitas, sino que genera ventas sin depender únicamente de campañas pagadas.'
                    ]}
                    Ruta="#"
                    RutaSitio="#"
                />
            </section>
        </>
    );    
}