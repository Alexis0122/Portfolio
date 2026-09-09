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

const fields = [
  { name: "name", label: "Your Name", type: "text" },
  { name: "email", label: "Your Email", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
        setValues({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent successfully!");
      })
      .catch(() => {
        setStatus("error");
        toast.error("Something went wrong. Please try again.");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-transparent relative">
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-duron/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-duron-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-duron to-duron-light bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {fields.map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    required
                    value={values[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-white/10 rounded-lg text-white placeholder-transparent focus:ring-2 focus:ring-duron focus:border-duron focus:outline-none transition-all"
                    placeholder={field.label}
                  />
                  <label
                    htmlFor={field.name}
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focused === field.name || values[field.name]
                        ? "top-2 text-xs text-duron-light"
                        : "top-4 text-sm text-white/80"
                    }`}
                  >
                    {field.label}
                  </label>
                </div>
              ))}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-white/10 rounded-lg text-white placeholder-transparent focus:ring-2 focus:ring-duron focus:border-duron focus:outline-none transition-all resize-none"
                  placeholder="Your Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === "message" || values.message
                      ? "top-2 text-xs text-duron-light"
                      : "top-4 text-sm text-white/80"
                  }`}
                >
                  Your Message
                </label>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="relative group w-full overflow-hidden bg-duron text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 hover:shadow-glow-lg hover:scale-[1.02] disabled:opacity-50"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-8">
              <ContactInfo
                icon={<Envelope size={24} />}
                title="Email"
                content="Alexisramirez0122@hotmail.com"
              />
              <ContactInfo
                icon={<MapPinLine size={24} />}
                title="Location"
                content="Based in Santo Domingo, Dominican Republic"
              />
              <ContactInfo
                icon={<DevToLogo size={24} />}
                title="Social Media"
                content={
                  <div className="flex space-x-3 pt-2">
                    {[
                      {
                        icon: <LinkedinLogo size={18} weight="fill" />,
                        link: "https://linkedin.com/in/alexis-ramirez-26388a276/",
                      },
                      {
                        icon: <GithubLogo size={18} weight="fill" />,
                        link: "https://github.com/Alexis0122",
                      },
                    ].map((s, index) => (
                      <a
                        key={index}
                        href={s.link}
                        target="_blank"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-duron/20 hover:border-duron/50 hover:shadow-glow-sm transition-all hover:scale-110"
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
  <div className="flex items-start group">
    <div className="w-10 h-10 rounded-full bg-duron/10 border border-duron/20 flex items-center justify-center mr-4 mt-1 group-hover:bg-duron/20 group-hover:border-duron/40 transition-all group-hover:shadow-glow-sm shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium mb-0.5">{title}</h4>
      <div className="text-white/70 text-sm">{content}</div>
    </div>
  </div>
);
