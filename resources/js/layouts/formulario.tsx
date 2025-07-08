import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

export default function Formulario() {
    type FormData = {
        nombre: string;
        correo: string;
        ciudad: string;
        telefono: string;
        asunto: string;
        mensaje: string;
        checked: boolean;
    };

    type Errors = {
        [key in keyof FormData]: string;
    };

    const [form, setForm] = useState<FormData>({
        nombre: '',
        correo: '',
        ciudad: '',
        telefono: '',
        asunto: '',
        mensaje: '',
        checked: false,
    });

    const [errors, setErrors] = useState<Errors>({
        nombre: '',
        correo: '',
        ciudad: '',
        telefono: '',
        asunto: '',
        mensaje: '',
        checked: '',
    });

    const [isValid, setIsValid] = useState(false);

    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPhone = /^[0-9]{10}$/;

    useEffect(() => {
        const allFieldsFilled = Object.values(form).every(value => value !== '' && value !== false);
        const noErrors = Object.values(errors).every(error => error === '');
        setIsValid(allFieldsFilled && noErrors);
    }, [form, errors]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox'
                ? (e.target instanceof HTMLInputElement ? e.target.checked : false)
                : value
        }));

        let error = '';
        if (type === 'text' || type === 'textarea') {
            if (value.trim().length < 3) error = 'Debe tener al menos 3 caracteres.';
        } else if (type === 'email') {
            if (!regexEmail.test(value)) error = 'Correo no válido.';
        } else if (type === 'tel') {
            if (!regexPhone.test(value)) error = 'Teléfono debe tener 10 dígitos.';
        } else if (type === 'checkbox') {
            if (!(e.target as HTMLInputElement).checked) error = 'Debe aceptar las políticas.';
        }

        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/contact', form);

            if (response.status === 200) {
                window.location.href = '/';
            }
        } catch (error) {
            alert('Hubo un error al enviar el formulario.');
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div className="formulario" id="contacto">
            <h2>Contáctame</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="formulario-div">

                    <div className="inpud-datos">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre *"
                            value={form.nombre}
                            onChange={handleChange}
                            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                        />
                        <span className="color-blanc">{errors.nombre}</span>
                    </div>

                    <div className="inpud-datos">
                        <input
                            type="email"
                            name="correo"
                            placeholder="Correo *"
                            value={form.correo}
                            onChange={handleChange}
                            className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
                        />
                        <span className="color-blanc">{errors.correo}</span>
                    </div>

                    <div className="inpud-datos">
                        <input
                            type="text"
                            name="ciudad"
                            placeholder="Ciudad *"
                            value={form.ciudad}
                            onChange={handleChange}
                            className={`form-control ${errors.ciudad ? 'is-invalid' : ''}`}
                        />
                        <span className="color-blanc">{errors.ciudad}</span>
                    </div>

                    <div className="inpud-datos">
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Teléfono *"
                            value={form.telefono}
                            onChange={handleChange}
                            className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                        />
                        <span className="color-blanc">{errors.telefono}</span>
                    </div>

                    <div className="inpud-select">
                        <select
                            name="asunto"
                            value={form.asunto}
                            onChange={handleChange}
                            className={`form-control ${errors.asunto ? 'is-invalid' : ''}`}
                        >
                            <option value="">-- Selecciona Asunto --</option>
                            <option value="Creación de sitio web">Creación de sitio web</option>
                            <option value="Landing Pages">Landing Pages</option>
                            <option value="Maquetación de Sitio web">Maquetación de Sitio web</option>
                            <option value="Consultoría SEO">Consultoría SEO</option>
                            <option value="Optimización para motores de búsqueda">Optimización SEO</option>
                            <option value="Otra">Otra</option>
                        </select>
                        <span className="color-blanc">{errors.asunto}</span>
                    </div>

                    <div className="inpud-text">
                        <textarea
                            name="mensaje"
                            placeholder="Mensaje *"
                            value={form.mensaje}
                            onChange={handleChange}
                            className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                        ></textarea>
                        <span className="color-blanc">{errors.mensaje}</span>
                    </div>

                    <div className="inpud-datos color-blanc">
                        <label className="contac-formul-div-politics">
                            <input
                                type="checkbox"
                                name="checked"
                                checked={form.checked}
                                onChange={handleChange}
                                className="form-control"
                            />
                            Acepto las Políticas de Privacidad
                        </label>
                        <span>{errors.checked}</span>
                    </div>

                </div>

                <div className="formulario-buton">
                    <button 
                        type="submit" 
                        disabled={!isValid}
                        className={`form-control form-button ${!isValid ? 'none' : ''}`}
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}