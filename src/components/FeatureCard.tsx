import { motion as m } from "framer-motion";

interface PropsType {
  imgSrc: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ imgSrc, title, desc }: PropsType) => {
  return (
    <m.div
      className="bg-[#262626] w-[35vw] lg:w-[16vw] md:w-[20vw] h-56 rounded-2xl flex flex-col gap-3 justify-center items-center relative"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delayChildren: 0.3 }}
    >
      <img
        src={imgSrc}
        alt={title}
        width={100}
        height={100}
        className="absolute -top-11"
      />
      <h1 className="md:text-2xl text-primary_white font-semibold mt-2 text-xl">
        {title}
      </h1>
      <p className="text-secondary_white px-8 text-center">{desc}</p>
    </m.div>
  );
};

export default FeatureCard;
