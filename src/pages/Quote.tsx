
import React, { useState } from 'react';
import { Send, Upload, CheckCircle } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productType: '',
    description: '',
    deliveryDate: '',
    file: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Quote request submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-12">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Quote Request Submitted!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for your quote request. Our team will review your requirements and get back to you within 24 hours.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• Our team will review your requirements</li>
                  <li>• We'll prepare a detailed quote with pricing</li>
                  <li>• You'll receive your quote via email within 24 hours</li>
                  <li>• We'll follow up to answer any questions</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/" 
                  className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Return to Home
                </a>
                <a 
                  href="/products" 
                  className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Browse Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-gray-300">
              Get competitive pricing for your construction materials. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="(416) 555-0123"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="productType" className="block text-gray-700 font-semibold mb-2">
                  Product Type *
                </label>
                <select
                  id="productType"
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select a product category</option>
                  <option value="wood-lumber">Wood & Lumber</option>
                  <option value="flooring">Flooring</option>
                  <option value="washroom">Washroom Products</option>
                  <option value="concrete-cement">Concrete & Cement</option>
                  <option value="drywall">Drywall</option>
                  <option value="roofing">Roofing Materials</option>
                  <option value="insulation">Insulation</option>
                  <option value="tools-fasteners">Tools & Fasteners</option>
                  <option value="other">Other/Multiple Categories</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="deliveryDate" className="block text-gray-700 font-semibold mb-2">
                    Preferred Delivery Date
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="file" className="block text-gray-700 font-semibold mb-2">
                    Upload File (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    />
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Accepted formats: PDF, DOC, XLS, JPG, PNG (Max 10MB)
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                  Description / Quantity *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Please provide detailed information about the materials you need, including quantities, specifications, dimensions, or any special requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-4 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Submit Quote Request
              </button>

              <p className="text-gray-500 text-sm mt-4 text-center">
                By submitting this form, you agree to be contacted by 6ixSide Construction Supplies regarding your quote request.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Need to Speak with Someone?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-2">Call Us Directly</h4>
                <p className="text-gray-600 mb-2">Speak with our sales team for immediate assistance</p>
                <a 
                  href="tel:(416)555-0123" 
                  className="text-yellow-600 font-semibold text-lg hover:text-yellow-700"
                >
                  (416) 555-0123
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Email Us</h4>
                <p className="text-gray-600 mb-2">Send us your requirements via email</p>
                <a 
                  href="mailto:quotes@6ixsideconstruction.com" 
                  className="text-yellow-600 font-semibold hover:text-yellow-700"
                >
                  quotes@6ixsideconstruction.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
