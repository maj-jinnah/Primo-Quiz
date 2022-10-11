import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const topicsData = useLoaderData()
    const topics = topicsData.data
    // console.log(topics)
    return (
        <div >
            {/* <ResponsiveContainer width='90%' height={500} className='mx-auto'>
                <LineChart width={600} height={300} data={topics} margin={{ top: 50, right: 20, bottom: 50, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer> */}
        </div >
    );
};

export default Statistics;