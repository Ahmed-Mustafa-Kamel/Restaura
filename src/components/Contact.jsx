import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className=" container mx-auto py-16">
      {/* title */}
      <h2 className=" mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      {/* /title */}

      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="py-20 border-b-2 border-dotted border-neutral-700 text-center text-2xl tracking-tighter lg:text-3xl"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Contact;
