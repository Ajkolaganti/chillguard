import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, CreditCard, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,  // non-null assertion
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Here you would send paymentMethod.id to your server to create a charge
    console.log('PaymentMethod:', paymentMethod);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CardElement className="p-4 bg-white/5 rounded-xl border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors" />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" disabled={!stripe || loading} className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-lg relative overflow-hidden group">
        <span className="relative z-10">{loading ? 'Processing...' : 'Complete Purchase'}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ x: '100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
    </form>
  );
};

export const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="flex-1 flex flex-col justify-center items-center py-16">
          <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-gray-400 mb-12"
            >
              <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/product" className="hover:text-purple-400 transition-colors">Product</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-purple-400">Checkout</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 p-8 rounded-2xl shadow-lg backdrop-blur-md"
              >
                <motion.h1
                  className="text-4xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Checkout
                  <span className="block text-2xl font-normal bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                    Complete Your Purchase
                  </span>
                </motion.h1>

                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Shipping Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <CheckoutForm />
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:pl-16"
              >
                <div className="sticky top-32">
                  <motion.div
                    className="rounded-2xl bg-white/5 p-8 backdrop-blur-xl border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-4">
                        <img
                          src="/qqt1.jpg"
                          alt="ChillGuard Space Heater"
                          className="w-20 h-20 object-cover rounded-xl"
                        />
                        <div>
                          <h3 className="font-medium">ChillGuard Space Heater</h3>
                          <p className="text-gray-400">Quantity: 1</p>
                        </div>
                        <div className="ml-auto">
                          <p className="font-medium">$59.99</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-6 space-y-4">
                      <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span>$59.99</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Tax</span>
                        <span>$5.00</span>
                      </div>
                      <div className="flex justify-between font-bold text-xl pt-4 border-t border-white/10">
                        <span>Total</span>
                        <span>$64.99</span>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-gray-400">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm">Secure checkout powered by Stripe</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};