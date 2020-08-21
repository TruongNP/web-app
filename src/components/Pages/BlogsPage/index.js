import React, {Component} from 'react';
import Layout from '../../Layout';
import Header from '../../Header';
import BlogsTop from '../../Section/BlogsPage/BlogsTop';
import BlogsList from '../../Section/BlogsPage/BlogsList';
import Footer from '../../Footer';

class BlogsPage extends Component {

    render() {

        return (
            <Layout>
                <Header currentPage="Blogs"/>
                <BlogsTop/>
                <BlogsList/>
                <Footer/>
            </Layout>
        );
    }
}

export default BlogsPage;
