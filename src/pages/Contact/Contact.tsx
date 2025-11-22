import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";
import contactData from "./Contact.json";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_5x2kr",
        "template_eg2d",
        form.current,
        "OnvDcRpo9IaojH1KF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Praveen Voruganti</title>
        <meta name="description" content="Get in touch with Praveen Voruganti" />
      </Helmet>

      <h1 className={styles.sectionTitle}>Contact Me</h1>
      <p className={styles.description}>
        Feel free to reach out via social links or send me a message directly:
      </p>

      {/* Social Icons */}
      <div className={styles.socialContainer}>
        {contactData.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <img src={contact.icon} alt={contact.platform} />
            <span>{contact.platform}</span>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" rows={5} required />
        <button type="submit">Send Message</button>
        {success && <p className={styles.successMsg}>{success}</p>}
      </form>
    </div>
  );
}
