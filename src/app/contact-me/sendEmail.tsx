import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import Button from "@/components/button";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log("CHANGE:", e.target.value, e, e.target.name, formData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      to_email: "recipient@example.com",
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message_html: formData.message,
    };

    emailjs
      .send(
        "service_ij90yfz", // Use your service ID
        "template_lukr3xe", // Use your template ID
        templateParams,
        "492Cth8xbkTP_n_g-" // Use your user ID
      )
      .then(
        function (response) {
          console.log("Email sent successfully!", response);
        },
        function (error) {
          console.error("Error sending email:", error);
        }
      );

    // Optionally, clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="lg:col-span-8 col-span-12 px-10 mt-4 max-md:mb-10">
      <form className=" " onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex mb-4">
            <div className="w-1/2  ">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Your Name"
                className="rounded-3xl text-gray-400  w-full px-4 py-3 bg-[#252525]"
              />
            </div>
            <div className="w-1/2 ml-2 ">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="rounded-3xl text-gray-400 w-full px-4 py-3 bg-[#252525]"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Your Subject"
              className="rounded-3xl text-gray-400 w-full px-4 py-3 bg-[#252525]"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="rounded-3xl text-gray-400 w-full px-4 py-3 bg-[#252525]"
              rows={10}
            />
          </div>
          <div className="mt-5">
            <Button text="send message" type="submit"></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
