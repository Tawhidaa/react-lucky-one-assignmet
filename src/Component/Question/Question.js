import React from 'react';
import "./Question.css"
const Question = () => {
    return (
        <div className="question-container">
        <div className="simple-question">
          <div className="question-cart">
            <h3>How React Works?</h3>
            <p>
              React works by using a virtual representation of the browser's Document Object Model (DOM), called the Virtual DOM. It efficiently updates the UI by comparing the previous and current versions of the Virtual DOM and applying the necessary changes to the actual DOM.Each component manages its own state and can receive data through props. React components have a render method that describes what the UI should look like. React enforces a one-way data flow, where data is passed from parent components to child components through props.
            </p>
          </div>
          <div className="question-cart">
            <h3>Difference Between State Vs Pops in React. </h3>
            <p>
             In React, both state and props are used to manage and pass data within components, but they have some fundamental differences:
             State:
             State is a built-in feature of React components and is managed internally by the component itself.It represents the mutable data that can be changed over time and affects the component's behavior and rendering.
             Props:
             Props (properties) are inputs passed to a component from its parent component.Props are read-only and cannot be modified by the component receiving them.
            They represent the data that a parent component wants to pass down to its child components.
            </p>
          </div>
          <div className="question-cart">
            <h3>How useState Work?</h3>
            <p>
            useState is a React hook that allows functional components to manage state. Here's a short explanation of how it works:
             Inside the functional component, call useState and provide an initial value for the state variable. It returns an array with two elements: the current state value and a function to update the state.Accessing State: You can access the current state value (state) in your component's JSX or within its functions.It provides a simple way to declare and manage state in functional components, enabling you to create dynamic and interactive UIs.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Question;