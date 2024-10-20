import { React, useState, useEffect } from 'react';
import ListProductFlashSale from '../components/Product';


const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const calculateTimeLeft = () => {
        const now = new Date();
        const endTime = new Date();
        endTime.setHours(23, 59, 59, 999);

        const difference = +endTime - +now;
        if (difference < 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        console.log(hours, minutes, seconds);
        return { hours, minutes, seconds };
    }
    return (
        <div className='mt-4'>
            <div className='flex justify-between'>
                <div className='text-orange-500 mb-5 text-3xl'>Flash Sale <span className='text-xl text-white bg-black'>{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</span></div>
                <a href='#' className='text-orange-500'>Xem tất cả </a>
            </div>
            <ListProductFlashSale />
        </div>
    );
}
export default FlashSale;