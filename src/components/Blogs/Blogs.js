import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BlogsData from './BlogsData';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(BlogsData)
    }, [])

    return (
        <div id="blogs" className="blogs pb-5">
            <div className="container px-5 mb-5">
                <h1 className="mt-5">Blogs Posts</h1>
                <div className="row py-4">
                    {
                        blogs.map((blog, idx) => <Blog key={idx} blog={blog}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;