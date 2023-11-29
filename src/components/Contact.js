import React, {useState} from 'react'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    
    const contactHandleSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !msg) {
        alert('Please fill in all fields');
        return;
      }
      const emailData = {
        fromEmail: email,
        toEmail: process.env.REACT_APP_MY_EMAIL,
        subject: `Message from Aidan Cini's personal website from ${name}`,
        message: msg
      };
      //console.log(emailData);
      //sendEmail(emailData);
      const mailto = `mailto:${emailData.toEmail}
      ?subject=${encodeURIComponent(emailData.subject)}
      &body=${encodeURIComponent(emailData.message)}`;

      window.location.href = mailto;

      // clear the content after submitting
      setName('');
      setEmail('');
      setMsg('');
    };
      
  return (
    <div id="contact">
        <h1 className="contact-title">Contact</h1>
        <div className="title-underline-contact"/>
        <h2 className="contact-prompt">Message me about job opportunities or any questions</h2>
        <form className="create" onSubmit={contactHandleSubmit}>
            <div className="input-row">
                <input 
                    type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder="Name"
                />
            </div>
            <div className="input-row">
                <input 
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="input-row">
                <textarea 
                    type="text"
                    value={msg}
                    placeholder="Message"
                    id="description-input"
                    onChange={(e)=>{setMsg(e.target.value)}}
                />
            </div>
            
            <div className="button-row">
              <button className="sumbit-btn">Submit</button>
            </div>
        </form>
      </div>
  )
}

export default Contact
