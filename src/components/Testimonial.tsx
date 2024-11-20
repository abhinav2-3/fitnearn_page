import { motion as m } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="w-full min-h-screen text-center pt-16 px-20">
      <m.h1
        className="md:text-5xl text-3xl font-bold text-primary_white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        What our{" "}
        <span className="bg-gradient-to-r from-[#DB2777] to-[#F97316] bg-clip-text text-transparent">
          Coach Say
        </span>
      </m.h1>
      <m.h4
        className="md:text-3xl text-lg mt-4 text-secondary_white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        FitnEarnPal empowers coaches to grow and reach a global <br /> audience
        while valuable health and fitness insights to users.
      </m.h4>
      <div className=" flex justify-center md:justify-between h-[90vh]">
        <aside className="w-80 hidden md:flex flex-col items-end gap-28 justify-center">
          <m.img
            src={"/images/Ellipse2.png"}
            alt="User"
            className="w-16 md:w-20 h-16 md:h-20 "
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <m.img
            src={"/images/Ellipse2.png"}
            alt="User"
            className="mr-20 w-20 md:w-28 h-20 md:h-28"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          <m.img
            src={"/images/Ellipse2.png"}
            alt="User"
            className="w-16 md:w-20 h-16 md:h-20"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
        </aside>
        <aside className="flex flex-col gap-5 py-4 items-center justify-center text-center">
          <m.div
            className="flex gap-1"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={"/images/Star.png"}
              alt="Star"
              width={50}
              height={50}
              className="w-8 h-8"
            ></img>
            <img
              src={"/images/Star.png"}
              alt="Star"
              width={50}
              height={50}
              className="w-8 h-8"
            ></img>
            <img
              src={"/images/Star.png"}
              alt="Star"
              width={50}
              height={50}
              className="w-8 h-8"
            ></img>
            <img
              src={"/images/Star.png"}
              alt="Star"
              width={50}
              height={50}
              className="w-8 h-8"
            ></img>
            <img
              src={"/images/Star.png"}
              alt="Star"
              width={50}
              height={50}
              className="w-8 h-8"
            ></img>
          </m.div>
          <p className="text-secondary_white hidden md:block tracking-tight leading-5">
            After Joining FitnEarnPal my <br /> audience reach has increased and
            i <br /> can work according to my time <br /> which i liked the
            most.
          </p>
          <figure className="grid place-items-center mb-16">
            <m.img
              src={"/images/Avatar.png"}
              alt="Avatar"
              className="my-8 w-40 h-40"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            ></m.img>
            <figcaption className="text-primary_white text-3xl">
              Coach Name
            </figcaption>
            <h3 className="text-secondary_white">Yoga Trainer</h3>
          </figure>
          <img src={"/images/Component.png"} alt="Dots" className="w-30"></img>
        </aside>
        <aside className="w-80 hidden md:flex flex-col items-start gap-28 justify-center">
          <m.img
            src={"/images/Ellipse2.png"}
            alt="User"
            className="w-16 md:w-20 h-16 md:h-20 "
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <m.img
            src={"/images/Ellipse2.png"}
            alt="User"
            className="ml-20 w-20 md:w-28 h-20 md:h-28"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          <m.img
            src={"/images/Ellipse2.png"}
            alt="User"
            className="w-16 md:w-20 h-16 md:h-20 "
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          />
        </aside>
      </div>
    </section>
  );
};

export default Testimonial;
