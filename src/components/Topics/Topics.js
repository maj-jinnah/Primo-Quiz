import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topicsData = useLoaderData()
    const topics =topicsData.data

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-6 my-10 gap-3'>
            {
                topics.map(topic => <Topic key={topic.id} topic= {topic}></Topic>)
            }
        </div>
    );
};

export default Topics;