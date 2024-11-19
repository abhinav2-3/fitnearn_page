import CoachCard from "./CoachCard";
import CoachCard2 from "./CoachCard2";
import icon1 from "../../public/images/Circle3.png";
import icon2 from "../../public/images/Circle5.png";
import icon3 from "../../public/images/Circle4.png";
import icon4 from "../../public/images/Circle6.png";
import { motion as m } from "framer-motion";

const CoachSection = () => {
  return (
    <section className="my-16 lg:px-24 md:16">
      <div className="px-8 md:px-0 w-full flex text-center flex-col gap-7 lg:px-32">
        <m.h1
          className="text-primary_white lg:text-5xl text-4xl  font-bold"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          What&apos;s in it for{" "}
          <span className="bg-gradient-to-r from-[#DB2777] to-[#F97316] bg-clip-text text-transparent">
            Coach
          </span>
        </m.h1>
        <m.p
          className="text-secondary_white font-medium md:text-2xl text-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          FitnEarnPal empowers coaches to grow and reach a global{" "}
          <br className="hidden md:block" />
          audience while valuable health and fitness insights to users.
        </m.p>
      </div>
      <m.div
        className="w-full relative h-screen bg-hero-pattern bg-center bg-no-repeat"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-[27rem] lg:w-[30rem] absolute lg:top-12 md:left-72 top-20 lg:left-[26.5rem] left-20">
          <m.img
            src={"/images/iPhone13ProMax2.png"}
            alt="iPhone 13"
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <CoachCard
          className={
            "lg:top-36 md:top-40 lg:left-32 md:left-14 hidden md:block"
          }
          imgSrc={icon1}
          title="Global Audiance Access"
        />
        <CoachCard
          className={
            "lg:bottom-32 lg:left-32 md:bottom-36 md:left-14 hidden md:block"
          }
          imgSrc={icon2}
          title="Revenue Opportunities"
        />
        <CoachCard2
          className={
            "lg:top-20 lg:right-28 md:right-4 md:top-28 hidden md:block"
          }
          imgSrc={icon4}
          title="Work On Your Own Schedule"
        />
        <CoachCard2
          className={
            "lg:bottom-44 lg:right-40 md:right-8 md:bottom-44 hidden md:block"
          }
          imgSrc={icon3}
          title="Personal Brand"
        />
      </m.div>
    </section>
  );
};

export default CoachSection;
