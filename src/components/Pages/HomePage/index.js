import React, {Component} from 'react';
import Layout from '../../Layout';
import Header from '../../Header';
import Home from '../../Section/HomePage/Home';
import Services from '../../Section/HomePage/Services';
import Projects from '../../Section/HomePage/Projects';
import About from '../../Section/HomePage/About';
import Contact from '../../Section/HomePage/Contact';
import Footer from '../../Footer';

class HomePage extends Component {

    render() {

        return (
            <Layout>
                <Header currentPage="Home"/>
                <Home/>
                <Services/>
                <Projects/>
                <About/>
                <Contact/>
                <Footer/>
            </Layout>
        );
    }
}

export default HomePage;
