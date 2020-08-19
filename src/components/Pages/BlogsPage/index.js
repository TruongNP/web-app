import React, {Component} from 'react';
import Layout from '../../Layout';
import Header from '../../Header';
import BlogsTop from '../../Section/BlogsPage/BlogsTop';

class BlogsPage extends Component {

    render() {

        return (
            <Layout>
                <Header currentPage="Blogs"/>
                <BlogsTop/>
            </Layout>
        );
    }
}

export default BlogsPage;
