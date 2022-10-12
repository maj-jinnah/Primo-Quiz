import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ query }) => {

    const { correctAnswer, options, question } = query
    const qus = question.replace(/(<([^>]+)>)/ig, '');

    // const [isAnswerCorrect, setIsAnswerCorrect] = useState()
    const isCorrect = (answer) => {
        if (answer === correctAnswer) {
            // setIsAnswerCorrect(true)
            toast.success('Yore answer is correct!')
        }
        else {
            // setIsAnswerCorrect(false)
            toast.warning('Sorry, wrong answer.')
        }
    }

    const eyeButtonClick = () => {
        toast(correctAnswer, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    return (
        <div className='mb-10 mt-10 py-10 px-4 w-3/4 mx-auto rounded-lg bg-purple-100 shadow-gray-500 shadow-xl relative'>
            <h2 className='lg:text-2xl md:text-2xl sm:text-xl text-purple-800'>{qus}</h2>
            <button onClick={eyeButtonClick} className='absolute right-8 top-3 mb-1'><EyeIcon className="h-6 w-6 text-blue-500" /></button>

            {
                options.map((option, idx) => <p key={idx}>
                    <button onClick={() => isCorrect(option)} className='border border-purple py-2 px-2 w-8/12 mt-3 rounded-lg text-white bg-purple-500 hover:bg-purple-700'>{option}</button>
                </p>)
            }
        </div>
    );
};

export default Question;