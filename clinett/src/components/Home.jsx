import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import MoreDetails from './MoreDetails';

const Home = () => {
    return (
        <div className="p-relative  w-screen" style={{ backgroundColor: '#15202b' }}>
            <div className="flex  flex-row  gap-12 ">
                <dev className=" flex
                justify-center">
                    <Navbar />

                </dev>
                <div role="main">
                    <div className="flex ">
                        <div className=''>
                            <HeroSection />
                        </div>

                        <div className=" mr-96">
                            <MoreDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
