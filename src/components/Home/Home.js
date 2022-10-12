import React from 'react';
import Statistics from '../Statistics/Statistics';
import Topics from '../Topics/Topics';
import img from '../../Photo/nguyen-dang-hoang-nhu-cbEvoHbJnIE-unsplash.jpg'

const Home = () => {
    return (
        <div>
            <div className=''>
                <img src={img} alt="" className='w-full h-96 mt-8 rounded-lg'/>
                <div className='w-3/4 mx-auto'>
                    <h1 className='mt-5 text-5xl font-bold mb-3'>Welcome! to Primo Quiz</h1>
                    <p className='text-lg'>Here, you could test your skill. We have different types of topics that, could help you to test yourself. We are offering the best quality. Why you are waiting? Give it a try.</p>
                </div>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;