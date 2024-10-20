import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerSlider from '../components/BannerSlider';
import { CategoryIcons, ProductCategories } from '../components/Categories';
import FlashSale from '../components/FlashSale';


// Main Home Component
const Home = () => {
  return (
    <div className='bg-white'>
      <Header />
      <div className='container mx-auto px-4'>
        <BannerSlider />
        <CategoryIcons />
        <h2 className="text-lg font-bold my-4">DANH MỤC</h2>
        <ProductCategories />
        <FlashSale />
        <a href="#"  className="w-full"><img src="https://cf.shopee.vn/file/sg-11134252-7rdwm-m1i5nzg8t7m11e" alt="Banner" /></a>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;