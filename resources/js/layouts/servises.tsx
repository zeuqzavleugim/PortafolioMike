import ServiciosTipo from "@/components/servicesTipo";

export default function Servicios() {
    return(
        <>
            <ServiciosTipo
                Tipo={true}
                Titulo=""
                Texto={['texto 1', 'texto 2']}
                Ruta="#"
            />
        </>
    );
}