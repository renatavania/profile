import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">
        <div
          className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-start gap-8 w-full md:w-[1024px] md:h-[384px]"
        >
          {/* Avatar */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl md:text-5xl">👤</span>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Tentang Saya
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Saya seorang <b>UI/UX Designer & Web Developer</b> berpengalaman di
              Jakarta dengan pengalaman lebih dari 5 tahun di industri kreatif.
              Misi saya adalah memudahkan setiap orang dalam berinteraksi dengan
              produk yang tidak hanya indah secara visual, tapi juga mudah
              digunakan dan berdampak positif.
            </p>

            {/* Daftar keahlian */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span> Problem Solver
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span> Team Player
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span> Fast Learner
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span> Kreatif & Adaptif
              </div>
            </div>

            {/* Tombol konsultasi */}
            <div className="flex justify-center md:justify-start">
              <button
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition w-full sm:w-[400px] md:w-[760px]"
                style={{
                  height: "40px",
                }}
              >
                📄 Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
