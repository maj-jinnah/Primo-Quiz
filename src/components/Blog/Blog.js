import React from 'react';

const Blog = () => {
    return (
        <div className='text-left ml-10'>
            <div className='mt-10'>
                <h3 className='text-2xl font-bold'>Question 1: what is the purpose of react-router?</h3>
                <p>Ans: React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses a component structure to call components, which display the appropriate information.</p>
            </div>
            <div className='mt-10'>
                <h3 className='text-2xl font-bold'>Question 2: How does context API work?</h3>
                <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components.</p>
            </div>
            <div className='mt-10'>
                <h3 className='text-2xl font-bold'>Question 2: How does useRef() work?</h3>
                <p>Ans: The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;