// import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.png";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className=" container mx-auto text-center">
        <h2 className=" mb-8 text-3xl lg:text-4xl">Our Mission</h2>
        {/* mission video */}
        <div className="relative flex items-center justify-center">
          <img className="rounded-3xl" src={mission} alt="missionImage" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute h-full w-full rounded-3xl bg-black/40"
          />
          {/*  */}
          <p className="absolute max-w-lg tracking-tighter lg:text-3xl">
            {MISSION}
          </p>
        </div>
        {/* /mission video */}
      </div>
    </section>
  );
};

export default Mission;
