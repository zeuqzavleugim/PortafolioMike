import ServiciosTipo from "@/components/servicesTipo";

export default function Servicios() {
    return(
        <>
            <section>
                <ServiciosTipo
                    Tipo={true}
                    Titulo=""
                    Texto={['texto 1', 'texto 2']}
                    Ruta="#"
                />
            </section>
        </>
    );    
}