import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react';
import resume from '../../Resume.pdf';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_u1eiszd', e.target, 'user_vnbRD2hj4q0e0zW1eGQqr')
        .then((result) => {
            alert("message sent successfully");
        }, (error) => {
            alert("please try again");
        });
        e.target.reset()
    }
    return (
        <div id="about" className="text-center text-white bg-dark pb-5 about">
            <div className="container">
                <h1 className="py-3">About</h1>
                <img className="myPicture" src="https://i.postimg.cc/Dy1ZMsks/Pics-Art-10-21-08-20-34-Original.jpg" alt=""/>
                <br/>
                <a href="https://www.facebook.com/arifulislam.mahin.718689" target="_blank">
                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                </a>
                <a href="https://www.linkedin.com/in/ariful-islam-mahin/" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a href="https://github.com/ariful-islam-mahin" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faGithubSquare} />
                </a>
                <h5 className="mx-auto my-3 text-box">
                    Me, Ariful Islam Mahin working as a Front End developer.
                    I have come in the web development world only for my passion. I love creating and developing websites more than any other works.
                </h5>
                <button onClick={handleClickOpen} className="btn btn-outline-primary mx-1 mb-2">Send Message</button>
                <a href={resume} download="ArifulIslamMahinResume" className="btn btn-primary mx-1 mb-2">Download Resume</a>
                <Dialog className="w-md-50 mx-auto w-75" fullWidth={true}
                    open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle className='text-center' id="form-dialog-title"><h3>Get In Touch</h3></DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <input className="form-control" name="name" type="text" placeholder="Your Name" required/>
                            <br/>
                            <input className="form-control" name="email" type="email" placeholder="Your Email" required/>
                            <br/>
                            <textarea style={{height:"100px"}} className="form-control" name="message" type="text" placeholder="Enter Your Message" required/>
                            <br/>
                        </DialogContent>
                        <DialogActions className="px-4">
                            <button type="submit" className="btn btn-primary btn-block" value="Send">Submit</button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </div>
    );
};

export default About;