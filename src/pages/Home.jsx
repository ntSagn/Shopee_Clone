import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerSlider from '../components/BannerSlider';
import { CategoryIcons, ProductCategories } from '../components/Categories';



// Main Home Component
const Home = () => {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4'>
        <BannerSlider />
        <CategoryIcons />
        <h2 className="text-lg font-bold my-4">DANH MỤC</h2>
        <ProductCategories />
      </div>
      <Footer />
    </div>
  );
};

export default Home;