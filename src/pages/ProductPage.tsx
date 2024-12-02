import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Star, Shield, Zap, Wind, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = ['/qqt1.jpg', '/qqt2.jpg', '/qqt3.jpg'];

export const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const features = [
    { icon: <Thermometer className="w-6 h-6" />, text: "Dual Mode: 800w/1200w" },
    { icon: <Zap className="w-6 h-6" />, text: "Quick 2s Heat-up" },
    { icon: <Shield className="w-6 h-6" />, text: "Multiple Safety Features" },
    { icon: <Wind className="w-6 h-6" />, text: "Silent Operation" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-gray-400 mb-12"
        >
          <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-purple-400">ChillGuard Space Heater</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
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
              className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                key={selectedImage}
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-purple-500' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  {selectedImage === index && (
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20"
                      layoutId="selectedImage"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-400">(150+ Reviews)</span>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              ChillGuard Space Heater
              <span className="block text-2xl font-normal bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                Next-Gen Heating Technology
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience the future of home heating with our AI-powered smart heater. 
              Featuring dual-mode heating, instant warmup, and advanced safety features.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div className="text-purple-400">{feature.icon}</div>
                  <p className="text-gray-300">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-8 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <p className="text-gray-400 mb-2">Price</p>
                <p className="text-3xl font-bold">$59.99</p>
                <p className="text-sm text-gray-400">Free Shipping</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Quantity</p>
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                  >
                    -
                  </motion.button>
                  <span className="text-xl">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                  >
                    +
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/checkout" className="flex-1">
                <motion.button
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Buy Now</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <motion.button
                className="px-8 py-4 border border-purple-500/30 rounded-full font-medium text-lg hover:bg-purple-500/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold mb-8">
            Customer Reviews
            <span className="block text-xl font-normal bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
              What Our Customers Are Saying
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Sarah Johnson",
                date: "2 days ago",
                rating: 5,
                title: "Perfect for my home office!",
                review: "This heater is exactly what I needed for my home office. It heats up quickly and maintains a comfortable temperature. The smart features are a game-changer!",
                verified: true
              },
              {
                name: "Michael Chen",
                date: "1 week ago",
                rating: 5,
                title: "Energy efficient and stylish",
                review: "I've noticed a significant decrease in my heating bills since using this. The modern design fits perfectly with my minimalist decor. Highly recommend!",
                verified: true
              },
              {
                name: "Emily Rodriguez",
                date: "2 weeks ago",
                rating: 4,
                title: "Great smart features",
                review: "The app control is fantastic and the temperature sensing is very accurate. Would give 5 stars but the setup took a little longer than expected.",
                verified: true
              },
              {
                name: "David Kim",
                date: "3 weeks ago",
                rating: 5,
                title: "Excellent heating performance",
                review: "Heats up my room in minutes. The oscillation feature ensures even heat distribution. Very impressed with the build quality.",
                verified: true
              },
              {
                name: "Lisa Thompson",
                date: "1 month ago",
                rating: 5,
                title: "Worth every penny",
                review: "The smart scheduling feature is perfect for ensuring my room is warm when I wake up. Very pleased with the energy efficiency.",
                verified: true
              },
              {
                name: "James Wilson",
                date: "1 month ago",
                rating: 4,
                title: "Solid performance",
                review: "Good heating capability and nice modern look. The smart features are useful, though the app could use some minor improvements.",
                verified: true
              },
              {
                name: "Amanda Martinez",
                date: "1 month ago",
                rating: 5,
                title: "Perfect for cold winters",
                review: "Living in a cold climate, this heater has been a lifesaver. The dual heating modes are very effective, and I love the safety features.",
                verified: true
              },
              {
                name: "Robert Taylor",
                date: "2 months ago",
                rating: 5,
                title: "Excellent smart heater",
                review: "The AI temperature control is impressive. It learns your preferences and adjusts accordingly. Very energy efficient too!",
                verified: true
              },
              {
                name: "Sophie Anderson",
                date: "2 months ago",
                rating: 4,
                title: "Great for small spaces",
                review: "Perfect size for my apartment. Heats quickly and maintains temperature well. The modern design is a nice bonus.",
                verified: true
              },
              {
                name: "William Brown",
                date: "2 months ago",
                rating: 5,
                title: "Outstanding quality",
                review: "The build quality is exceptional. Very stable and the controls are responsive. The app integration works flawlessly.",
                verified: true
              },
              {
                name: "Maria Garcia",
                date: "3 months ago",
                rating: 5,
                title: "Love the smart features",
                review: "The ability to control it from my phone is fantastic. The temperature sensing is very accurate, and it's very energy efficient.",
                verified: true
              },
              {
                name: "Thomas Lee",
                date: "3 months ago",
                rating: 4,
                title: "Efficient and quiet",
                review: "Very quiet operation and effective heating. The only minor issue is that the app occasionally needs to be refreshed.",
                verified: true
              },
              {
                name: "Rachel White",
                date: "3 months ago",
                rating: 5,
                title: "Perfect for my needs",
                review: "The timer function is great, and it heats up quickly. Very satisfied with the purchase and the customer service.",
                verified: true
              },
              {
                name: "Daniel Clark",
                date: "4 months ago",
                rating: 5,
                title: "Impressive technology",
                review: "The smart features work better than expected. Very efficient heating and the safety features give peace of mind.",
                verified: true
              },
              {
                name: "Jennifer Hall",
                date: "4 months ago",
                rating: 5,
                title: "Excellent purchase",
                review: "The oscillation feature ensures even heating throughout the room. Very pleased with the energy efficiency.",
                verified: true
              },
              {
                name: "Kevin Martin",
                date: "4 months ago",
                rating: 4,
                title: "Good value",
                review: "Solid performance and nice design. The smart features are useful, though the app could use some minor updates.",
                verified: true
              },
              {
                name: "Laura Adams",
                date: "5 months ago",
                rating: 5,
                title: "Best heater I've owned",
                review: "The combination of smart features and heating performance is perfect. Very happy with this purchase.",
                verified: true
              },
              {
                name: "Christopher Wong",
                date: "5 months ago",
                rating: 5,
                title: "Highly recommended",
                review: "Easy to use, efficient, and the smart features work great. The design is modern and fits well in any room.",
                verified: true
              },
              {
                name: "Michelle Davis",
                date: "5 months ago",
                rating: 5,
                title: "Amazing smart heater",
                review: "The AI temperature control is impressive. It maintains the perfect temperature and saves energy.",
                verified: true
              },
              {
                name: "Ryan Miller",
                date: "6 months ago",
                rating: 5,
                title: "Excellent product",
                review: "Very satisfied with the heating performance and smart features. The build quality is outstanding.",
                verified: true
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-lg">{review.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`}
                            fill={i < review.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">|</span>
                      <span className="text-sm text-gray-400">{review.rating} out of 5</span>
                      <span className="text-sm text-gray-400">|</span>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{review.review}</p>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-sm font-medium">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-400">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-8">
              <div>
                <p className="text-4xl font-bold">4.8</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4.8 ? 'text-yellow-400 fill-current' : 'text-gray-400'
                      }`}
                      fill={i < 4.8 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-1">Based on 150+ reviews</p>
              </div>
              
              <div className="flex-1">
                <div className="space-y-2">
                  {[
                    { stars: 5, percentage: 85 },
                    { stars: 4, percentage: 12 },
                    { stars: 3, percentage: 2 },
                    { stars: 2, percentage: 1 },
                    { stars: 1, percentage: 0 }
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-400">{rating.stars}</span>
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-400 to-blue-400"
                          style={{ width: `${rating.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{rating.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};