import React, { useState } from "react";

const ContactForm = () => {
  const [query, setQuery] = useState({
    name: "",
    email: ""
  });
  
  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`https://getform.io/f/3fa1749a-2d2c-43c6-a589-1c1ee62dd05e`, {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "", message: "" }));
  };

  return (
    <form onSubmit={formSubmit} className='flex flex-col w-full sm:w-[450px] mx-auto lg:mx-0'>
      <input
        className="form-field"
        typeof="text"
        name="name"
        required
        placeholder="Name"
        value={query.name}
        onChange={handleParam()}
      />
      <input
        className="form-field"
        typeof="email"
        name="email"
        required
        placeholder="Email"
        value={query.email}
        onChange={handleParam()}
      />
      <textarea
        className="form-field long"
        typeof="text"
        rows={3}
        name="message"
        required
        placeholder="Message"
        value={query.message}
        onChange={handleParam()}
      />
      <button className="mb-12 btn btn-primary w-fit px-6 h-12" type="submit">Send Message</button>
    </form>

  )
}

export default ContactForm