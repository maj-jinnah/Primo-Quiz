import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic
    return (
        <div>
            <div className='border-2 p-2 rounded-lg'>
                <div>
                    <img className='h-4/5 w-full mx-auto  bg-slate-400 rounded-lg' src={logo} alt="" />
                </div>
                <div className='flex justify-between pt-2 items-center'>
                    <h3 className='text-violet-700 font-bold'>{name}</h3>
                    <p>Quiz: {total}</p>
                    <button className='bg-violet-600 px-2 py-2 rounded-md text-white hover:bg-blue-700'>
                        <Link to={`/topic/${id}`}>Start Practice</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topic;