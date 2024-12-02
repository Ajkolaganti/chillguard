import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductImage } from '../types/product';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
  images: ProductImage[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={images[activeImage].url}
            alt={images[activeImage].alt}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </AnimatePresence>

        <motion.button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
          onClick={prevImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
          onClick={nextImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        <motion.button
          className="absolute right-4 bottom-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <ZoomIn className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative aspect-square rounded-lg overflow-hidden ${
              index === activeImage ? 'ring-2 ring-orange-500' : ''
            }`}
            onClick={() => setActiveImage(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {index === activeImage && (
              <motion.div
                layoutId="activeImage"
                className="absolute inset-0 border-2 border-orange-500 rounded-lg"
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};