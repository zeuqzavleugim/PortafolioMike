export default function Formulario() {
    
    return(
        <>
            <div className="formulario" id="contacto">
                <h2>Contactame</h2>
                <form action="" method="post">
                    <div className="formulario-div">
                        <div className="inpud-datos">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" placeholder="Nombre" required />
                        </div>
                        <div className="inpud-select">
                            <label form="browser">Asunto:</label>
                            <select id="browser" name="browser">
                                <option value="Creacion de sitío web">Creacion de sitío web</option>
                                <option value="Landing Pages">Landing Pages</option>
                                <option value="Maquetación de Sitio web">Maquetación de Sitio web</option>
                                <option value="Consultaria SEO">Consultaria SEO</option>
                                <option value="Optimización para motores de búsqueda">Optimización para motores de búsqueda</option>
                                <option value="Otra">Otra</option>
                            </select>
                        </div>
                        <div className="inpud-datos">
                            <label htmlFor="correo">Correo</label>
                            <input type="email" name="correo" id="correo" placeholder="Correo" required />
                        </div>
                        <div className="inpud-text">
                            <label htmlFor="mensaje">Platicanos un poco de tu proyecto</label>
                            <textarea name="mensaje" id="mensaje" placeholder="Mensaje" required></textarea>
                        </div>
                    </div>
                    <div className="formulario-buton">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    );
}