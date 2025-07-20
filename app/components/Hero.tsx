"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Name */}
            <motion.p
              className="text-[#aaaaaa] font-figtree  text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Garvit Jain
            </motion.p>

            {/* Main Title */}
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-figtree leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Full-Stack Developer & Software Engineer
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-[#aaaaaa] mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Passionate about building scalable applications and solving
              complex technical challenges. Experienced in modern technologies
              and frameworks with a focus on clean, efficient code.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.a
                href="#contact"
                className="bg-[#1f1f1f] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2a2a2a] transition-all duration-200 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact me
              </motion.a>

              <motion.a
                href="#portfolio"
                className="border border-[#333] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1a1a1a] transition-all duration-200 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Artistic Illustration */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Artistic Woman Illustration */}
            <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center">
              {/* Profile Image Container with Grid */}
              <div className="relative w-[400px] h-[500px]">
                {/* Grid Background - positioned to match image exactly */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                    {Array.from({ length: 144 }).map((_, i) => (
                      <div key={i} className="border border-[#333]"></div>
                    ))}
                  </div>
                </div>

                {/* Fade Overlay Divs */}
                {/* Top fade */}
                <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-[#0d0d0d] to-transparent z-20 pointer-events-none"></div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-[#0d0d0d] to-transparent z-20 pointer-events-none"></div>

                {/* Left fade */}
                <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-[#0d0d0d] to-transparent z-20 pointer-events-none"></div>

                {/* Right fade */}
                <div className="absolute top-0 bottom-0 right-0 w-5 bg-gradient-to-l from-[#0d0d0d] to-transparent z-20 pointer-events-none"></div>

                {/* Profile Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="/profile_image.png"
                    alt="Garvit Jain - Profile"
                    className="drop-shadow-2xl rounded-lg object-cover w-[80%] h-[80%]"
                  />
                </div>

                {/* Floating Geometric Elements */}
                <motion.div
                  className="absolute top-26 right-20 w-8 h-8 rounded bg-amber-400 opacity-80 z-5"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 45, 90, 45, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute rounded-lg bottom-20 left-16 w-6 h-6 bg-red-400 opacity-80 z-5"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -45, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute rounded-full top-32 left-20 w-4 h-4 bg-purple-600 opacity-30 z-30"
                  animate={{
                    x: [0, 15, 0],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
