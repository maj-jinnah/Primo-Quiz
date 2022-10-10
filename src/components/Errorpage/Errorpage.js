import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={'/'}><button className='btn-home'>Go Back Home</button></Link>
        </div>
    );
};

export default Errorpage;