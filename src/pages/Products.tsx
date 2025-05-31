
import React from 'react';
import ProductCard from '../components/ProductCard';
import { 
  Hammer, 
  Home as HomeIcon, 
  Wrench, 
  Building, 
  Construction, 
  Tools 
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Wood & Lumber",
      description: "Premium quality lumber including dimensional lumber, engineered wood, plywood, and specialty wood products for framing, flooring, and finishing.",
      image: "/placeholder-wood.jpg",
      inStock: true,
      icon: <Construction />
    },
    {
      name: "Flooring",
      description: "Complete flooring solutions including hardwood, laminate, vinyl, tile, and carpet options with underlayment and installation accessories.",
      image: "/placeholder-flooring.jpg",
      inStock: true,
      icon: <HomeIcon />
    },
    {
      name: "Washroom Products",
      description: "Complete bathroom renovation supplies including tiles, fixtures, vanities, plumbing supplies, and finishing materials.",
      image: "/placeholder-bathroom.jpg",
      inStock: false,
      icon: <Wrench />
    },
    {
      name: "Concrete & Cement",
      description: "High-strength concrete, cement, aggregates, reinforcement materials, and concrete additives for all construction applications.",
      image: "/placeholder-concrete.jpg",
      inStock: true,
      icon: <Building />
    },
    {
      name: "Drywall",
      description: "Complete drywall systems including panels, joint compound, tape, corner beads, and finishing supplies for interior construction.",
      image: "/placeholder-drywall.jpg",
      inStock: true,
      icon: <Tools />
    },
    {
      name: "Roofing Materials",
      description: "Comprehensive roofing solutions including shingles, underlayment, flashing, gutters, and roofing accessories.",
      image: "/placeholder-roofing.jpg",
      inStock: false,
      icon: <HomeIcon />
    },
    {
      name: "Insulation",
      description: "Energy-efficient insulation materials including fiberglass, foam, and reflective insulation for thermal and sound control.",
      image: "/placeholder-insulation.jpg",
      inStock: true,
      icon: <Building />
    },
    {
      name: "Tools & Fasteners",
      description: "Professional-grade tools, fasteners, hardware, and construction accessories from trusted brands.",
      image: "/placeholder-tools.jpg",
      inStock: true,
      icon: <Hammer />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-300">
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Can't Find What You Need?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We work with hundreds of suppliers and can source specialty items for your project. 
              Contact us with your specific requirements and we'll find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/quote" 
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Request Custom Quote
              </a>
              <a 
                href="tel:(416)555-0123" 
                className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
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
