import React from "react";
import { MapPin } from "lucide-react";
import profileImg from "../assets/images/profile.png";

const ProfileCard = () => {
  return (
    <section
      className="min-h-screen pt-[200px] pb-16 bg-gradient-to-r from-[#BFDBFE] via-[#F3E8FF] to-[#FCE7F3] relative overflow-hidden"
    >
      <div
        className="rounded-full bg-gradient-to-br from-[#60A5FA] to-[#A855F7]"
        style={{
          width: "240px",
          height: "240px",
          position: "absolute",
          top: "140px",
          left: "40px",
          opacity: "0.2",
        }}
      ></div>

      {/* Konten utama */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Bagian teks kiri */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-reguler text-gray-400 mb-2">
              Halo, Saya
            </h2>
            <h1 className="text-5xl font-bold text-black mb-4">
              Renata Vania Yuniastita
            </h1>

            <div
              className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white px-4 py-2 
                         rounded-full text-sm font-medium mb-6 border border-[#E5E7EB] 
                         w-[295.45px] h-[32px] shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
            >
              UI/UX Designer & Web Developer
            </div>

            <p className="text-gray-600 max-w-md mb-8 mx-auto md:mx-0">
              Membantu brand dan bisnis membangun produk digital yang impactful
              lewat desain yang baik, modern, dan user-centric.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Lihat Karya
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                Hubungi Saya
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl z-10">
              <MapPin className="w-6 h-6 text-blue-500" />
            </div>
            <img
              src={profileImg}
              alt="Renata Vania Yuniastita"
              className="w-72 h-80 object-cover rounded-3xl border-8 border-white shadow-2xl relative z-0"
            />
            <div
              className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl z-10"
              style={{
                background:
                  "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
              }}
            >
              🚀
              <div
              className="rounded-full bg-gradient-to-br from-[#60A5FA] to-[#F472B6]"
              style={{
                width: "250px",
                height: "250px",
                position: "absolute",
                top: "10px",
                left: "40px",
                opacity: "0.2",
              }}
            ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
