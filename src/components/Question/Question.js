import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Question.css'

const Question = ({ query }) => {

    const { correctAnswer, options, question } = query
    const qus = question.replace(/(<([^>]+)>)/ig, '');


    // const [isAnswerCorrect, setIsAnswerCorrect] = useState()
    const isCorrect = (answer) => {
        console.log(answer)
        if (answer === correctAnswer) {
            // setIsAnswerCorrect(true)
            toast.success('Yore answer is correct!')

        }
        else {
            // setIsAnswerCorrect(false)
            toast.warning('Sorry, wrong answer.')

        }
    }


    return (
        <div className='mb-10 py-10 px-4 w-3/4 mx-auto rounded-lg bg-purple-100 shadow-gray-500 shadow-xl'>
            <h2 className='text-2xl text-purple-800'>{qus}</h2>

            {
                options.map((option, idx) => <p key={idx}>
                    <button onClick={() => isCorrect(option)} className='border border-purple py-2 w-11/12 mt-3 rounded-lg text-white bg-purple-500 hover:bg-purple-700'>{option}</button>
                </p>)
            }



        </div>
    );
};

export default Question;