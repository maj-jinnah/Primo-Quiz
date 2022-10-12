import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicQuizDetails = () => {
    const topicQuizDetails = useLoaderData();
    const quizName = topicQuizDetails.data.name

    const questions = topicQuizDetails.data.questions

    return (
        <div className='mt-10'>
            <h1 className='my-5 text-4xl font-semibold text-violet-500'>Quiz of {quizName}</h1>
            {
                questions.map( query => <Question
                    key={query.id}
                    query = {query}
                ></Question>)
            }
        </div>
    );
};

export default TopicQuizDetails;