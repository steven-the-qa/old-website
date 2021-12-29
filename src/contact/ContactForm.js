import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [fromName, setFromName] = useState('')
  const [replyTo, setReplyTo] = useState('')
  const [message, setMessage] = useState('')

  const handleFromName = (e) => {
    setFromName(e.target.value)
  }

  const handleReplyTo = (e) => {
    setReplyTo(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Use the correct serviceId, templateId, and userId to integrate with EmailJS
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    if (window.confirm('✉️  Are you sure you\'re ready to send your message?')) {
      emailjs.sendForm('service_im24tc9', 'template_0pa97xj', form.current, 'user_bn196K5WutRKWYHpM0Dv3')
      .then((result) => {
          alert('✅ Your message has been sent!')
          console.log(result.text);
      }, (error) => {
          alert('😞 Something went wrong. Please check your information and resubmit.')
          console.log(error.text);
      });
    } else {
        alert('👍🏻 That\'s okay! Your message has not been sent.')
      }
  };

  return (
    <div className="contact-form">
        <h2 className="form-title">Let's have a chat over coffee!</h2>
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <input id='fromName' type="text" name="from_name" placeholder='Name' onChange={handleFromName} value={fromName} required />
                <input id='replyTo' type="email" name="reply_to" placeholder='Email' onChange={handleReplyTo} value={replyTo} required />
                <textarea id='message' className='input-message' name="message" placeholder='Write a message...' onChange={handleMessage} value={message} required />
                <input id='submit' type="submit" value="Send message" />
            </form>
        </div>
    </div>
  );
};