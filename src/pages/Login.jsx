import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#ee4d2d] flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-md flex justify-between items-center mb-8">
        <div className="flex items-center text-white">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 54 61" fill="white">
            <path d="M51.2 16.9H38.7C38.7 11.6 36 .6 27 .5 17.4.4 15.2 12.4 15.2 16.9H2.8c-3.4 0-2.7 3.4-2.7 3.4l2.4 33s-.3 7.3 2.8 7.7h45.3c3.1-.4 2.8-7.7 2.8-7.7l2.4-33c0-.1.7-3.5-2.8-3.4zM27.1 4.2c7.8.4 7.8 11.7 7.8 12.6H19.1c0-1 0-12.2 8-12.6zM26 49.6c-5.8 0-10.5-4.7-10.5-10.5S20.2 28.6 26 28.6s10.5 4.7 10.5 10.5S31.8 49.6 26 49.6z" />
          </svg>
          <span className="text-2xl font-semibold">Shopee</span>
          <span className="ml-2 text-xl">Đăng nhập</span>
        </div>
        <a href="#" className="text-white hover:underline">Bạn cần giúp đỡ?</a>
      </header>

      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex mb-4">
          <button className="flex-1 py-2 px-4 bg-white text-[#ee4d2d] border-b-2 border-[#ee4d2d] font-semibold">Đăng nhập</button>
          <button className="flex-1 py-2 px-4 text-gray-500">Đăng nhập với mã QR</button>
        </div>

        <form>
          <input
            type="text"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            className="w-full p-3 border rounded mb-4"
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              className="w-full p-3 border rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className="w-full bg-[#ee4d2d] text-white py-3 rounded font-semibold mb-4">
            ĐĂNG NHẬP
          </button>
        </form>

        <div className="flex justify-between text-[#05a] text-sm mb-4">
          <a href="#" className="hover:underline">Quên mật khẩu</a>
          <a href="#" className="hover:underline">Đăng nhập với SMS</a>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500">HOẶC</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex space-x-4 mb-4">
          <button className="flex-1 py-2 px-4 border border-gray-300 rounded-sm flex items-center justify-center">
            <FaFacebookF className="text-blue-600 mr-2" />
            <span>Facebook</span>
          </button>
          <button className="flex-1 py-2 px-4 border border-gray-300 rounded-sm flex items-center justify-center">
            <FcGoogle className="mr-2" />
            <span>Google</span>
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Bạn mới biết đến Shopee? <a href="#" className="text-[#ee4d2d] hover:underline"><Link to="/signup">Đăng ký</Link></a>
        </p>
      </main>
    </div>
  );
};

export default Login;