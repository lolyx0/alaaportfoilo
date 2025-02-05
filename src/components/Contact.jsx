import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_nok9bce",
        "template_7c9ow35",
        formData,
        "748L_WCkQqJ4IP_GO"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="border-t border-stone-900 pb-20 px-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-slate-500 p-8 rounded-lg shadow-md space-y-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Name Input */}
        <div>
          <label className="block text-sm text-slate-50">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mt-1 rounded-md bg-stone-800 text-white focus:ring-2 focus:ring-rose-400 outline-none"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm text-slate-50">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mt-1 rounded-md bg-stone-800 text-white focus:ring-2 focus:ring-rose-400 outline-none"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm text-slate-50">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 mt-1 rounded-md bg-stone-800 text-white focus:ring-2 focus:ring-rose-400 outline-none"
          ></textarea>
        </div>

        {/* Send Button */}
        <motion.button
          type="submit"
          className="w-full bg-rose-200 py-3 rounded-md text-white font-semibold text-lg hover:bg-pink-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Success Message */}
        {isSent && (
          <motion.p
            className="text-green-400 text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message sent successfully! Thank you
          </motion.p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
