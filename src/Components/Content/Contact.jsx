import { FaUser } from 'react-icons/fa';
import './CSS/contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg" />
      <div className="contact-inner">
        <header className="contact-header">
          <h2>Contact</h2>
          <p className="contact-header__subtitle">Get in touch with me</p>
        </header>

        <div className="contact-grid">
          <div className="contact-info-block">
            <h3 className="contact-block-title">Contact Info</h3>
            <div className="contact-info">
              <p className="contact-info__row">
                <span className="contact-info__icon"><FaUser /></span>
                <span>Mariya Sultana</span>
              </p>
              <p className="contact-info__row">
                <span className="contact-info__icon"><IoCall /></span>
                <span>+880 1717638616</span>
              </p>
              <p className="contact-info__row">
                <span className="contact-info__icon"><MdEmail /></span>
                <span>mariasultanafahmida@gmail.com</span>
              </p>
              <p className="contact-info__row">
                <span className="contact-info__icon"><FaLocationDot /></span>
                <span>B-Block, Halishahar, Chittagong</span>
              </p>
            </div>
          </div>

          <div className="contact-form-block">
            <h3 className="contact-block-title">Contact Me</h3>
            <form className="contact-form" action="https://getform.io/f/pbmqgjvb" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" name="subject" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" name="message" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
