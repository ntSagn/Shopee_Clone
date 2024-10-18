import React from 'react';
import { Search, ShoppingCart, Bell, HelpCircle, Globe } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#ee4d2d] text-white">
      <div className="container mx-auto px-4">
        {/* Top navigation */}
        <nav className="flex justify-between text-sm py-1">
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-80">Kênh Người Bán</a>
            <a href="#" className="hover:opacity-80">Trở thành Người bán Shopee</a>
            <a href="#" className="hover:opacity-80">Tải ứng dụng</a>
            <a href="#" className="hover:opacity-80 flex justify-between items-center">Kết nối<span className='pl-1'><FaFacebook /></span></a>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="flex items-center hover:opacity-80">
              <Bell className="w-4 h-4 mr-1" />
              Thông Báo
            </a>
            <a href="#" className="flex items-center hover:opacity-80">
              <HelpCircle className="w-4 h-4 mr-1" />
              Hỗ Trợ
            </a>
            <a href="#" className="flex items-center hover:opacity-80">
              <Globe className="w-4 h-4 mr-1" />
              Tiếng Việt
            </a>
            <a href="#" className="hover:opacity-80">Đăng Ký</a>
            <a href="#" className="hover:opacity-80">Đăng Nhập</a>
          </div>
        </nav>
        
        {/* Main header */}
        <div className="flex items-center py-4">
          <a href="#" className="text-3xl font-bold mr-8">Shopee</a>
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
                className="w-full py-2 px-4 rounded-sm text-black"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-[#fb5533] px-4 rounded-r-sm">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="ml-8">
            <ShoppingCart className="w-8 h-8" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;