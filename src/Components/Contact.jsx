import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');
      
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-primary relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8">
              Let's <span className="gradient-text">Collaborate.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              Have an idea or a project? Let's talk about it and build something incredible together.
            </p>

            <div className="space-y-8">
              {[
                { icon: <FiMail />, label: "Email", value: "aravindrps75@gmail.com", href: "mailto:aravindrps75@gmail.com" },
                { icon: <FiPhone />, label: "Phone", value: "+91 63806 01959", href: "tel:+916380601959" },
                { icon: <FiMapPin />, label: "Location", value: "Tamil Nadu, India", href: "#" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">{item.label}</p>
                    <a href={item.href} className="text-white font-bold text-lg hover:text-accent-cyan transition-colors">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm ml-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-secondary border border-white/5 rounded-2xl p-4 text-white focus:border-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm ml-1">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-secondary border border-white/5 rounded-2xl p-4 text-white focus:border-accent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm ml-1">Message</label>
                <textarea 
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can I help you?"
                  className="w-full bg-secondary border border-white/5 rounded-2xl p-4 text-white focus:border-accent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {status.error && <p className="text-red-500 text-sm">{status.error}</p>}
              {status.success && <p className="text-green-500 text-sm">✅ Message sent! I'll get back to you soon.</p>}

              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full py-5 bg-gradient-to-r from-accent to-accent-cyan text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-accent/20"
              >
                {status.loading ? "Sending..." : "Send Message"}
                <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;