import React from 'react';
import './Errorpage.css'

const Errorpage = () => {
    return (
        <div>
            <div className='error'>
                <h1 className='number'>404</h1>
                <div className='text'>
                    <h1 className='page'>Page Not Found!</h1>
                    <p>Please, check the URL in the address bar and try again.</p>
                </div>
            </div>
            <button className='btn-home'>Go Back Home</button>
        </div>
    );
};

export default Errorpage;