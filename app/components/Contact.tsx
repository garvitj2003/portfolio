"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: Phone,
      title: "Call me",
      value: "+91 7415275801",
      description: "Available for calls and consultation",
      action: "tel:+917415275801",
    },
    {
      id: 2,
      icon: Mail,
      title: "Write an email",
      value: "garvitj2003@gmail.com",
      description: "Quick response within 24 hours",
      action: "mailto:garvitj2003@gmail.com",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Visit my office",
      value: "Bhopal, Madhya Pradesh",
      description: "Available for in-person meetings",
      action: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-[#aaaaaa] font-jetbrains-mono text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              CONTACT ME
            </motion.p>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6 font-jetbrains-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let&apos;s talk!
            </motion.h2>

            <motion.p
              className="text-lg text-[#aaaaaa] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Feel free to reach out! I&apos;m here to help and will respond
              within 24 hours. Your questions matter to me!
            </motion.p>

            {/* Additional Info */}
            <motion.div
              className="bg-[#1a1a1a] rounded-lg p-6 border border-[#333]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-3">
                What I can help with:
              </h3>
              <ul className="space-y-2 text-[#aaaaaa] text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#555] rounded-full mr-3" />
                  Full-stack web development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#555] rounded-full mr-3" />
                  Next.js and React.js projects
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#555] rounded-full mr-3" />
                  Technical consultation
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#555] rounded-full mr-3" />
                  Code review and optimization
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;

              return (
                <motion.a
                  key={info.id}
                  href={info.action}
                  className="block bg-[#1a1a1a] rounded-2xl p-6 border border-[#333] hover:border-[#444] transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center group-hover:bg-[#333] transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-[#aaaaaa] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-white transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-[#cccccc] font-medium mb-2 group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                      <p className="text-[#aaaaaa] text-sm">
                        {info.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center group-hover:bg-[#333] transition-all duration-300 group-hover:translate-x-1">
                        <svg
                          className="w-4 h-4 text-[#aaaaaa] group-hover:text-white transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
