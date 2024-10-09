import React, { useState, useRef } from 'react';
import { useAppContext } from '../AppContext';
import Button from '../assets/Button';
import emailjs from '@emailjs/browser';

emailjs.init("q-vQQZk1DRHBdFody");

const Contact = () => {
    const { mode } = useAppContext();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [warning, setWarning] = useState('');
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const formRef = useRef();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setWarning('');
        setSent(false);
        setSending(false);

        if (!name || !email || !message) {
            setWarning("Por favor completa todos los campos.");
        } else if (!validateEmail(email)) {
            setWarning("Email inválido.");
        } else {
            const serviceID = "service_1234";
            const templateID = "template_1234";

            setSending(true);

            emailjs.sendForm(serviceID, templateID, formRef.current)
                .then((res) => {
                    console.log(res);
                    setWarning('');
                    setSent(true);
                    setSending(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                })
                .catch((err) => {
                    console.error("Error!", err.message);
                    setWarning("Hubo un error al enviar el mensaje.");
                    setSending(false);
                });
        }
    };

    return (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center dark:text-white">
            <h2 id='Contact' className='text-3xl text-gradient font-bebas font-light flex justify-center mb-4'>¡Ponete en contacto!</h2>
            <form ref={formRef} onSubmit={handleSubmit} className='w-[73%] xl:w-[30%] flex flex-col items-center'>
                <input 
                    type="text"
                    placeholder='Nombre'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='bg-gray-100 dark:bg-[#131313] w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm' 
                />
                <input 
                    type="text" 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-gray-100 dark:bg-[#131313] border-5 w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm' 
                />
                <textarea
                    placeholder='Escribe tu mensaje'
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    cols="30"
                    rows="10" 
                    className='bg-gray-100 dark:bg-[#131313] w-[90%] h-[20vw] xl:h-[6vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal resize-none placeholder:text-sm' 
                ></textarea>
                <Button />
                {warning && <div className="text-sm text-gradient font-poppins font-semibold">{warning}</div>}
                {sent && <div className="text-sm text-gradient font-poppins font-semibold">¡Enviado correctamente!</div>}
                {sending && <div className="text-sm text-gradient font-poppins font-semibold">Enviando...</div>}
            </form>
        </div>
    );
};

export default Contact;



