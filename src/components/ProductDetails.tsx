import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types/product';
import { useState } from 'react';
import { ChevronDown, ChevronUp, ShoppingCart, Heart } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <motion.div 
          className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          In Stock
        </motion.div>
        <motion.h1 
          className="mt-4 text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {product.name}
        </motion.h1>
        <motion.div 
          className="mt-4 flex items-baseline gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-3xl font-bold text-orange-600">${product.price}</span>
          <span className="text-lg text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
          <span className="text-green-600 font-medium">Save 20%</span>
        </motion.div>
      </div>

      <motion.div 
        className="prose max-w-none text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p>{product.description}</p>
      </motion.div>

      <div className="space-y-4">
        <motion.button
          onClick={() => setIsSpecsOpen(!isSpecsOpen)}
          className="flex w-full items-center justify-between rounded-xl bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <span className="font-medium">Technical Specifications</span>
          {isSpecsOpen ? <ChevronUp /> : <ChevronDown />}
        </motion.button>

        <AnimatePresence>
          {isSpecsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              <div className="p-4 space-y-3">
                {product.technicalSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center py-2"
                  >
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            -
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            +
          </button>
        </div>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 text-white font-semibold shadow-lg shadow-orange-600/30"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 rounded-xl border border-gray-300 hover:bg-gray-50"
          >
            <Heart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};