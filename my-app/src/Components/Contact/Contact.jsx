import "./Contact.css";
export const Contact = () => {
  return <div className="contact-cont">
      <div>
          <h3>Contact Us</h3>
          <p>Mailing address:</p>
          <p>8391 No. 5 Road, Richmond, BC, V6Y 2V5</p>
          <p>Call, email, or send a message to Sandhar Trucking today.</p>
          <p> #100 – 915 Cliveden Avenue, Delta, BC, V3M 5R6</p>
          <p>1-604-276-9044</p>
          <p>info@sandhartrucking.com</p>
      </div>
      <div>
          <h3>Send Us A Message, Or Give Us A Call</h3>
          <input type="text" name="" id=""  placeholder="Name"/><br /><br />
          <input type="text" name="" id="" placeholder="Phone"/><br /><br />
          <input type="text" name="" id="" placeholder="Email"/><br /><br />
          <input type="text" name="" id="message" placeholder="Message"/><br /><br />
          <button>SEND MESSAGE</button>
      </div>
  </div>;
};
