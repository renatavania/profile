import React, { useState } from "react";
import { Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Pesan berhasil dikirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-20 mb-20" id="contact">
        <div
          className="rounded-3xl p-6 sm:p-10 md:p-14 flex flex-col md:flex-row gap-10 md:gap-14 shadow-2xl mx-auto"
          style={{
            background: "linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)",
            maxWidth: "1000px",
            height: "auto",
          }}
        >
          {/* Left Side - Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Tertarik
              <br />
              Kolaborasi?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan
              produk digital yang impactful, fungsional, dan sesuai dengan
              visimu.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 text-sm">
              <a
                href="mailto:renatavaniaa6@gmail.com"
                className="text-indigo-600 flex items-center justify-center md:justify-start gap-3"
              >
                ✉️ renatavaniaa6@gmail.com
              </a>
              <a
                href="tel:085706957817"
                className="text-indigo-600 flex items-center justify-center md:justify-start gap-3"
              >
                📞 0857-0695-7817
              </a>
              <a
                href="#"
                className="text-indigo-600 flex items-center justify-center md:justify-start gap-3"
              >
                📍 Surabaya, Indonesia
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center items-center flex-1">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 space-y-5 w-full sm:max-w-[700px] md:max-w-[778px]"
              style={{
                height: "auto",
                minHeight: "324px",
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Nama"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <textarea
                placeholder="Pesan"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold shadow-md transition-all hover:shadow-lg hover:opacity-90"
                style={{
                  background: "linear-gradient(90deg, #2563EB 0%, #9333EA 100%)",
                  height: "48px",
                }}
              >
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                AP
              </div>
              <span className="font-semibold text-gray-800">Arie Pratama</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <a
                href="#about"
                className="text-sm text-gray-400 hover:text-indigo-600 transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm text-gray-400 hover:text-indigo-600 transition"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="text-sm text-gray-400 hover:text-indigo-600 transition"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-indigo-600 transition"
              >
                Contact
              </a>
            </nav>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
