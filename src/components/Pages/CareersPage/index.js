import React, {Component} from 'react';
import Layout from '../../Layout';
import Header from '../../Header';
import Footer from '../../Footer';

class CareersPage extends Component {

    render() {

        return (
            <Layout>
                <Header currentPage="Careers"/>
                <h1>Careers page</h1>
                <Footer/>
            </Layout>
        );
    }
}

export default CareersPage;
