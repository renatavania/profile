import React from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo dan nama */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">AP</span>
          </div>
          <span className="font-bold text-gray-800">Arie Pratama</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">
            Skills
          </a>
          <a href="#portofolio" className="text-gray-600 hover:text-blue-600 transition">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">
            Contact
          </a>
        </div>
        <div className="flex gap-3">
          <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer transition" />
          <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition" />
          <Mail className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
