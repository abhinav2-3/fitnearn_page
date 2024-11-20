import { motion as m } from "framer-motion";

const StepsCard = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <div className="flex flex-col  text-center justify-center items-center gap-4 w-[20%] relative top-12 left-0">
      <m.img
        src={imgSrc}
        alt={title}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      />
      <m.h1
        className="md:text-3xl text-xl font-semibold text-primary_white"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {title}
      </m.h1>
      <m.h4
        className="text-secondary_white hidden md:hidden px-1 mt-3 text-xl leading-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        Support for multiple languages, making health monitoring accessible and
        easy for users around the globe.
      </m.h4>
    </div>
  );
};

export default StepsCard;
