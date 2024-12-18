import hero from "../assets/hero.png";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className=" relative flex h-screen items-center justify-center">
      {/* video of hero section */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <img className="h-full w-full object-cover" src={hero} alt="" />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-70% to-black"></div>

      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="restaura"
          className=" w-full p-4"
        />
        <p className=" p-4 text-lg tracking-tighter text-white"></p>
      </div>
    </section>
  );
};

export default Hero;
