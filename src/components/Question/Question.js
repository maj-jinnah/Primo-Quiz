import React from 'react';
import { toast } from 'react-toastify';
import './Question.css'

const Question = ({ query }) => {

    const { correctAnswer, options, question } = query
    const qus = question.replace(/(<([^>]+)>)/ig, '');
    let isAnswerCorrect;

    const isCorrect = (answer)=>{
        if(answer === correctAnswer){
            isAnswerCorrect = true
            toast.success('Yore answer is correct!')
        }
        else{
            isAnswerCorrect = false
            toast.warning('Sorry, wrong answer.')
        }
    }


    return (
        <div className='mb-10 py-10 px-5 w-3/4 mx-auto rounded-lg bg-purple-100 shadow-gray-500 shadow-xl'>
            <h2 className='text-lg text-purple-800'><span className='text-red-500 text-xl'>Question: </span> {qus}</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 my-3 gap-5 '>
                <button onClick={()=>isCorrect(options[0])} className='border border-purple py-3 rounded-lg text-white bg-purple-500 hover:bg-purple-700'>{options[0]}</button>
                <button onClick={()=>isCorrect(options[1])} className='border border-purple py-3 rounded-lg text-white bg-purple-500 hover:bg-purple-700'>{options[1]}</button>
                <button onClick={()=>isCorrect(options[2])} className='border border-purple py-3 rounded-lg text-white bg-purple-500 hover:bg-purple-700'>{options[2]}</button>
                <button onClick={()=>isCorrect(options[3])} className='border border-purple py-3 rounded-lg text-white bg-purple-500 hover:bg-purple-700'>{options[3]}</button>
            </div>
        </div>
    );
};

export default Question;