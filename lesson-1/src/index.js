// =========================== Repeta ===========================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ===================================================================================

// import React from 'react';
// import ReactDOM from 'react-dom';

// ===================================================================================

// const elem1 = React.createElement('span', { children: 'Hello' });
// const elem2 = React.createElement('span', { children: 'world' });

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, ' ', elem2],
// });

// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

// ==================================================================================

// const elem1 = <span>Hello</span>;
// const elem2 = <span>world</span>;

// const element = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

// ==================================================================================

// const paiting = (
//   <div>
//     <img src="" alt="" width="480" />
//     <h2></h2>
//     <p>
//       Author: <a href=""></a>
//     </p>
//     <p>Price: $</p>
//     <p>Available: On Sale or Ended</p>
//     <button type="button">Add to basket</button>
//   </div>
// );

// ReactDOM.render(paiting, document.querySelector('#root'));

// ==================================================================================

// function Painting(props) {
//   console.log(props);
//   return (
//     <div>
//       <img src="" alt="" width="480" />
//       <h2></h2>
//       <p>
//         Author: <a href=""></a>
//       </p>
//       <p>Price: $</p>
//       <p>Available: On Sale or Ended</p>
//       <button type="button">Add to basket</button>
//     </div>
//   );
// }

// ReactDOM.render(<Painting a="5" b={10} />, document.querySelector('#root'));

// ==================================================================================
// import App from './App';

// ReactDOM.render(<App/>, document.querySelector('#root'));

// =========================== Repeta ===========================

// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================

// =========================== Aliev-Lomach ===========================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Card } from './components/Card';

// import './index.css';

// =================================================================

// const root = document.getElementById('root');

// const paragraph = React.createElement('p', {
//   id: 'test-P-Id',
//   children: ['I am P'],
// });

// const div = React.createElement('div', {
//   name: 'main',
//   id: 'test-Id',
//   className: 'test-className',
//   children: ['Hello', ' ', 'React', ' ', 'from', ' ', 'UA', paragraph],
// });
// console.log(div);

// ReactDOM.createRoot(root).render(div);

// =================================================================

// const root = document.getElementById('root');

// const p = <p id="test-Id">I am P</p>;

// const div = (
//   <div name="main" id="test-Id" className="test-className">
//     {p}
//   </div>
// );

// console.log(div);

// ReactDOM.createRoot(root).render(div);

// =================================================================

// ReactDOM.createRoot(document.getElementById('root')).render(<Card />);