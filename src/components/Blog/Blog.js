import React from "react";
import "./Blog.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Blog = () => {
  return (
    <div className="blog container">
      <h2 className="fw-bold">Questions and Answers</h2>
      <div className="qa">
        <h3 className="fw-bold">Q1. What is the purpose of react router?</h3>
        <p>
          <ChevronRightIcon className="icon" /> React Router is a standard
          library for routing in React. It enables the navigation among views of
          various components in a React Application, allows changing the browser
          URL, and keeps the UI in sync with the URL. <br />
          Whenever you click on an anchor tag, it reloads and redirects you to
          another page, but using react router we can navigate to another
          component or page without even reloading. That is the power of react.
        </p>
      </div>
      <div className="qa">
        <h3 className="fw-bold">Q2. How does the Context API work?</h3>
        <p>
          <ChevronRightIcon className="icon" /> The React Context API is a way
          for a React app to effectively produce global variables that can be
          passed around. This is the alternative to "prop drilling" or moving
          props from grandparent to child to parent, and so on. Context is also
          touted as an easier, lighter approach to state management using Redux.{" "}
          <br />
          <br />
          We need react.createContext() to create a context whose value could be
          anything primitive or non-primitive. Then, we wrap our parent
          component with the provider so that every child component inside the
          parent can get the context values. To get the values in the child
          component we have to get the values and for that we use useContext()
          hook to provide us the value. Then we can use the value.
        </p>
      </div>
      <div className="qa">
        <h3 className="fw-bold">Q3. Explain the useRef hook.</h3>
        <p>
          <ChevronRightIcon className="icon" />
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly. <br />
          The useRef hook is the new addition in React 16.8. The useRef is a
          hook that allows to directly create a reference to the DOM element in
          the functional component. <br />
          To create a hook we have to create a useRef value
          <br />
          <code>const refContainer = useRef(initialValue);</code> <br />
          The useRef returns a mutable ref object. This object has a property
          called .current. The value is persisted in the refContainer.current
          property. These values are accessed from the current property of the
          returned object. The .current property could be initialised to the
          passed argument initialValue e.g. useRef(initialValue). The object can
          persist a value for a full lifetime of the component.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
