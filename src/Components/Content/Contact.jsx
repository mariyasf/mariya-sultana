import { FaUser } from 'react-icons/fa';
import './CSS/contact.css'
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

const Contact = () => {
    
    return (
        <div className="contact" id="contact">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Contact</h2>
                </div>
                <div className="row flex flex-col lg:flex-row gap-4 justify-between p-4 align-items-center">
                    <div className="col-md-6">
                        <h2 className='text-2xl font-bold pb-5 text-[#FF6F61]'>Contact  Info</h2>
                        <div className="contact-info">
                            <p className='flex items-center gap-4'>
                                <FaUser />
                                <span> Mariya Sultana</span>

                            </p>
                            <p className='flex items-center gap-4'>
                                <IoCall />
                                <span>+880+01717638616 </span>

                            </p>
                            <p className='flex items-center gap-4'>
                                <MdEmail />
                                <span>
                                    mariasultanafahmida@gmail.com
                                </span>

                            </p>
                            <p className='flex items-center gap-4'>
                                <FaLocationDot />
                                <span> B-Block, Halishahar, Chittagong</span>

                            </p>
                            



                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className='text-2xl font-bold pb-5 text-[#FF6F61]'>Contact Me</h2>
                        <div className="form">
                            <form action="https://getform.io/f/pbmqgjvb" method="POST">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text"
                                            name='name'
                                            className="form-control"
                                            placeholder="Your Name" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <input type="email"
                                            name='email'
                                            className="form-control"
                                            placeholder="Your Email" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                        name='subject'
                                        className="form-control"
                                        placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control"
                                        rows="5" name='message'
                                        placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button className="btn"
                                    type="submit">Send
                                    Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;