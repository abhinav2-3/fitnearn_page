import { TrainerCards } from "../assets/statics";
import TrainerCard from "./TrainerCard";
import { motion as m } from "framer-motion";

const Community = () => {
  return (
    <section className="min-h-screen my-16">
      <div className="flex flex-col gap-6 items-center lg:px-36 md:px-24 px-8 my-8">
        <m.h1
          className="lg:text-5xl md:text-4xl text-3xl text-center font-bold"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Join growing community of Coaches
        </m.h1>
        <m.span
          className="text-center lg:text-2xl text-base"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          FitnEarnPal is your getaway to connect with a global community of
          health and fitness enthusiastic, share experience and valuable
          knowledge, and grow their audience. As a coach you have the power to
          inspire, educate and motivate users worldwide by creating and sharing
          impactful content, workout videos, conducting live sessions and much
          more.
        </m.span>
        <m.button
          className="button px-12 py-3 rounded-lg text-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Join Now
        </m.button>
      </div>
      <m.div className="flex flex-wrap lg:px-28 md:px-20 px-14 gap-8 justify-between">
        {TrainerCards?.map((card, i) => {
          return <TrainerCard key={i} imgSrc={card.imgSrc} />;
        })}
      </m.div>
    </section>
  );
};

export default Community;
