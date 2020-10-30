import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Projects/>
      <Blogs/>
      <About/>
    </div>
  );
}

export default App;
