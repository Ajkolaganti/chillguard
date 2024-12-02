import { motion } from 'framer-motion';
import { Flame, Zap, Shield, Wind, Sparkles, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI-Powered",
    description: "Smart temperature adjustment based on your preferences",
    color: "from-blue-600 to-cyan-400",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Dual Mode Heating",
    description: "800w/1200w modes for efficient energy usage",
    color: "from-orange-600 to-red-400",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Heat",
    description: "Quick 2-second warmup technology",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Smart Safety",
    description: "Multiple protection features for peace of mind",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Silent Operation",
    description: "Whisper-quiet technology for undisturbed comfort",
    color: "from-purple-600 to-pink-400",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Auto Clean",
    description: "Self-maintaining system for lasting performance",
    color: "from-indigo-600 to-blue-400",
  },
];

export const Features = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Features
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Experience the future of home heating technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="relative z-10 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-2 flex items-center justify-center text-white mb-6`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{
                    background: `linear-gradient(to right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px]" />
      </div>
    </section>
  );
};
