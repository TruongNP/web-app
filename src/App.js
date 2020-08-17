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

  constructor(props) {
    super(props);

    this.state = {
      isActive: ""
    }

    this.handleScroll = this.handleScroll.bind(this);
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = e => {
    const position = window.pageYOffset;
        const header = document.getElementById("header");
        const posHeader = header.offsetTop;

        const scroll = position > posHeader ? 'scroll-active' : '';
        this.setState({
            isActive: scroll
        });
};

  render() {
    return (
      <Layout>
        <Header isActive={this.state.isActive }/>
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
