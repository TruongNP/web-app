import React from 'react';
import { Link } from "react-router-dom";

function DisplayBlogList({ currentBlogList, firstItem, lastItem  }) {

    return (
        currentBlogList.slice(firstItem, lastItem).map(item => {
            return (
                <div className="blogs-item ">
                    <Link to={`/blog/${item.slug}`} className="h-100 w-100 text-decoration-none">
                        <img src={item.img} className="blog-image rounded" alt={item.title} />
                    </Link>
                        <h6 className="blog-cat text-light bg-danger mt-3 mb-3 pl-2 pt-1 pr-2 pb-1">{item.cat}</h6>
                    <Link to={`/blog/${item.slug}`} className="h-100 w-100 text-decoration-none">
                        <h4 className="blog-title text-hover m-0 text-dark">{item.title}</h4>
                    </Link>
                </div>
            )
        })
    )
} 

export default DisplayBlogList;