import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './layout/footer/footer';
import reportWebVitals from './reportWebVitals';
import Layout from './layout/layout';
import Navbar from './layout/navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Navbar />
      <App />
      <Footer />
    </Layout>
  </React.StrictMode>
);

reportWebVitals();
