import React, { useState, useEffect } from 'react';
import { getProductData } from '../api/ProductAPI';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ListProductShop() {
  // Product Shop Component

}

const ListProductFlashSale = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductData();
        setProducts(data.products); // Access the products array from the data object
        console.log('Products:', data.products); // Debugging line to check the fetched data
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Slide Flash Sale Products
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : Math.ceil(products.length / 6) - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < Math.ceil(products.length / 6) - 1 ? prevSlide + 1 : 0));
  };

  const startIndex = currentSlide * 6;
  const endIndex = startIndex + 6;
  const visibleProducts = products.filter((product) => product.discountPercentage > 0).slice(startIndex, endIndex);

  return (
    <div className='relative'>
      <div className='grid grid-cols-6 mb-10 items-center'>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product, index) => (

            <div key={index}>
              {(
                <a href='#' className='h-56 flex flex-col items-center w-40'>
                  <img width={150} src={product.thumbnail} alt={product.title} />
                  <div className='text-center font-semibold text-orange-500 truncate w-full'><span>{product.title}</span></div>
                  <div className='text-center line-through'>{product.price}$</div>
                  <div className='text-center font-bold text-red-500'>{(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}$</div>
                </a>
              )}
            </div>

          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>

      {/* Navigation Buttons */}
      {
        products.length > 6 && (
          <>
            <button
              onClick={handlePrevSlide}
              className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 hover:scale-150 transition-all'
            >
              <ChevronLeft size={12} />
            </button>
            <button
              onClick={handleNextSlide}
              className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 hover:scale-150 transition-all'
            >
              <ChevronRight size={12} />
            </button>
          </>
        )}
    </div>
  );
}

export default ListProductFlashSale;