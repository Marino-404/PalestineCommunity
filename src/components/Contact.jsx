import { useState, useRef } from "react";
import { useAppContext } from "../store/AppContext";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { contactTextContent } from "../utils/text-content.js";

emailjs.init("q-vQQZk1DRHBdFody");

const Contact = () => {
  const { mode, lang } = useAppContext();

  const text = contactTextContent(lang);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const formRef = useRef();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (number) => /^\d{10,15}$/.test(number);

  const completeEmail = async (name, email, number) => {
    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, number, messages: message || "" }),
    });
    const resJson = await res.json();
    if (resJson.status !== 200) console.log("Error al enviar el correo");
    else console.log("Correo enviado");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWarning("");
    setSent(false);
    setSending(false);

    if (!name || !email) setWarning(text.warnings.emptyFields);
    else if (!validateEmail(email)) setWarning(text.warnings.invalidEmail);
    else if (number && !validatePhoneNumber(number))
      setWarning(text.warnings.invalidNumber);
    else {
      const serviceID = "service_1889";
      const templateID = "template_1234";
      completeEmail(name, email, number || "");

      setSending(true);

      emailjs
        .sendForm(serviceID, templateID, formRef.current)
        .then(() => {
          setWarning("");
          setSent(true);
          setSending(false);
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
        })
        .catch((err) => {
          console.error("Error!", err.message);
          setWarning(text.warnings.sendError);
          setSending(false);
        });
    }
  };

  return (
    <div
      id="Contact"
      className={`py-8 w-full h-auto flex flex-col items-center justify-center z-50 ${
        mode ? "text-custom-white" : "text-custom-black"
      }`}
    >
      <h2
        className={`text-md underline font-poppins font-light flex justify-center my-4 ${
          mode ? "text-[#ffffffc2]" : "text-[#000000c2]"
        }`}
      >
        {text.title}
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-[100%] xl:w-[100%] flex flex-col items-center"
      >
        <input
          type="text"
          placeholder={text.placeholders.name}
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${
            mode ? "bg-[#131313]" : "bg-gray-200"
          } w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm`}
        />

        <input
          type="text"
          placeholder={text.placeholders.email}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${
            mode ? "bg-[#131313]" : "bg-gray-200"
          } border-5 w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm`}
        />

        <input
          type="text"
          placeholder={text.placeholders.number}
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={`${
            mode ? "bg-[#131313]" : "bg-gray-200"
          } border-5 w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm`}
        />

        <textarea
          placeholder={text.placeholders.message}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="10"
          className={`${
            mode ? "bg-[#131313]" : "bg-gray-200"
          } w-[90%] h-[20vw] xl:h-[6vw] rounded-lg p-1 focus:outline-none px-4 font-poppins font-normal resize-none placeholder:text-sm`}
        />

        <div className="flex flex-col items-center">
          <div className="flex text-sm m-4 font-poppins font-semibold">
            {warning && <div>{warning}</div>}
            {sent && <div>{text.warnings.sentSuccess}</div>}
            {sending && <div>{text.warnings.sending}</div>}
          </div>

          <div className="pt-4">
            <Button />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
