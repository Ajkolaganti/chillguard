import { motion } from 'framer-motion';
import { ArrowRight, Zap, Thermometer, Timer } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The Future of
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Home Heating
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Experience next-generation comfort with our AI-powered smart heater.
              Efficient, safe, and beautifully designed for the modern home.
            </motion.p>

            <motion.div
              className="grid sm:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Energy Efficient</h3>
                  <p className="text-gray-400 text-sm">Save up to 50% on heating costs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Thermometer className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Smart Control</h3>
                  <p className="text-gray-400 text-sm">AI-powered temperature adjustment</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Timer className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick Heat</h3>
                  <p className="text-gray-400 text-sm">Instant warmth in seconds</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="/product"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-lg relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Buy Now - $59.99</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/product"
                className="inline-flex items-center justify-center px-8 py-4 border border-purple-500/30 rounded-full font-medium text-lg hover:bg-purple-500/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-0 lg:z-10"
          >
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="relative mx-auto max-w-[500px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/qqt1.jpg"
                alt="ChillGuard Space Heater"
                className="w-full h-auto object-contain relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};