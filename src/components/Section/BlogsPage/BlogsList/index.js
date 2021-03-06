import React, { useState } from 'react';
import { blogList, catList, tagsList } from "../../../../static/data/blog";
import { Link } from "react-router-dom";
import Pagination from "../../../Pagination";
import BlogList from "../../../BlogList";
import { smoothScrollBlogList } from '../../../../utils/smoothScroll';
import Empty from '../../../Empty';


function BlogsList() {

    const [catActive, setCatActive] = useState('All');
    const [tagActive, setTagActive] = useState('null');

    let dataBlogList = [];
    for (let i = 0; i < blogList.length; i++) {
        if (blogList[i].position === 'post_list') {
            if(catActive === 'All') {

                if(tagActive === 'null') {
                    dataBlogList.push(blogList[i]);
                }
                else if(blogList[i].tags.includes(tagActive)) {
                    dataBlogList.push(blogList[i]);
                }
            }
            else if(blogList[i].cat === catActive) {
                if(tagActive === 'null') {
                    dataBlogList.push(blogList[i]);
                }
                else if(blogList[i].tags.includes(tagActive)) {
                    dataBlogList.push(blogList[i]);
                }
            }
        }
    }

    const totalItem = dataBlogList.length;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    
    const onClickPagination = (currentPage) => {
        
        const section = document.getElementById("blogs");
        setCurrentPage(currentPage);
        smoothScrollBlogList(section);
    };

    const onClickFilterBlogList = (catName, tagName) => {
        setCurrentPage(1);
        if(tagName === 'null') {
            setCatActive(catName);
        }
        setTagActive(tagName);
        
    }

    return (
        <section id="blogs" className="section mt-5">
            <div className="blogs container">
                <div className="row m-0">
                    <div className="col-lg-8 col-12">
                        <div className="blogs-list">
                            <BlogList currentBlogList={ dataBlogList } firstItem={ firstItem } lastItem={ lastItem } />
                        </div>
                        <Empty currentBlogList={ dataBlogList.length } />
                        <Pagination totalItem={ totalItem } itemsPerPage={ itemsPerPage } paginate={ onClickPagination } currentPage={ currentPage } />
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="title-blogs-cat">
                            <h3 className="border-bottom border-danger m-0 mb-4 pb-3 text-dark">Categories</h3>
                        </div>
                        <div className="blogs-cat">
                        {
                            catList.map(item => {
                                return (
                                    <div className="blog-cat-item ">
                                        <Link href="" onClick={() => { onClickFilterBlogList(item.title, "null")}} className="h-100 w-100 text-decoration-none">
                                            <h5 className={`blog-cat-title text-hover m-0 mb-3 ${ catActive === item.title ? 'text-danger' : 'text-dark' }`}>{item.title}</h5>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="title-blogs-tags">
                            <h3 className="border-bottom border-danger m-0 mt-5 mb-4 pb-3 text-dark">Tags</h3>
                        </div>
                        <div className="blogs-tags d-flex flex-wrap">
                        {
                            tagsList.map(item => {
                                return (
                                    <div className="blog-tags-item mr-2 mb-3">
                                        <Link href="" onClick={() => { onClickFilterBlogList("All", item.title)}} className={`blog-tags-title btn-hover pl-2 pt-1 pr-2 pb-1 h-100 w-100 text-decoration-none ${ tagActive === item.title ? 'bg-danger text-light' : 'bg-light text-dark' }`}>{item.title}</Link>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogsList;
