
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  inStock: boolean;
  icon: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, inStock, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {inStock ? (
              <>
                <Check size={16} className="text-green-600" />
                <span className="text-green-600 text-sm font-medium">In Stock</span>
              </>
            ) : (
              <>
                <Clock size={16} className="text-orange-600" />
                <span className="text-orange-600 text-sm font-medium">Available on Order</span>
              </>
            )}
          </div>
        </div>
        
        <Link 
          to="/quote" 
          className="w-full bg-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:bg-yellow-600 transition-colors text-center block"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
