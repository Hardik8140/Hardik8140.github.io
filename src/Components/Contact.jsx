import React, { useRef, useState } from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { Location, email, github, linkedin, phone } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_f3mzazg",
        "template_gtlcifb",
        {
          from_name: form.name,
          to_name: "Hardik",
          from_email: form.email,
          to_email: "hardik.gajera.d.84@gmail.com",
          message: form.message,
        },
        "VOGcqW52HgkYf5CA2"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div className="flex-[0.65] bg-black-100 p-8 rounded-2xl ">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className="flex-[0.65] bg-black-100 p-8 rounded-2xl ">
        <p className={styles.sectionSubText}>Feel Free to Connect With me</p>
        <h3 className={styles.sectionHeadText}>Connect.</h3>
        <div className="mt-12 flex  gap-8 align-baseline ">
          <img className="w-10" src={Location} alt="" />
          <p className={styles.heroSubText}>Ahmedabad,Gujarat</p>
        </div>
        <div className="mt-12 flex  gap-8  align-middle">
          <img className="w-10" src={email} alt="" />
          <a className={styles.heroSubText}>hardik.gajera.d.84@gmail.com</a>
        </div>
        <div className="mt-12 flex  gap-8  align-middle">
          <img className="w-10" src={phone} alt="" />
          <a className={styles.heroSubText}>+91 8849619764</a>
        </div>
        <div className="mt-12 flex  gap-8  align-middle">
          <img className="w-10" src={github} alt="" />
          <a
            className={`${styles.heroSubText} hover:underline`}
            target="_blank"
            href="https://github.com/Hardik8140"
          >
            GitHub
          </a>
        </div>
        <div className="mt-12 flex  gap-8  align-middle">
          <img className="w-10" src={linkedin} alt="" />
          <a
            className={`${styles.heroSubText} hover:underline`}
            target="_blank"
            href="https://www.linkedin.com/in/hardik-gajera-7563b7254/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
