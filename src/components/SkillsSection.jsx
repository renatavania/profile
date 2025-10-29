import React from "react";
import { ExternalLink } from "lucide-react";
import financeImg from "../assets/images/finance.png";
import eduImg from "../assets/images/edu.png";
import dataImg from "../assets/images/data.png";

const SkillsSection = () => {
  const skills = [
    { name: "Figma", icon: "🎨", description: "UI Design, Prototyping" },
    { name: "JavaScript", icon: "💛", description: "User Interface Development" },
    { name: "React", icon: "⚛️", description: "User Experience" },
    { name: "HTML & CSS", icon: "<>", description: "Responsive Design" },
  ];

  const projects = [
    {
      title: "GoFinance App",
      description:
        "Aplikasi manajemen keuangan dengan desain intuitif yang clean, modern, dan mudah digunakan untuk semua kalangan.",
      image: financeImg,
      category: "Mobile App",
    },
    {
      title: "EduSmart Landing Page",
      description:
        "Landing page untuk platform pembelajaran dengan desain modern & interaktif yang menarik.",
      image: eduImg,
      category: "Website Design",
    },
    {
      title: "DataHub Dashboard",
      description:
        "Dashboard analytics untuk tools pengolahan data yang informatif dan user-friendly.",
      image: dataImg,
      category: "Dashboard",
    },
  ];

  const testimonials = [
    {
      name: "Citra Nadya",
      role: "Product Manager, Fintech",
      text: "Renata memiliki kemampuan memahami kebutuhan tim kami dan menerjemahkannya menjadi desain yang sangat user-friendly. Komunikasi dan delivery selalu on time!",
    },
    {
      name: "Rama Putra",
      role: "CEO, StartUp.id",
      text: "Kreativitas & kecepatan kerja Renata luar biasa. Landing page yang dia kerjakan sangat modern & efektif meningkatkan konversi produk kami.",
    },
  ];

  return (
    <>
      {/* === Skills Section === */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Keahlian
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Portfolio Pilihan
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Beberapa project terbaik yang pernah saya kerjakan untuk membantu klien memvisualisasikan produk mereka.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-br from-[#BFDBFE] to-[#FCE7F3]  opacity-0.2"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-3 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Lihat Detail <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Testimonials Section === */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Testimoni Klien
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Apa kata mereka yang pernah bekerja sama dengan saya.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
