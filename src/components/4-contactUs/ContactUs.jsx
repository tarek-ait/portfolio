import Lottie from "lottie-react"
import doneAnimation from '../../../public/animation/done.json'
import emailAnimation from '../../../public/animation/email.json'

import "./contactUs.css";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  // sending a message to the gmail, nodemailer ?
  // we will use the formspree
  const [state, handleSubmit] = useForm("manwqonp");
  if (state.succeeded) {
    return (
      <div className="container flex" style={{gap: "1rem", border: "none"}}>
        <Lottie style={{height: 55}} animationData={doneAnimation} loop={true}/>
        <p className="send">Email sent! Wait for us 👌</p>
      </div>);
  }
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when i publish
        something new.
      </p>

      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              required
              style={{ padding: "10px 10px" }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              style={{ padding: "10px 10px" }}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            Submit
          </button>
        </form>
        <div className="animation">
        <Lottie  animationData={emailAnimation} loop={true}/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
