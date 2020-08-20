import React from 'react';
import { blogList } from "../../../../static/data/blog";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";


function BlogsTop() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
    };

    let dataLeftBlogList = [];
    let dataRightBlogList = [];

    for (let i = 0; i < blogList.length; i++) {
        if (blogList[i].position === 'carousel') {
            dataLeftBlogList.push(blogList[i]);
        }
        else if (blogList[i].position === 'right') {
            dataRightBlogList.push(blogList[i]);

        }
    }

    return (
        <section id="blogs-top" className="section mt-5 pt-5">
            <div className="blogs-top container">
                <div className="row m-0">
                    <div className="col-lg-7 col-12">
                        <div className="blogs-top-carousel rounded">
                            <Carousel
                                transitionDuration={500}
                                draggable={false}
                                containerClass=""
                                dotListClass="custom-dot-list-style first-layer-index"
                                itemClass="carousel-item-padding-40-px"
                                showDots={true}
                                keyBoardControl={false}
                                responsive={responsive}
                                ssr={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                            >
                                {
                                    dataLeftBlogList.slice(0, 4).map(item => {
                                        return (
                                            <div className="blogs-top-carousel-item ">
                                                <Link to={`/blog/${item.slug}`} className="d-flex h-100 w-100 text-decoration-none">
                                                    <img src={item.img} className="blog-image w-100 h-100 position-absolute" alt={item.title} />
                                                </Link>
                                                    <h6 className="blog-cat text-light bg-danger m-0 pl-2 pt-1 pr-2 pb-1">{item.cat}</h6>
                                                <Link to={`/blog/${item.slug}`} className="h-100 w-100 text-decoration-none">
                                                    <h3 className="blog-title text-hover m-0 text-light">{item.title}</h3>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>    
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="blogs-top-trend">
                        {
                            dataRightBlogList.slice(0, 3).map(item => {
                                return (
                                    <div className="blogs-top-trend-item rounded">
                                        <Link to={`/blog/${item.slug}`} className="d-flex h-100 w-100 text-decoration-none">
                                            <img src={item.img} className="blog-image w-100 h-100 position-absolute" alt={item.title} />
                                        </Link>
                                            <h6 className="blog-cat text-light bg-danger m-0 pl-2 pt-1 pr-2 pb-1">{item.cat}</h6>
                                        <Link to={`/blog/${item.slug}`} className="h-100 w-100 text-decoration-none">
                                            <h4 className="blog-title text-hover m-0 text-light">{item.title}</h4>
                                        </Link>
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

export default BlogsTop;
