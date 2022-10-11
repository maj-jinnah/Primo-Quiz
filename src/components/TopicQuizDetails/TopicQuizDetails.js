import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicQuizDetails = () => {
    const topicQuizDetails = useLoaderData();
    const questionsDetails = topicQuizDetails.data.questions
    console.log(questionsDetails);

    return (
        <div>
            <h1>quiz are here</h1>
        </div>
    );
};

export default TopicQuizDetails;