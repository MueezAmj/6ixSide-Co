import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { 
  Hammer, 
  Home as HomeIcon, 
  Wrench, 
  Building, 
  Construction 
} from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      name: "Wood & Lumber",
      description: "Premium quality lumber for all your construction needs",
      image: "/placeholder-wood.jpg",
      inStock: true,
      icon: <Construction />
    },
    {
      name: "Flooring",
      description: "Hardwood, laminate, and tile flooring options",
      image: "/placeholder-flooring.jpg",
      inStock: true,
      icon: <HomeIcon />
    },
    {
      name: "Washroom Products",
      description: "Complete bathroom renovation supplies",
      image: "/placeholder-bathroom.jpg",
      inStock: false,
      icon: <Wrench />
    },
    {
      name: "Concrete & Cement",
      description: "High-strength concrete and cement products",
      image: "/placeholder-concrete.jpg",
      inStock: true,
      icon: <Building />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Local Source for Premium Building Materials in the GTA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Trusted supplier serving contractors, builders, and homeowners across the Greater Toronto Area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quote" 
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center"
              >
                Request a Quote <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/products" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery across the GTA</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Premium materials you can trust</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast quotes and order processing</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Knowledgeable team to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We supply everything you need for your construction and renovation projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/products" 
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-flex items-center"
            >
              View All Products <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Get a custom quote for your construction materials today. Fast, competitive pricing for all your building needs.
          </p>
          <Link 
            to="/quote" 
            className="bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            Get Your Quote Now <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
