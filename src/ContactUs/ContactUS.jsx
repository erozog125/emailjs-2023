import React, {useRef} from 'react';
import './contactUs.css';

export const ContactUS = () => {

  const handleSendEmail = (event) => {

    const form = useRef();

    const serviceId = 'service_psfw045'
    const emailTemplate = 'template_sudeks8';

    event.preventDefault();
    EmailJSResponseStatus.sendForm(serviceId,emailTemplate,form.current, )
  }

  return (
    <form ref={form} action="" onSubmit={handleSendEmail}>
      <div className="header-contact">
        <h2>Contact Us</h2> 
        <p>Please fill this form</p>     
      </div>
      <fieldset className='field-name'>
        <label className='symbol-required name'  htmlFor="">Name</label>
        <input placeholder='Edwin Rozo Gómez' name="name" type="text" id="name" required />
      </fieldset>
      <fieldset className='field-email'>
        <label className='symbol-required'  htmlFor="" >email</label>
        <input placeholder='ej: email@dom.co' name="email" type="text" id="email" required />
      </fieldset>
      <fieldset className='field-message'>
      <label className='symbol-required' htmlFor="">Message</label>
      <textarea name="message" maxLength="500" placeholder='Insert your message' required id="" cols="30" rows="10"></textarea>
      </fieldset>
      <button className='btn-send'>Send</button>
    </form>
  )
}



