import CartPlans from "@/components/cartsPlans";

export default function Planes() {
    return(
        <>
            <section className="planes">
                <h3 id="planes">Planes de renta mensual para tu sitio web, con mantenimiento incluido</h3>
                <div className="carts-div">
                    <CartPlans 
                        Titulo="Portafolio personal / Landing Page"
                        Presio1={600}
                        Presio2={900}
                        Datos={[
                            "Hosting", 
                            "Dominio", 
                            "Correo", 
                            "Sitio de 1 a 3 secciones",
                            "SEO básico"
                            ]}
                        Tipo={false}
                    />
                    <CartPlans 
                        Titulo="Pequeñas Empresas"
                        Presio1={1200}
                        Presio2={1800}
                        Datos={[
                            "Hosting", 
                            "Dominio", 
                            "Correo", 
                            "Sitio completo (5 a 7 secciones)",
                            "SEO on-page",
                            "Diseño a medida",
                            "Soporte mensual"
                            ]}
                        Tipo={true}
                    />
                    <CartPlans 
                        Titulo="Medianas Empresas"
                        Presio1={2000}
                        Presio2={3500}
                        Datos={[
                            "Hosting", 
                            "Dominio", 
                            "Correo", 
                            "Sitio Completo",
                            "SEO básico",
                            "Diseño Premium",
                            "SEO avanzado",
                            "Reportes mensuales",
                            "Prioridad en soporte"
                            ]}
                        Tipo={false}
                    />
                </div>
            </section>
        </>
    );
}