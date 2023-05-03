function Blog() {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Question 1:</h2>
          <p>
            <strong>
              Differences between uncontrolled and controlled components:
            </strong>
            Uncontrolled components in React are form inputs that manage their
            own state internally, while controlled components are form inputs
            that are controlled by React state. Uncontrolled components store
            their own state, and you can get their values using refs. Controlled
            components, on the other hand, rely on React state to manage their
            values, and you can access their values via the state. Controlled
            components provide more control and validation, while uncontrolled
            components can be simpler to implement.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Question 2:</h2>
          <p>
            <strong>How to validate React props using PropTypes:</strong>
            PropTypes is a package that allows you to define the types of the
            props passed to a React component. You can import PropTypes from the
            'prop-types' package and define the expected types for each prop
            using the propTypes property of the component. For example, to
            validate that a prop called 'name' is a string, you can use
            PropTypes.string.isRequired. PropTypes provides a variety of types
            and validators for props, allowing you to ensure the correct types
            and values are passed to your components.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Question 3:</h2>
          <p>
            <strong>Difference between Node.js and Express.js:</strong>
            Node.js is a runtime environment that allows you to execute
            JavaScript code outside the browser. It provides a platform for
            building server-side applications using JavaScript. Express.js, on
            the other hand, is a web application framework for Node.js. It
            provides a set of tools and utilities for building web applications
            and APIs. Express.js simplifies the process of handling HTTP
            requests, routing, middleware, and other common web application
            tasks. Node.js is the foundation on which Express.js is built.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Question 4:</h2>
          <p>
            <strong>
              What is a custom hook, and why would you create a custom hook?
            </strong>
            A custom hook is a JavaScript function that starts with the prefix
            "use" and allows you to reuse stateful logic in functional
            components. Custom hooks enable you to extract common functionality
            from components and share that logic between different components.
            By creating custom hooks, you can keep your code more organized,
            reusable, and maintainable. Custom hooks are especially useful when
            you have complex logic that needs to be shared across multiple
            components, reducing code duplication and making it easier to manage
            and test the shared logic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
