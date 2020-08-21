import React from 'react';

const Empty = ({ currentBlogList }) => {

    if(currentBlogList === 0) {
        return (
            <h5 className="mt-5 text-dark text-center">Not found data!</h5>
        )
    }
    else {
        return null;
    }
}

export default Empty;

