import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react';
import resume from '../../Resume.pdf';
import emailjs from 'emailjs-com';

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
                <img style={{width:"200px", borderRadius:"50%", border:"5px solid gray"}} src="https://i.postimg.cc/Dy1ZMsks/Pics-Art-10-21-08-20-34-Original.jpg" alt=""/>
                <h5  className="mx-auto my-3">
                    Me, Ariful Islam Mahin working as a Front End developer.<br/>
                    I have come in the web development world only for my passion.<br/> I love creating and developing websites more than any other works.
                </h5>
                <button onClick={handleClickOpen} className="btn btn-outline-primary mx-1">Send Message</button>
                <a href={resume} download="ArifulIslamMahinResume" className="btn btn-primary mx-1">Download Resume</a>
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