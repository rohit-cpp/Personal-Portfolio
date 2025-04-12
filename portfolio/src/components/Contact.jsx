import React from "react";
import { toast } from "react-toastify";
// import { motion } from "motion/react";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
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
      toast.success("form submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      toast.error(data.message);
      setResult(data.message);
    }
  };

  return (
    <div
      //   initial={{ opacity: 0, x: -200 }}
      //   transition={{ duration: 1 }}
      //   whileInView={{ opacity: 1, x: 0 }}
      //   viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-20 w-full overflow-hidden"
      id="contact"
    >
      <h2 className="text-4xl font-semibold mb-2 text-center">Contact</h2>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="text-white w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="text-white w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="text-white my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
