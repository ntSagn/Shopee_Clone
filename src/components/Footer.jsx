import autoprefixer from 'autoprefixer';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">CHĂM SÓC KHÁCH HÀNG</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Trung Tâm Trợ Giúp</a></li>
              <li><a href="#" className="hover:text-orange-500">Shopee Blog</a></li>
              <li><a href="#" className="hover:text-orange-500">Shopee Mall</a></li>
              <li><a href="#" className="hover:text-orange-500">Hướng Dẫn Mua Hàng</a></li>
              <li><a href="#" className="hover:text-orange-500">Hướng Dẫn Bán Hàng</a></li>
              <li><a href="#" className="hover:text-orange-500">Thanh Toán</a></li>
              <li><a href="#" className="hover:text-orange-500">Shopee Xu</a></li>
              <li><a href="#" className="hover:text-orange-500">Vận Chuyển</a></li>
              <li><a href="#" className="hover:text-orange-500">Trả Hàng & Hoàn Tiền</a></li>
              <li><a href="#" className="hover:text-orange-500">Chăm Sóc Khách Hàng</a></li>
              <li><a href="#" className="hover:text-orange-500">Chính Sách Bảo Hành</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">VỀ SHOPEE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Giới Thiệu Về Shopee Việt Nam</a></li>
              <li><a href="#" className="hover:text-orange-500">Tuyển Dụng</a></li>
              <li><a href="#" className="hover:text-orange-500">Điều Khoản Shopee</a></li>
              <li><a href="#" className="hover:text-orange-500">Chính Sách Bảo Mật</a></li>
              <li><a href="#" className="hover:text-orange-500">Chính Hãng</a></li>
              <li><a href="#" className="hover:text-orange-500">Kênh Người Bán</a></li>
              <li><a href="#" className="hover:text-orange-500">Flash Sales</a></li>
              <li><a href="#" className="hover:text-orange-500">Chương Trình Tiếp Thị Liên Kết Shopee</a></li>
              <li><a href="#" className="hover:text-orange-500">Liên Hệ Với Truyền Thông</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">THANH TOÁN</h3>
            <div className="grid grid-cols-3 gap-2">
              <img src="https://static.vecteezy.com/system/resources/previews/020/975/572/original/visa-logo-visa-icon-transparent-free-png.png" alt="Visa" className="h-10" />
              <img src="/placeholder/40/24" alt="Mastercard" className="h-6" />
              <img src="/placeholder/40/24" alt="JCB" className="h-6" />
              <img src="/placeholder/40/24" alt="American Express" className="h-6" />
            </div>
            <h3 className="font-bold mt-4 mb-2">ĐƠN VỊ VẬN CHUYỂN</h3>
            <div className="grid grid-cols-3 gap-2">
              {/* Add shipping company logos here */}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">THEO DÕI CHÚNG TÔI TRÊN</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 flex items-center"><span className='mr-1'><FaFacebook/></span> Facebook</a></li>
              <li><a href="#" className="hover:text-orange-500 flex items-center"><span className='mr-1'><FaInstagram /></span> Instagram</a></li>
              <li><a href="#" className="hover:text-orange-500 flex items-center"><span className='mr-1'><FaLinkedin /> </span> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and countries */}
        <div className="border-t border-gray-200 pt-4 text-sm">
          <p>© 2024 Shopee. Tất cả các quyền được bảo lưu.</p>
          <p className="mt-2">
            Quốc gia & Khu vực: 
            {['Singapore', 'Indonesia', 'Đài Loan', 'Thái Lan', 'Malaysia', 'Việt Nam', 'Philippines', 'Brazil', 'México', 'Colombia', 'Chile'].map((country, index) => (
              <React.Fragment key={country}>
                <a href="#" className="hover:text-orange-500 ml-2">{country}</a>
                {index < 10 && <span className="mx-1">|</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
        
        {/* Policies */}
        <div className="flex justify-center space-x-4 my-4">
          <a href="#" className="text-gray-500 hover:text-orange-500">CHÍNH SÁCH BẢO MẬT</a>
          <a href="#" className="text-gray-500 hover:text-orange-500">QUY CHẾ HOẠT ĐỘNG</a>
          <a href="#" className="text-gray-500 hover:text-orange-500">CHÍNH SÁCH VẬN CHUYỂN</a>
          <a href="#" className="text-gray-500 hover:text-orange-500">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
        </div>
        
        {/* Company info */}
        <div className="text-center text-xs text-gray-500 space-y-2">
          <p>Công ty TNHH Shopee</p>
          <p>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
          <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</p>
          <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
          <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;