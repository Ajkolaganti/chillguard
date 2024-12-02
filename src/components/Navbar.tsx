import { motion } from 'framer-motion';
import { ShoppingCart, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 backdrop-blur-md ${
        location.pathname === '/' ? 'bg-transparent' : 'bg-white/80 dark:bg-gray-900/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <span className={`text-xl font-bold ${
              location.pathname === '/' ? 'text-white' : 'text-gray-900 dark:text-white'
            }`}>
              ChillGuard
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${
                location.pathname === '/' 
                  ? 'hover:bg-white/10 text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <Link to="/checkout">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full ${
                  location.pathname === '/' 
                    ? 'hover:bg-white/10 text-white' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <ShoppingCart size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};