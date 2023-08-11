import React from "react";

import Header from "@/components/Header";
import TodoLogic from "@/components/TodosLogic";

// const TodoApp = () => {
//   return (
//     <React.Fragment>
//       <h1>Hello world!</h1>
//       <p>I am in a React Component!</p>
//     </React.Fragment>
//   );
// };

const TodoApp = () => {
  return (
    <>
      <Header />
      <TodoLogic />
    </>
  );
};

export default TodoApp;
