import React from 'react'

// Category Icons Component
const CategoryIcons = () => {
  const categories = [
    { name: 'Voucher Giảm Đến 1 Triệu', icon: '🎟️' },
    { name: 'Miễn Phí Ship - Có Shopee', icon: '🚚' },
    { name: 'Shopee Siêu Rẻ', icon: '💰' },
    { name: 'Shopee Style Voucher 30%', icon: '👚' },
    { name: 'Hàng Quốc Tế', icon: '🌍' },
    { name: 'Nạp Thẻ, Dịch Vụ & Vé Phim', icon: '📱' },
    { name: 'Mã Giảm Giá', icon: '🏷️' },
  ];

  return (
    <div className="flex justify-between items-center py-4">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="text-2xl mb-1">{category.icon}</span>
          <span className="text-xs text-center">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

// Product Categories Component
const ProductCategories = () => {
  const categories = [
    { name: 'Thời Trang Nam', icon: '👕' },
    { name: 'Điện Thoại & Phụ Kiện', icon: '📱' },
    { name: 'Thiết Bị Điện Tử', icon: '🖥️' },
    { name: 'Máy Tính & Laptop', icon: '💻' },
    { name: 'Máy Ảnh & Máy Quay Phim', icon: '📷' },
    { name: 'Đồng Hồ', icon: '⌚' },
    { name: 'Giày Dép Nam', icon: '👞' },
    { name: 'Thiết Bị Điện Gia Dụng', icon: '🔌' },
    { name: 'Thể Thao & Du Lịch', icon: '⚽' },
    { name: 'Ô Tô & Xe Máy & Xe Đạp', icon: '🚗' },
    { name: 'Thời Trang Nữ', icon: '👚' },
    { name: 'Mẹ & Bé', icon: '👶' },
    { name: 'Nhà Cửa & Đời Sống', icon: '🏠' },
    { name: 'Sắc Đẹp', icon: '💄' },
    { name: 'Sức Khỏe', icon: '💪' },
    { name: 'Giày Dép Nữ', icon: '👠' },
    { name: 'Túi Ví Nữ', icon: '👜' },
    { name: 'Phụ Kiện & Trang Sức Nữ', icon: '💍' },
    { name: 'Bách Hóa Online', icon: '🛒' },
    { name: 'Nhà Sách Online', icon: '📚' },
  ];

  return (
    <div className="grid grid-cols-10">
      {categories.map((category, index) => (
        <a href='#' key={index} className="flex flex-col items-center border-solid border-gray-100 hover:scale-105" style={{borderWidth:'1px'}}>
          <span href='#' className="text-4xl mb-2">{category.icon}</span>
          <span href='#' className="text-sm text-center">{category.name}</span>
        </a>
      ))}
    </div>
  );
};
export { CategoryIcons, ProductCategories }