import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Agrega esto arriba del componente
const SERVICE_ID = "service_mwamkfa";
const TEMPLATE_ID = "template_ragtdvb";
const PUBLIC_KEY = "A1ex6YlhfCmZ8tNjL";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  }
}
