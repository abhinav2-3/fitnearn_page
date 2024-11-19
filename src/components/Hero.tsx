import Button from "./Button";
import AppleVector from "../../public/images/Vector.png";
import GooglePlayVector from "../../public/images/Group.png";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col-reverse md:flex-row">
      <aside className="md:w-1/2 w-full lg:px-24 md:16 px-8 flex justify-center items-start flex-col gap-8">
        <div className="flex items-center gap-3">
          <m.img
            src={"/images/smile2.png"}
            alt="Hey"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
          />
          <m.h1
            className="md:text-5xl text-4xl font-bold italic"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hey, Awesome Coach
          </m.h1>
        </div>
        <m.h3
          className="md:text-3xl text-2xl"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Expand Your Reach, Inspire More <br /> Lives{" "}
          <span className="bg-gradient-to-r from-[#DB2777] to-[#F97316] bg-clip-text text-transparent">
            Join FitnEarnPal Today !
          </span>
        </m.h3>
        <m.p
          className="text-secondary_white md:text-xl text-base"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          A global platform for coaches to connect, Inspire and <br /> change
          Lives
        </m.p>
        <m.div
          className="flex md:gap-8 gap-2"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            img={AppleVector}
            title={"App Store"}
            desc="Download on the"
          />
          <Button
            img={GooglePlayVector}
            title={"App Store"}
            desc="Download on the"
          />
        </m.div>
      </aside>
      <aside className="md:w-1/2 w-full grid place-items-center">
        <m.div
          className="bg-hero-pattern w-full h-full bg-center bg-no-repeat grid place-items-center relative"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <m.img
            src={"/images/iPhone13ProMax.png"}
            alt="iPhone 13 Pro Max"
            className="relative left-[3.5rem] top-8 w-5/6 md:w-[70%]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
          <m.img
            src={"/images/Circle2.png"}
            alt="Heart"
            className="absolute md:left-40 md:bottom-72 bottom-56 left-24"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
          <m.img
            src={"/images/Circle15.png"}
            alt="Heart"
            className="absolute md:left-40 md:top-32 top-32 left-24"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
          <m.img
            src={"/images/Circle.png"}
            alt="Heart"
            className="absolute md:right-36 md:top-52 right-16 top-40"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
          <m.img
            src={"/images/Circle1.png"}
            alt="Heart"
            className="absolute md:right-36 md:bottom-40 right-16 bottom-40"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          />
        </m.div>
      </aside>
    </section>
  );
};

export default Hero;
