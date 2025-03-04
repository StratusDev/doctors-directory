import React from 'react';
import Header from './components/Header';
import DirectoryPage from './pages/DirectoryPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <DirectoryPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
