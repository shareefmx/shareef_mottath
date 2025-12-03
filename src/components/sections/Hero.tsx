import { motion } from "framer-motion";
import { GithubLogo, LinkedinLogo, EnvelopeSimple, InstagramLogo, FacebookLogo, XLogo } from "@phosphor-icons/react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-background">
      {/* Left Section (White) */}
      <div className="w-full lg:w-[55%] bg-white flex flex-col justify-center px-8 lg:px-20 py-20 lg:py-0 relative z-10 lg:clip-path-diagonal shadow-2xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          {/* Logo removed as per user request */}

          <h2 className="text-2xl font-medium text-gray-600 mb-2">Hi, I am</h2>
          <h1 className="text-6xl lg:text-8xl font-bold text-black tracking-tight mb-4 ">
            Shareef M
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-8">
            MERN Stack Developer | AI Automation Developer
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-black">
              <EnvelopeSimple size={24} weight="fill" />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-black">
              <GithubLogo size={24} weight="fill" />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-black">
              <LinkedinLogo size={24} weight="fill" />
            </a>
            {/* Hugging Face */}
            <a href="#" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM9 10C9 10.55 8.55 11 8 11C7.45 11 7 10.55 7 10C7 9.45 7.45 9 8 9C8.55 9 9 9.45 9 10ZM17 10C17 10.55 16.55 11 16 11C15.45 11 15 10.55 15 10C15 9.45 15.45 9 16 9C16.55 9 17 9.45 17 10ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" />
              </svg>
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-black">
              <InstagramLogo size={24} weight="fill" />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-black">
              <FacebookLogo size={24} weight="fill" />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-black">
              <XLogo size={24} weight="fill" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Section (Website Color) */}
      <div className="w-full lg:w-[45%] bg-background flex flex-col relative min-h-[50vh] lg:min-h-screen">
        {/* Navigation for Desktop (Absolute positioned on top right) */}
        {/* Navigation removed as per user request */}

        {/* Image Container */}
        <div className="flex-grow flex items-end justify-center relative overflow-hidden">
          {/* Image removed as per user request */}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg\\:clip-path-diagonal {
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
          }
        }
      `}</style>
    </section >
  );
};
