import React, { useState } from 'react';

// import React from 'react';

// // Function that takes React.FC as a parameter
// const renderComponent = (Component: React.FC) => {
//   return (
//     <div>
//       <h2>This is a component passed as a parameter:</h2>
//       <Component />
//     </div>
//   );
// };

// // Function that returns React.FC as a type
// const createComponent: () => React.FC = () => {
//   // Your component logic goes here
//   const DynamicComponent: React.FC = () => {
//     return <p>This is a dynamically created component!</p>;
//   };

//   return DynamicComponent;
// };

// // Example usage
// const MyComponent: React.FC = () => {
//   return <p>Hello, I'm a component!</p>;
// };

// const RenderedComponent = renderComponent(MyComponent);
// const GeneratedComponent = createComponent();

// const App: React.FC = () => {
//   return (
//     <div>
//       {RenderedComponent}
//       {GeneratedComponent()}
//     </div>
//   );
// };

// export default App;

const MyComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
