import React from "react";

export default function ContactSection() {
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
          <form className="space-y-6">
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-white/80 mb-1 capitalize"
                >
                  {field}
                </label>
                <input
                  type="text"
                  id={field}
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
                rows={5}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-duron focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-duron text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-500 transition"
            >
              Send Message
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
              icon="fas fa-envelope"
              title="Email"
              content="contact@alexisramirez.dev"
            />
            <ContactInfo
              icon="fas fa-map-marker-alt"
              title="Location"
              content="Based in Santo Domingo, Dominican Republic"
            />
            <ContactInfo
              icon="fas fa-globe"
              title="Social Media"
              content={
                <div className="flex space-x-4 pt-2">
                  {[
                    {
                      icon: "fab fa-linkedin-in",
                      link: "https://linkedin.com/in/alexis-ramirez-26388a276/",
                    },
                    {
                      icon: "fab fa-github",
                      link: "https://github.com/Alexis0122",
                    },
                    {
                      icon: "fab fa-twitter",
                      link: "#",
                    },
                  ].map((s) => (
                    <a
                      key={s.icon}
                      href={s.link}
                      target="_blank"
                      className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center hover:bg-duron/80 transition"
                    >
                      <i className={`${s.icon} text-white`}></i>
                    </a>
                  ))}
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: React.ReactNode;
}) => (
  <div className="flex items-start">
    <div className="w-10 h-10 bg-duron/10 rounded-full flex items-center justify-center mr-4 mt-1">
      <i className={`${icon} text-duron`}></i>
    </div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <div className="text-white/70">{content}</div>
    </div>
  </div>
);
