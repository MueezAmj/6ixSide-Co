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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Home = () => {
  const featuredProducts = [
    {
      name: "Building Supply",
      description: "Comprehensive building supplies including structural materials, hardware, and essential construction components for all project types.",
      image: "/lovable-uploads/ea91c266-7716-48af-929f-9052d189e486.png",
      inStock: true,
      icon: <Construction />
    },
    {
      name: "Material Flooring",
      description: "Specialized flooring materials including engineered flooring, subfloor systems, transition strips, and premium flooring accessories.",
      image: "/lovable-uploads/ab3fde89-859e-408a-afaf-dd4c2750d7dd.png",
      inStock: true,
      icon: <HomeIcon />
    },
    {
      name: "Drywall",
      description: "Complete drywall systems including panels, joint compound, tape, corner beads, and finishing supplies for interior construction.",
      image: "/lovable-uploads/1e026965-4042-499f-93d7-c57486891df6.png",
      inStock: true,
      icon: <Wrench />
    },
    {
      name: "Insulation",
      description: "Energy-efficient insulation materials including fiberglass, foam, and reflective insulation for thermal and sound control.",
      image: "/lovable-uploads/c57409e5-6b75-47ba-bb90-5a2dd8bdc5a4.png",
      inStock: true,
      icon: <Building />
    }
  ];

  const bannerImages = [
    {
      src: "/lovable-uploads/ea91c266-7716-48af-929f-9052d189e486.png",
      alt: "Building Supply"
    },
    {
      src: "/lovable-uploads/ab3fde89-859e-408a-afaf-dd4c2750d7dd.png",
      alt: "Material Flooring"
    },
    {
      src: "/lovable-uploads/1e026965-4042-499f-93d7-c57486891df6.png",
      alt: "Drywall"
    },
    {
      src: "/lovable-uploads/c57409e5-6b75-47ba-bb90-5a2dd8bdc5a4.png",
      alt: "Insulation"
    },
    {
      src: "/lovable-uploads/35507a8c-ce6d-43fa-9b4a-5174d069049f.png",
      alt: "Roofing Materials"
    },
    {
      src: "/lovable-uploads/77ae42e8-4556-4ddf-88d1-76c9eccab88b.png",
      alt: "Wood & Lumber"
    },
    {
      src: "/lovable-uploads/0e7092c3-52bc-4abb-baab-a09fc61ff7fc.png",
      alt: "Flooring"
    },
    {
      src: "/lovable-uploads/ce612bfa-53bc-4c0d-90ce-be9a11b69f95.png",
      alt: "Washroom Products"
    },
    {
      src: "/lovable-uploads/6dc8aadd-6ae7-4f46-8c88-c8cb9092b0c0.png",
      alt: "Concrete & Cement"
    },
    {
      src: "/lovable-uploads/9d04bcbd-b9dc-4531-a793-44b3f9e5dc30.png",
      alt: "Tools & Fasteners"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-dark to-blue-medium text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Local Source for Premium Building Materials in the GTA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-light">
              Trusted supplier serving contractors, builders, and homeowners across the Greater Toronto Area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quote" 
                className="bg-blue-light text-blue-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-medium-light transition-colors inline-flex items-center justify-center"
              >
                Request a Quote <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/products" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-dark transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Banner Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Our Construction Materials
            </h2>
            <p className="text-xl text-blue-medium">
              Premium quality materials for every construction project
            </p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
            <CarouselContent className="-ml-1">
              {bannerImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-medium text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-dark">Fast Delivery</h3>
              <p className="text-blue-medium">Quick delivery across the GTA</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-medium text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-dark">Quality Guaranteed</h3>
              <p className="text-blue-medium">Premium materials you can trust</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-medium text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-dark">Quick Service</h3>
              <p className="text-blue-medium">Fast quotes and order processing</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-medium text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-dark">Expert Support</h3>
              <p className="text-blue-medium">Knowledgeable team to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Featured Product Categories
            </h2>
            <p className="text-xl text-blue-medium max-w-2xl mx-auto">
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
              className="bg-blue-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-medium transition-colors inline-flex items-center"
            >
              View All Products <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-medium py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-light mb-8 max-w-2xl mx-auto">
            Get a custom quote for your construction materials today. Fast, competitive pricing for all your building needs.
          </p>
          <Link 
            to="/quote" 
            className="bg-white text-blue-medium px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-light transition-colors inline-flex items-center"
          >
            Get Your Quote Now <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
