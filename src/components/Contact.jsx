import React, { useState, useRef } from 'react';
import { useAppContext } from '../AppContext';
import Button from './Button';
import emailjs from '@emailjs/browser';

emailjs.init("q-vQQZk1DRHBdFody");

const Contact = () => {
    const { mode } = useAppContext();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState(''); 
    const [message, setMessage] = useState('');
    const [warning, setWarning] = useState('');
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const formRef = useRef();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhoneNumber = (number) => {
        const regex = /^\d{10,15}$/; 
        return regex.test(number);
    };

    const completeEmail = async ( name, email, number ) => {
        const res = fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                number: number,
            })
        })
        const resJson = await res.json(); 
        if (resJson.status !== 200)
            console.log("Error al enviar el correo");
        else
            console.log("Correo enviado");
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
        } else if (number && !validatePhoneNumber(number)) {
            setWarning("Número de celular inválido.");
        } else {
            const serviceID = "service_1889";
            const templateID = "template_1234";
            completeEmail(name, email, number ? number : '');


            setSending(true);

            emailjs.sendForm(serviceID, templateID, formRef.current)
                .then((res) => {
                    console.log(res);
                    setWarning('');
                    setSent(true);
                    setSending(false);
                    setName('');
                    setEmail('');
                    setNumber('');
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
        <div className={`w-full h-auto flex flex-col items-center justify-center z-50 ${mode ? 'text-custom-white' : 'text-custom-black'}`}>
            <h2 id='Contact' className={`text-md underline font-poppins font-bold flex justify-center my-4 ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'}`}>¡Ponete en contacto!</h2>
            <form ref={formRef} onSubmit={handleSubmit} className='w-[100%] xl:w-[75%] flex flex-col items-center'>
                <input 
                    type="text"
                    placeholder='Nombre'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='bg-gray-100 dark:bg-[#131313] w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm' 
                />
                <input 
                    type="text" 
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-gray-100 dark:bg-[#131313] border-5 w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm' 
                />
                <input 
                    type="text" 
                    placeholder='Número de celular (opcional)'
                    name='number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className='bg-gray-100 dark:bg-[#131313] border-5 w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm' 
                />
                <textarea
                    placeholder='Escribe tu mensaje'
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    cols="30"
                    rows="10" 
                    className='bg-gray-100 dark:bg-[#131313] w-[90%] h-[20vw] xl:h-[6vw] rounded-lg p-1 focus:outline-none px-4 font-poppins font-normal resize-none placeholder:text-sm' 
                ></textarea>

                <div className="flex flex-col items-center">
                  <div className="flex text-sm m-4 font-poppins font-semibold">
                    {warning && <div>{warning}</div>}
                    {sent && <div>¡Enviado correctamente!</div>}
                    {sending && <div>Enviando...</div>}
                  </div>

                  <div className='pt-4'>
                    <Button />
                  </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;




