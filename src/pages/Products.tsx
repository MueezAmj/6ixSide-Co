import React from 'react';
import ProductCard from '../components/ProductCard';
import { 
  Hammer, 
  Home as HomeIcon, 
  Wrench, 
  Building, 
  Construction 
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Wood & Lumber",
      description: "Premium quality lumber including dimensional lumber, engineered wood, plywood, and specialty wood products for framing, flooring, and finishing.",
      image: "/lovable-uploads/77ae42e8-4556-4ddf-88d1-76c9eccab88b.png",
      inStock: true,
      icon: <Construction />
    },
    {
      name: "Flooring",
      description: "Complete flooring solutions including hardwood, laminate, vinyl, tile, and carpet options with underlayment and installation accessories.",
      image: "/lovable-uploads/0e7092c3-52bc-4abb-baab-a09fc61ff7fc.png",
      inStock: true,
      icon: <HomeIcon />
    },
    {
      name: "Washroom Products",
      description: "Complete bathroom renovation supplies including tiles, fixtures, vanities, plumbing supplies, and finishing materials.",
      image: "/lovable-uploads/ce612bfa-53bc-4c0d-90ce-be9a11b69f95.png",
      inStock: false,
      icon: <Wrench />
    },
    {
      name: "Concrete & Cement",
      description: "High-strength concrete, cement, aggregates, reinforcement materials, and concrete additives for all construction applications.",
      image: "/lovable-uploads/6dc8aadd-6ae7-4f46-8c88-c8cb9092b0c0.png",
      inStock: true,
      icon: <Building />
    },
    {
      name: "Drywall",
      description: "Complete drywall systems including panels, joint compound, tape, corner beads, and finishing supplies for interior construction.",
      image: "/lovable-uploads/1e026965-4042-499f-93d7-c57486891df6.png",
      inStock: true,
      icon: <Wrench />
    },
    {
      name: "Roofing Materials",
      description: "Comprehensive roofing solutions including shingles, underlayment, flashing, gutters, and roofing accessories.",
      image: "/lovable-uploads/35507a8c-ce6d-43fa-9b4a-5174d069049f.png",
      inStock: false,
      icon: <HomeIcon />
    },
    {
      name: "Insulation",
      description: "Energy-efficient insulation materials including fiberglass, foam, and reflective insulation for thermal and sound control.",
      image: "/lovable-uploads/c57409e5-6b75-47ba-bb90-5a2dd8bdc5a4.png",
      inStock: true,
      icon: <Building />
    },
    {
      name: "Tools & Fasteners",
      description: "Professional-grade tools, fasteners, hardware, and construction accessories from trusted brands.",
      image: "/lovable-uploads/9d04bcbd-b9dc-4531-a793-44b3f9e5dc30.png",
      inStock: true,
      icon: <Hammer />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-light">
              Comprehensive selection of premium building materials for every construction need
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-blue-light/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-dark mb-6">Can't Find What You Need?</h2>
            <p className="text-xl text-blue-medium mb-8">
              We work with hundreds of suppliers and can source specialty items for your project. 
              Contact us with your specific requirements and we'll find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/quote" 
                className="bg-blue-medium text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-dark transition-colors"
              >
                Request Custom Quote
              </a>
              <a 
                href="tel:(416)555-0123" 
                className="border-2 border-blue-dark text-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-blue-dark hover:text-white transition-colors"
              >
                Call Us: (416) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
