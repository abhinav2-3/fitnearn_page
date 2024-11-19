import FeatureCard from "./FeatureCard";
import { FeatureCardData } from "../assets/statics";
import { motion as m } from "framer-motion";

const FeatureSection = () => {
  return (
    <section className="h-1/2 my-8 mb-32 lg:px-24 md:16 px-8" id="feature">
      <m.h1
        className="text-5xl font-bold text-center mb-32"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Key Features
      </m.h1>
      <m.div
        className="flex flex-wrap justify-center gap-11"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {FeatureCardData?.map((data, i) => {
          return (
            <FeatureCard
              key={i}
              imgSrc={data?.imgSrc}
              title={data?.title}
              desc={data?.desc}
            />
          );
        })}
      </m.div>
    </section>
  );
};

export default FeatureSection;
