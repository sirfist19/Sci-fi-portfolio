import React, {useState} from 'react'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const contactHandleSubmit = () => {

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
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder="Name"
                />
            </div>
            <div className="input-row">
                <input 
                    type="text"
                    placeholder="Email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="input-row">
                <textarea 
                    type="text"
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
