
import React from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-construction-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About 881 Canada Inc.</h1>
            <p className="text-xl text-construction-light">
              Your trusted partner for premium building materials in the Greater Toronto Area
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-construction-dark mb-6">Our Story</h2>
                <p className="text-construction-medium mb-4 leading-relaxed">
                  Founded in Toronto, 881 Canada Inc. has been serving the Greater Toronto Area's construction and renovation needs for over a decade. We started as a small family business with a simple mission: to provide high-quality building materials with exceptional customer service.
                </p>
                <p className="text-construction-medium mb-4 leading-relaxed">
                  Today, we've grown to become one of the most trusted suppliers in the GTA, serving everyone from weekend DIY enthusiasts to large-scale commercial contractors. Our commitment to quality, competitive pricing, and fast delivery has made us the go-to choice for construction professionals across Toronto and surrounding areas.
                </p>
                <p className="text-construction-medium leading-relaxed">
                  We understand that time is money in construction, which is why we maintain extensive inventory and offer same-day delivery for most orders within the GTA.
                </p>
              </div>
              <div className="bg-construction-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-construction-dark mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Award className="text-construction-medium mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-construction-dark">Premium Quality</h4>
                      <p className="text-construction-medium text-sm">Only the highest quality materials from trusted manufacturers</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="text-construction-medium mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-construction-dark">Expert Service</h4>
                      <p className="text-construction-medium text-sm">Knowledgeable team ready to help with your project needs</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="text-construction-medium mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-construction-dark">Fast Delivery</h4>
                      <p className="text-construction-medium text-sm">Quick turnaround times and reliable delivery across the GTA</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MapPin className="text-construction-medium mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-construction-dark">Local Focus</h4>
                      <p className="text-construction-medium text-sm">Deep understanding of GTA construction needs and regulations</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-construction-light p-8 rounded-lg mb-16">
              <h3 className="text-2xl font-bold text-construction-dark mb-6 text-center">Our Service Area</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-construction-dark">Toronto Proper</h4>
                  <p className="text-construction-medium text-sm">Downtown, North York, Scarborough, Etobicoke, East York, York</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-construction-dark">Greater Toronto Area</h4>
                  <p className="text-construction-medium text-sm">Mississauga, Brampton, Markham, Richmond Hill, Vaughan, Oakville</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-construction-dark">Surrounding Areas</h4>
                  <p className="text-construction-medium text-sm">Ajax, Pickering, Whitby, Oshawa, Burlington, Milton</p>
                </div>
              </div>
            </div>

            {/* Commitment */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-construction-dark mb-6">Our Commitment</h3>
              <p className="text-xl text-construction-medium max-w-3xl mx-auto leading-relaxed">
                At 881 Canada Inc., we're committed to being more than just a supplier – we're your construction partner. Whether you're building a new home, renovating your kitchen, or managing a large commercial project, we're here to ensure you have the right materials, at the right time, at the right price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
