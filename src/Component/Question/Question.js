import React from 'react';
import "./Question.css"
const Question = () => {
    return (
        <div className="question-container">
        <div className="simple-question">
          <div className="question-cart">
            <h3>How React Works?</h3>
            <p>
              React works by using a virtual representation of the browser's Document Object Model (DOM), called the Virtual DOM. It efficiently updates the UI by comparing the previous and current versions of the Virtual DOM and applying the necessary changes to the actual DOM. React follows a component-based approach, where the UI is broken down into reusable components. Each component manages its own state and can receive data through props. React components have a render method that describes what the UI should look like. React enforces a one-way data flow, where data is passed from parent components to child components through props.
            </p>
          </div>
          <div className="question-cart">
            <h3>Difference Between State Vs Pops in React. </h3>
            <p>
             In React, both state and props are used to manage and pass data within components, but they have some fundamental differences:
             State:
             1. State is a built-in feature of React components and is managed internally by the component itself.
             2. It represents the mutable data that can be changed over time and affects the component's behavior and rendering.
             3. State changes trigger the re-rendering of the component and its child components, allowing the UI to reflect the updated state.
             Props:
             1. Props (short for properties) are inputs passed to a component from its parent component.
             2. Props are read-only and cannot be modified by the component receiving them.
             3. They represent the data that a parent component wants to pass down to its child components.
             4. Props are defined when a component is invoked, and their values are determined by the parent component.
            </p>
          </div>
          <div className="question-cart">
            <h3>How useState Work?</h3>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    );
};

export default Question;