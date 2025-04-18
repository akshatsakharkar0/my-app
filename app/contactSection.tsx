'use client';

import React, { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (API call, email service, etc.)
    console.log(form);
    alert('Message sent!');
    setForm({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-[#f1faee]">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <p className="text-gray-600 mb-8">Have questions or want to place an order? Get in touch with us!</p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          />
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Your Mobile Number"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#e63946] text-white px-6 py-3 rounded hover:bg-[#f4a261] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
