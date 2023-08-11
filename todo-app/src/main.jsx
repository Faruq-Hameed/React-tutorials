import React from 'react';
import ReactDom from 'react-dom/client';

import TodoApp from "@/components/TodoApp";


const domContainer = document.getElementById("root")
const root = ReactDom.createRoot(domContainer)

root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);