import React, {Component} from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Home from './components/Section/Home';
import Services from './components/Section/Services';
import Projects from './components/Section/Projects';
import About from './components/Section/About';
import Contact from './components/Section/Contact';
import './App.scss';

class App extends Component {

  render() {
    return (
      <Layout>
        <Header/>
        <Home/>
        <Services/>
        <Projects/>
        <About/>
        <Contact/>
      </Layout>
      
    );
  }
}

export default App;
