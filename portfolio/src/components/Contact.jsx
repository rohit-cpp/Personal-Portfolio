import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const validate = () => {
    const errs = {};
    const name = nameRef.current?.value?.trim();
    const email = emailRef.current?.value?.trim();
    const message = messageRef.current?.value?.trim();
    if (!name) errs.name = "Name is required";
    if (!email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Enter a valid email";
    if (!message) errs.message = "Message is required";
    return errs;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstKey = Object.keys(errs)[0];
      if (firstKey === "name") nameRef.current?.focus();
      else if (firstKey === "email") emailRef.current?.focus();
      else if (firstKey === "message") messageRef.current?.focus();
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "61b8451d-a288-46af-b300-6bedd7c64499");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-20 w-full overflow-hidden"
      id="contact"
    >
      <h2 className="text-4xl font-semibold mb-2 text-center text-primary">
        Contact Me
      </h2>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        onSubmit={onSubmit}
        noValidate
        className="max-w-2xl mx-auto pt-8"
      >
        <div className="rounded-2xl border border-stone-50/20 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
              <label htmlFor="name" className="text-white text-sm font-medium">
                Your Name
              </label>
              <input
                ref={nameRef}
                id="name"
                className="w-full border border-stone-50/20 rounded-lg bg-white/5 py-3 px-4 mt-1 text-white placeholder-stone-500 focus:border-primary/50 transition-colors"
                type="text"
                name="Name"
                placeholder="John Doe"
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400 text-left">{errors.name}</p>
              )}
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4 mt-4 md:mt-0">
              <label htmlFor="email" className="text-white text-sm font-medium">
                Your Email
              </label>
              <input
                ref={emailRef}
                id="email"
                className="w-full border border-stone-50/20 rounded-lg bg-white/5 py-3 px-4 mt-1 text-white placeholder-stone-500 focus:border-primary/50 transition-colors"
                type="email"
                name="Email"
                placeholder="john@example.com"
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400 text-left">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="text-left mt-6">
            <label htmlFor="message" className="text-white text-sm font-medium">
              Message
            </label>
            <textarea
              ref={messageRef}
              id="message"
              className="w-full border border-stone-50/20 rounded-lg bg-white/5 py-3 px-4 mt-1 h-48 resize-none text-white placeholder-stone-500 focus:border-primary/50 transition-colors"
              name="Message"
              placeholder="Your message..."
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={result === "Sending...."}
            className="mt-6 bg-primary text-black font-semibold py-3 px-12 rounded-lg hover:bg-primary-hover transition-colors cursor-pointer disabled:opacity-50"
          >
            {result || "Send Message"}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
