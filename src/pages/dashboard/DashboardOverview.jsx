import React from "react";
import {
  BookOpen,
  Users,
  BookMarked,
  Calendar,
  TrendingUp,
} from "lucide-react";

function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Gambaran Umum Perpustakaan
      </h2>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Buku</p>
              <p className="text-2xl font-semibold text-gray-900">2,847</p>
            </div>
            <BookOpen className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Anggota Aktif</p>
              <p className="text-2xl font-semibold text-gray-900">1,239</p>
            </div>
            <Users className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Buku Dipinjam</p>
              <p className="text-2xl font-semibold text-gray-900">456</p>
            </div>
            <BookMarked className="text-orange-500" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Terlambat</p>
              <p className="text-2xl font-semibold text-gray-900">23</p>
            </div>
            <Calendar className="text-red-500" size={24} />
          </div>
        </div>
      </div>

      {/* Recent Activity & Popular Books */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Peminjaman Terbaru</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Buku Contoh {item}</p>
                    <p className="text-xs text-gray-500">Anggota {item}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">2 jam lalu</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Buku Populer</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Judul Buku {item}</p>
                    <p className="text-xs text-gray-500">
                      Dipinjam {item * 15} kali
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
