import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const Expertise = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="expertise">
      {/* secion title */}
      <h2 className=" my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Expertise
      </h2>
      {/* /secion title */}

      {/* expertise cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className=" container mx-auto px-4"
      >
        {/* mapping cusines cards */}
        {CUSINES.map((cusine, index) => (
          <motion.div
            variants={itemVariants}
            className="flex items-center border-b-4 border-dotted-400 border-neutral-700/40 py-2"
            key={index}
          >
            {/*  number */}
            <div className=" flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
            {/* / number */}

            {/*  image */}
            <div className=" w-1/3 flex-shrink-0 ">
              <img
                src={cusine.image}
                alt={cusine.title}
                className=" h-auto rounded-3xl"
              />
            </div>
            {/* / image */}

            <div className="pl-8">
              {/*  title */}
              <h3 className=" text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              {/* / title */}

              {/*  description */}
              <p className=" mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
              {/* /cusine description */}
            </div>
          </motion.div>
        ))}
        {/* /mapping cusines cards */}
      </motion.div>

      {/* ظexpertise cards */}
    </section>
  );
};

export default Expertise;
