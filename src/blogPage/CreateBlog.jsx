import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { animateScroll as scroll } from 'react-scroll';
import './style/createBlog.css';
import Navbar from '../navAndFooter/Navbar';
import Footer from '../navAndFooter/Footer';
import blogs from '../data/data';

function CreateBlog() {
    // scroll to top of page after each navigation
    useEffect(() => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuint',
        });
    }, []);

    const [blogData, setBlogData] = useState(
        {
            author: '',
            title: '',
            description: '',
            img: ''
        }
    )

    const [errors, setErrors] = useState({})

    // validating the form for any errors
    const validateForm = () => {
        const newErrors = {}

        if (!blogData.author.trim()) {
            newErrors.author = 'This field is required';
        }

        if (!blogData.title.trim()) {
            newErrors.title = 'This field is required';
        }

        if (!blogData.description.trim()) {
            newErrors.description = 'description is required';
        }
        else if (blogData.description.length < 20) {
            newErrors.description = 'description must be above 20 characters';
        }

        if (!blogData.img.trim()) {
            newErrors.img = 'This field is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBlogData({
                ...blogData,
                img: URL.createObjectURL(file),
            });
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            blogs.push(blogData);
            toast.success('Your story has been added', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            navigate('/blogs');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData(
            {
                ...blogData, [name]: value,
            }
        )
    }

    return (
        <div className='createBlog'>
            <Navbar />
            <div className="addingBlog">
                <h1>Add a new blog</h1>
                <form className='formBlog' onSubmit={handleSubmit} action="">
                    <div className="frmArr">
                        <label>Author:</label>
                        <input
                            type="text"
                            name='author'
                            value={blogData.author}
                            onChange={handleChange}
                            placeholder='Your name or family name or nickname you bear'
                        />
                        {errors.author && <p className='err-msg'>{errors.author}</p>}
                    </div>
                    <div className="frmArr">
                        <label>Title:</label>
                        <input
                            type="text"
                            name='title'
                            value={blogData.title}
                            onChange={handleChange}
                            placeholder='Title of the event'
                        />
                        {errors.title && <p className='err-msg'>{errors.title}</p>}
                    </div>
                    <div className="frmArr">
                        <label>Description:</label>
                        <textarea
                            cols="30"
                            rows="5"
                            name='description'
                            value={blogData.description}
                            onChange={handleChange}
                            placeholder='A short review or comment about our services to you'
                        ></textarea>
                        {errors.description && <p className='err-msg'>{errors.description}</p>}
                    </div>
                    <div className="frmArr">
                        <label>Add a Image</label>
                        <input
                            type="file"
                            name='img'
                            accept='image/*'
                            onChange={handleImageChange}
                        />
                        {errors.img && <p className='err-msg'>{errors.img}</p>}
                    </div>
                    <div className="sbmFrm">
                        <button type='submit'>Add Blog</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreateBlog;