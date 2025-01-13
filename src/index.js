import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Favoritos from './routes/Favoritos';
import { SnackbarProvider } from 'notistack';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <SnackbarProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  </>
);
reportWebVitals();
