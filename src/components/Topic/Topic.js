import React from 'react';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic
    return (
        <div>
            <div className='border-2 p-2 rounded-lg'>
                <div>
                    <img className='h-4/5 w-full mx-auto  bg-slate-400 rounded-lg' src={logo} alt="" />
                </div>
                <div className='flex justify-between pt-2 items-center'>
                    <h3>{name}</h3>
                    <p>Total Quiz: {total}</p>
                    <button className='bg-violet-600 px-2 py-2 rounded-md text-white hover:bg-blue-700'>Start Practice</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;