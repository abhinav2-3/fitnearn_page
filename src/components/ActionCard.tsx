import Button from "./Button";
import AppleVector from "../../public/images/Vector.png";
import GooglePlayVector from "../../public/images/Group.png";
import { motion as m } from "framer-motion";

const ActionCard = () => {
  return (
    <div className="grid place-items-center py-12">
      <m.h1
        className="text-5xl text-center font-bold mb-7"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Become{" "}
        <span className="bg-gradient-to-r from-[#DB2777] to-[#F97316] bg-clip-text text-transparent">
          Coach
        </span>{" "}
        Today
      </m.h1>
      <div className="w-full min-h-screen relative grid place-items-center">
        <m.img
          src={"/images/iPhone13ProMax3.png"}
          alt="Phone Image"
          className="z-10 absolute lg:w-[45%] lg:left-96 w-[80%] left-0 top-12"
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
        <m.img
          src={"/images/iPhone13ProMax4.png"}
          alt="Phone Image"
          className="z-20 absolute lg:w-[53%] lg:left-96 lg:top-0 lg:right-16 w-full top-16 left-8"
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
      </div>
      <m.div
        className="flex gap-8 lg:mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Button img={AppleVector} title={"App Store"} desc="Download on the" />
        <Button
          img={GooglePlayVector}
          title={"App Store"}
          desc="Download on the"
        />
      </m.div>
    </div>
  );
};

export default ActionCard;
