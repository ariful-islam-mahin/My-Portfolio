import React from 'react';

const Blog = ({blog}) => {
    const {title, picture, link} = blog;

    return (
        <div className="col-md-4 mb-4">
            <div className="border rounded pb-3 bg-dark text-white">
                <img className="w-100" src={picture} alt=""/>
                <div className="blog-details d-flex flex-column justify-content-between">
                    <h4 className="mt-2">{title}</h4>
                    <div>
                        <a className="btn btn-primary px-5 btn-sm mt-1" href={link} target="_blank">Read</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;