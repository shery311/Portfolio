import "./contact.css";
import ContactImg from "../../assets/contact.png";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mlzcwmq', 'template_scrocb4', form.current, 'Vsji_3dxl5tiFK0fj')
        e.target.reset();
    };



  return (
    <section className="contact section" id="contact">
    <h3 className="section__title">Contact Me</h3>
    <span className="section__subtitle">Get in touch</span>

    <div className="contact__container container grid">
        <div className="item">
            <div className="contact-form">
                <div className="first-text">Get in Touch</div>
             <img src={ContactImg} alt="" className='image' />
            </div>
            <div className="submit-form">
                <h4 className="contactform-title">Let's Connect</h4>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="input-box">
                        <input 
                        type="text" 
                        name='name' 
                        required
                        className="input" />
                        <label>Name</label>
                    </div>
                    <div className="input-box">
                        <input 
                        type="email" 
                        name='email' 
                        required
                        className="input" />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-box">
                        <textarea 
                        name="message" 
                        className="input"
                        required
                        cols="30" rows="10"></textarea>
                        <label htmlFor="">Message</label>
                    </div>
                    <input type="submit" className='btn' value="submit"/>
                </form>
                
            </div>
        </div>

    </div>
    </section>
  )
}

export default Contact