import profilePic from "../assets/mypic.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const elementPosition = document.getElementById("hero-section").offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition + windowHeight > elementPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pb-4 lg:mb-36" id="hero-section">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-4">
            <motion.img
              src={profilePic}
              alt="Alaa Abderrahim"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="font-domine text-pink-900 text-6xl lg:text-7xl font-semibold glow-effect"
            >
              Alaa Abderrahim
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-pink-300 bg-clip-text text-3xl tracking-tight text-transparent mt-8"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/CVfullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="relative bg-rose-200 rounded-xl p-4 text-sm text-stone-800 mt-6 transition-all duration-700 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-500 hover:text-white flex justify-center items-center shadow-lg mx-auto"
            >
              <span className="relative z-10 font-semibold">View Resume</span>
              <span className="absolute inset-0 rounded-xl transition-all duration-700 ease-in-out hover:shadow-[0_0_20px_rgba(255,74,141,0.7),0_0_40px_rgba(255,116,177,0.6),0_0_60px_rgba(255,163,215,0.5)]"></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
