import React from "react";

const Blogs = () => {
  return (
    <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
      <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
        <h1 className="text-2xl font-bold">
          What are the different ways to manage a state in a React application?
        </h1>
        <br />
        <p>
          In React apps, there are at least seven ways to handle the state. Let us briefly explore a
          few of them in this part. URL We can use URL to store some data e.g. The id of the current
          item, being viewed Filter parameters Pagination offset and limit Sorting data Keeping such
          data in the URL allows users to share deep links with others. It is recommended to avoid
          storing such information in the app’s state to avoid the URL in our app getting out of
          sync. The URL should be used as the system of record, Read from it as needed for
          information related to sorting, pagination, etc. Update the URL as required when the
          settings change.
        </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
        <h1 className="text-2xl font-bold">How does prototypical inheritance work?</h1>
        <br />
        <p>
          Every object with its methods and properties contains an internal and hidden property
          known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object can inherit the
          properties and methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
          Nowadays, in modern language, it is being set using __proto__.
        </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
        <h1 className="text-2xl font-bold">What is a unit test? Why should we write unit tests?</h1>
        <br />
        <p>
          Unit testing is a software development process in which the smallest testable parts of an
          application, called units, are individually and independently scrutinized for proper
          operation. This testing methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing is to isolate
          written code to test and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can help detect early flaws
          in code which may be more difficult to find in later testing stages. Unit testing is a
          component of test-driven development (TDD), a pragmatic methodology that takes a
          meticulous approach to building a product by means of continual testing and revision. This
          testing method is also the first level of software testing, which is performed before
          other testing methods such as integration testing. Unit tests are typically isolated to
          ensure a unit does not rely on any external code or functions. Testing can be done
          manually but is often automated.
        </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 lg:m-5 lg:p-5">
        <h1 className="text-2xl font-bold">
        React vs. Angular vs. Vue?
        </h1>
        <br />
        <p>
          <strong>React :</strong>
          <br />
          React offers a Getting Started guide that should help one set up React in about an hour.
          The documentation is thorough and complete, with solutions to common issues already
          present on Stack Overflow. React is not a complete framework and advanced features require
          the use of third-party libraries. This makes the learning curve of the core framework not
          so steep but depends on the path you take with additional functionality. However, learning
          to use React does not necessarily mean that you are using the best practices.
          <br />
          <br />
          <strong>Angular :</strong>
          <br />
          Angular has a steep learning curve, considering it is a complete solution, and mastering
          Angular requires you to learn associated concepts like TypeScript and MVC. Even though it
          takes time to learn Angular, the investment pays dividends in terms of understanding how
          the front end works.
          <br />
          <br />
          <strong>Vue :</strong>
          <br />
          Vue provides higher customizability and hence is easier to learn than Angular or React.
          Further, Vue has an overlap with Angular and React with respect to their functionality
          like the use of components. Hence, the transition to Vue from either of the two is an easy
          option. However, simplicity and flexibility of Vue is a double-edged sword — it allows
          poor code, making it difficult to debug and test.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
