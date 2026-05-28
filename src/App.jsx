import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
    </LanguageProvider>
  );
}

export default App;