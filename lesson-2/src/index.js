// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from './components/repeta/App/App';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from 'constans/theme';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <ThemeProvider theme={theme}>
//     <App />
//   </ThemeProvider>
// );

// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/aliev-lomach/App'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================

// import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/ovdienko/App';
import { heroes, randomizeStatuses, sortHeroes } from './heroes';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(<App data={sortHeroes(heroes)} />);
}

renderApp();

// setInterval(() => {
//   randomizeStatuses();
//   renderApp();
// }, 5000);
