import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_DATA } from '../constants';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      // Send email using Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '8acaff68-d872-4387-b65c-320953213686', // User provided key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
          from_name: 'Portfolio Contact Form',
          to_email: 'anthboakye@gmail.com',
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try emailing directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-fintech-950/80 py-24 border-t border-gray-800 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 text-lg">
            I'm currently available for new opportunities in Digital Transformation, Innovation, and Data Analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-fintech-900/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <a href={`mailto:${HERO_DATA.contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-fintech-accent transition-colors group">
              <div className="w-12 h-12 bg-fintech-800 rounded-full flex items-center justify-center group-hover:bg-fintech-accent group-hover:text-black transition-colors">
                <Mail size={20} />
              </div>
              <span className="text-lg">{HERO_DATA.contact.email}</span>
            </a>

            <a href={`tel:${HERO_DATA.contact.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-fintech-accent transition-colors group">
              <div className="w-12 h-12 bg-fintech-800 rounded-full flex items-center justify-center group-hover:bg-fintech-accent group-hover:text-black transition-colors">
                <Phone size={20} />
              </div>
              <span className="text-lg">{HERO_DATA.contact.phone}</span>
            </a>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-fintech-800 rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="text-lg">{HERO_DATA.contact.location}</span>
            </div>

            <a href={`https://${HERO_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-fintech-accent transition-colors group">
              <div className="w-12 h-12 bg-fintech-800 rounded-full flex items-center justify-center group-hover:bg-fintech-accent group-hover:text-black transition-colors">
                <Linkedin size={20} />
              </div>
              <span className="text-lg">Connect on LinkedIn</span>
            </a>
          </div>

          <div className="bg-fintech-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 relative">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center bg-fintech-800 rounded-2xl z-10"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      Message Sent!
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-400"
                    >
                      Thank you for reaching out. I'll get back to you soon!
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full bg-fintech-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-fintech-accent transition-colors disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full bg-fintech-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-fintech-accent transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full bg-fintech-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-fintech-accent transition-colors disabled:opacity-50"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <XCircle size={16} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-fintech-500 to-fintech-accent text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-fintech-accent/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Anthony Boakye. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
