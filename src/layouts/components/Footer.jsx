import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <p>&copy; 2025 Sistem Perpustakaan. Semua hak dilindungi.</p>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-600 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Bantuan
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Kebijakan
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Kontak
          </a>
          <span className="text-green-600 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Sistem Aktif
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
