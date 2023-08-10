import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.render(
//   <App />, document.getElementById('root')
// );

// ReactDOM.createRoot(document.getElementById('root')).render(<h1>Hello again</h1>)
// ReactDOM.createRoot(document.getElementById('root')).render( <App />)
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)

const myElement = (
  <table>
    <thead>
      <tr>
      <th>Name</th>
    </tr>
    </thead>
    <tbody>
      <tr>
      <td>Faruq</td>
    </tr>
    <tr>
      <td>Hameed</td>
    </tr>
    </tbody>
    
  </table>
);

const betterElement = <h1>React is {5 + 5} times better with JSX </h1>
root.render(betterElement)

const fruitElements = (
  <ul>
    <li>Pawpaw</li>
    <li>Mango</li>
    <li>Cherry</li>
  </ul>
);
//using fragment to wrap elements in JSX
const fruitElement2 = (
  <>
    <h1>Pawpaw</h1>
    <h1>Mango</h1>
    <h1>Cherry</h1>
   </>
);
root.render(fruitElement2)

root.render(fruitElement2)












