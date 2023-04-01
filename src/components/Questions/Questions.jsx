import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <h1>Question 1: Props vs state</h1>
            <p>Props are inputs to a React component that are passed from its parent component.
            They are used to customize the behavior and appearance of a component based on the values passed in from the parent. 
            State can be used to keep track of things like user input, component state changes, and API responses.
            It is an internal data store of a component that can be modified.
            </p>

            <h1>Question 2: How does useState work?</h1>
            <p>useState is a built-in hook in React that allows functional components to manage state. It returns an array containing two values: the current state value and a function to update that value.</p>

            <h1>Question 3:  Purpose of useEffect other than fetching data.</h1>
            <p>useEffect is a built-in hook in React that allows functional components to perform side effects, such as updating the document title, subscribing to events, or interacting with external APIs. While useEffect is commonly used for fetching data, it can be used for a variety of other purposes as well.

            </p>

            <h1>question 4: How Does React work?</h1>
            <p>React is a JavaScript library for building user interfaces. It uses a component-based architecture to break down the UI into small, reusable building blocks called components. React uses a virtual DOM to optimize updates</p>
        </div>
    );
};

export default Questions;