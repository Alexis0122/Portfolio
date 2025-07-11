import {
  DevToLogo,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPinLine,
} from "@phosphor-icons/react";
import React, { type ReactNode, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = "service_mwamkfa";
const TEMPLATE_ID = "template_ragtdvb";
const PUBLIC_KEY = "A1ex6YlhfCmZ8tNjL";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    const data = new FormData(formRef.current);

    const formData = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      subject: data.get("subject") as string,
      message: data.get("message") as string,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        toast.success("Message sent successfully!");
      })
      .catch(() => {
        setStatus("error");
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-transparent">
      <h2 className="text-4xl font-bold text-center text-duron mb-4">
        Get In <span className="text-white">Touch</span>
      </h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
        Have a project in mind or want to discuss potential opportunities? Feel
        free to reach out!
      </p>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Form */}
        <div className="lg:w-1/2">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-white/80 mb-1 capitalize"
                >
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-duron focus:outline-none"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-duron focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-duron text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-500 transition disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/2 bg-black/20 rounded-xl p-8 shadow-lg border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">
            Contact Information
          </h3>
          <div className="space-y-6">
            <ContactInfo
              icon={<Envelope size={32} />}
              title="Email"
              content="contact@alexisramirez.dev"
            />
            <ContactInfo
              icon={<MapPinLine size={32} />}
              title="Location"
              content="Based in Santo Domingo, Dominican Republic"
            />
            <ContactInfo
              icon={<DevToLogo size={32} />}
              title="Social Media"
              content={
                <div className="flex space-x-4 pt-2">
                  {[
                    {
                      icon: <LinkedinLogo size={20} color="white" />,
                      link: "https://linkedin.com/in/alexis-ramirez-26388a276/",
                    },
                    {
                      icon: <GithubLogo size={20} color="white" />,
                      link: "https://github.com/Alexis0122",
                    },
                  ].map((s, index) => (
                    <a
                      key={index}
                      href={s.link}
                      target="_blank"
                      className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center hover:bg-duron/80 transition"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              }
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="bg-duron text-white rounded-xl"
      />
    </section>
  );
}

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: ReactNode;
  title: string;
  content: React.ReactNode;
}) => (
  <div className="flex items-start">
    <div className="w-10 h-10 bg-duron/10 rounded-full flex items-center justify-center mr-4 mt-1">
      {typeof icon === "string" ? <i className={icon}></i> : icon}
    </div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <div className="text-white/70">{content}</div>
    </div>
  </div>
);
