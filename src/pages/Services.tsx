
import React from 'react';
import { Truck, Package, Users, Clock, MapPin, Calculator } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck size={48} />,
      title: "Local Delivery",
      description: "Fast and reliable delivery service throughout the Greater Toronto Area. Same-day delivery available for orders placed before 2 PM.",
      features: ["Same-day delivery available", "Professional delivery team", "Flexible scheduling", "GTA-wide coverage"]
    },
    {
      icon: <MapPin size={48} />,
      title: "Curbside Pickup",
      description: "Convenient curbside pickup service at our Toronto location. Order online or by phone and we'll have your materials ready.",
      features: ["Quick pickup service", "Pre-loaded orders", "Convenient location", "No waiting time"]
    },
    {
      icon: <Package size={48} />,
      title: "Bulk Order Management",
      description: "Specialized handling for large construction projects with dedicated account management and volume pricing.",
      features: ["Volume discounts", "Dedicated account manager", "Staged delivery options", "Project planning support"]
    },
    {
      icon: <Calculator size={48} />,
      title: "Custom Order Requests",
      description: "Can't find what you need? We'll source specialty materials and custom products for your unique project requirements.",
      features: ["Specialty material sourcing", "Custom fabrication coordination", "Expert product recommendations", "Competitive pricing"]
    },
    {
      icon: <Users size={48} />,
      title: "Contractor Accounts",
      description: "Special trade pricing and payment terms for qualified contractors and building professionals.",
      features: ["Trade pricing", "Extended payment terms", "Priority service", "Bulk ordering benefits"]
    },
    {
      icon: <Clock size={48} />,
      title: "Emergency Supply",
      description: "24/7 emergency supply service for critical construction needs. When you can't wait, we deliver.",
      features: ["24/7 emergency service", "Rapid response time", "Critical material focus", "Emergency contact line"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-light">
              Comprehensive construction supply services designed to keep your projects on track
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="text-blue-medium mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-dark mb-4">{service.title}</h3>
                <p className="text-blue-medium mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-medium rounded-full"></div>
                      <span className="text-blue-dark text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Area */}
      <section className="bg-blue-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-dark mb-8 text-center">Delivery Coverage Area</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-dark mb-4">Same-Day Delivery Available</h3>
                  <ul className="space-y-2 text-blue-medium">
                    <li>• Toronto (all districts)</li>
                    <li>• North York</li>
                    <li>• Scarborough</li>
                    <li>• Etobicoke</li>
                    <li>• Mississauga</li>
                    <li>• Brampton</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-dark mb-4">Next-Day Delivery Available</h3>
                  <ul className="space-y-2 text-blue-medium">
                    <li>• Markham</li>
                    <li>• Richmond Hill</li>
                    <li>• Vaughan</li>
                    <li>• Oakville</li>
                    <li>• Burlington</li>
                    <li>• Ajax & Pickering</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-light rounded-lg">
                <p className="text-blue-dark text-center">
                  <strong>Delivery Note:</strong> Delivery times may vary based on order size, product availability, and weather conditions. 
                  Contact us for specific delivery scheduling and rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-medium py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-light mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project needs and learn more about our services. 
            We're here to help make your construction project successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/quote" 
              className="bg-white text-blue-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-light transition-colors"
            >
              Request a Quote
            </a>
            <a 
              href="tel:(416)555-0123" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-dark transition-colors"
            >
              Call: (416) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
