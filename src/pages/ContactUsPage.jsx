import React, { useState } from 'react';
import { MapPin, Phone, Printer, Mail, Facebook, Twitter, Instagram, Linkedin, Menu } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

      <section className="bg-gradient-to-r from-blue-900 to-[#00A8C5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              
            </div>
            
            <div className="order-1 lg:order-2 my-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Starting a new project or want to collaborate with us?{' '}
                <span className="text-[#f5f5dc]">Let's talk!</span>
              </h1>
             
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 text-sm font-semibold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-[#0077b6]enter">
              <div className="w-16 h-16  bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#00A8C5]" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Our Main Office</h3>
              <p className="text-gray-600 text-sm">
                Delhi, India
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-[#0077b6]enter">
              <div className="w-16 h-16 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#00A8C5]" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Phone Number</h3>
              <p className="text-gray-600 text-sm">
                234-9876-5400<br />
                888-0123-4567 (Toll Free)
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-[#0077b6]enter">
              <div className="w-16 h-16 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="text-[#00A8C5]" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Fax</h3>
              <p className="text-gray-600 text-sm">
                1-234-567-8900
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-[#0077b6]enter">
              <div className="w-16 h-16 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#00A8C5]" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Email</h3>
              <p className="text-[#00A8C5] text-sm hover:underline">
                <a href="/">hello@theme.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Get in touch</h2>
              <p className="text-gray-700 italic mb-6 font-semibold">
                WE CAN ENSURE RELIABILITY, LOW COST FARES AND MOST IMPORTANT, WITH SAFETY AND COMFORT IN MIND.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-900 text-white rounded flex items-center justify-center hover:bg-[#00A8C5] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 text-white rounded flex items-center justify-center hover:bg-[#00A8C5] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 text-white rounded flex items-center justify-center hover:bg-[#00A8C5] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 text-white rounded flex items-center justify-center hover:bg-[#00A8C5] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter a valid email address"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#00A8C5] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your Name"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#00A8C5] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="6"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#00A8C5] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full text-white py-4 rounded-full bg-[#00A8C5] border-2 border-[#00A8C5] hover:text-[#00A8C5]lack hover:bg-white uppercase font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    
    </div>
  );
}