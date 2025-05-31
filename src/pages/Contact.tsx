
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-light">
              Get in touch with our team. We're here to help with all your construction supply needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-dark mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-medium text-white p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-dark mb-2">Phone</h3>
                    <p className="text-blue-medium mb-1">Main Line: (416) 555-0123</p>
                    <p className="text-blue-medium">Emergency: (416) 555-0124</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-medium text-white p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-dark mb-2">Email</h3>
                    <p className="text-blue-medium mb-1">General: info@6ixsideconstruction.com</p>
                    <p className="text-blue-medium">Quotes: quotes@6ixsideconstruction.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-medium text-white p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-dark mb-2">Address</h3>
                    <p className="text-blue-medium">
                      123 Construction Avenue<br />
                      Toronto, ON M5V 3A8<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-medium text-white p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-dark mb-2">Business Hours</h3>
                    <div className="text-blue-medium space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-dark mb-4">Our Location</h3>
                <div className="bg-blue-light rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-blue-medium">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Interactive map would be embedded here</p>
                    <p className="text-sm">123 Construction Avenue, Toronto, ON</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-blue-dark mb-4">Message Sent!</h3>
                  <p className="text-blue-medium mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-medium text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold text-blue-dark mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-blue-dark font-semibold mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-medium focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-blue-dark font-semibold mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-medium focus:border-transparent"
                          placeholder="(416) 555-0123"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-blue-dark font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-medium focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-blue-dark font-semibold mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-medium focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Quote Request</option>
                        <option value="delivery">Delivery Question</option>
                        <option value="product">Product Information</option>
                        <option value="account">Account Setup</option>
                        <option value="complaint">Complaint</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-blue-dark font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-medium focus:border-transparent"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-medium text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-dark transition-colors flex items-center justify-center"
                    >
                      <Send className="mr-2" size={20} />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
