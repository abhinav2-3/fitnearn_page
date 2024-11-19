import { StepsData } from "../assets/statics";
import StepsCard from "./StepsCard";
import { motion as m } from "framer-motion";

const StepSection = () => {
  return (
    <section className="stepBg h-[65vh] p-10 " id="howitworks">
      <m.h1
        className="lg:text-5xl text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        How It Works ?
      </m.h1>
      <div className="relative flex md:flex-row flex-col justify-center">
        <hr className="w-[80%] absolute top-24 bg-red-600" />
        <div className="w-full flex justify-between">
          {StepsData?.map((data, i) => {
            return (
              <StepsCard key={i} imgSrc={data?.imgSrc} title={data?.title} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepSection;
