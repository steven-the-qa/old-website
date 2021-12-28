import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Use the correct serviceId, templateId, and userId to integrate with EmailJS
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    emailjs.sendForm('service_im24tc9', 'template_0pa97xj', form.current, 'user_bn196K5WutRKWYHpM0Dv3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
        <h2 className="form-title">Let's have a chat over coffee!</h2>
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder='Name'/>
                <input type="email" name="reply_to" placeholder='Email'/>
                <textarea className='input-message' name="message" placeholder='Write a message...'/>
                <input id='submit' type="submit" value="Send message" />
            </form>
        </div>
    </div>
  );
};