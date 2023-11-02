import React, { useEffect } from 'react';
import useFetch from './useFetch';
import Navbar from '../navAndFooter/Navbar';
import Footer from '../navAndFooter/Footer';
import './style/blog.css'
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import blogs from '../data/data';

function BlogList() {
    // scroll to top of page after each navigation
    useEffect(() => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuint',
        });
    }, []);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/createBlog');
    };
    return (
        <div>
            <Navbar />
            <div className="mainBlogs">
                {
                    blogs.map((blog) => (
                        <div key={blog.id} className="blogs">
                            <div className="imgEvent">
                                <img src={blog.img} alt="" />
                            </div>
                            <div className="blogDesc">
                                <h1>{blog.author}</h1>
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="addReview">
                <h1>Have you purchased from us before ?</h1>
                <div className="addreviewDesc">
                    <p>Click the button below to share your experience from how we handled your order, the deliciousness of our products e.t.c</p>
                    <button onClick={handleNavigate}>Add Blog</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogList;