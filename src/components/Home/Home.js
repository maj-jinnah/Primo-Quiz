import React from 'react';
import Statistics from '../Statistics/Statistics';
import Topics from '../Topics/Topics';
import img from '../../Photo/nguyen-dang-hoang-nhu-cbEvoHbJnIE-unsplash.jpg'

const Home = () => {
    return (
        <div>
            <div className=''>
                <img src={img} alt="" className='w-full h-full mt-8 rounded-lg ' />
                <div className='relative'>
                    <h1>Welcome! to Primo Quiz.</h1>
                    <p>Here, you will test your skill. We have best quility quiz.</p>
                </div>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;