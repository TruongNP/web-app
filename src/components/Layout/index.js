import React, {Component} from 'react';
import { HeadProvider, Title } from 'react-head';
import PropTypes from 'prop-types';

class Layout extends Component {

    render() {
        const { children, title = 'My App | React' } = this.props;

        return (
            <div>
                <HeadProvider>
                    <Title>{ title }</Title>
                </HeadProvider>
                { children }
            </div>
        );
    }
}

export default Layout;

Layout.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
};