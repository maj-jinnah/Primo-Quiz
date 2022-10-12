import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicQuizDetails = () => {
    const topicQuizDetails = useLoaderData();
    const quizName = topicQuizDetails.data.name

    const questions = topicQuizDetails.data.questions
    // console.log(questions)

    return (
        <div>
            <h1 className='my-5 text-3xl font-semibold text-violet-500'>Quiz of {quizName}</h1>
            {
                questions.map( question => <Question
                    key={question.id}
                    question = {question}
                ></Question>)
            }
        </div>
    );
};

export default TopicQuizDetails;