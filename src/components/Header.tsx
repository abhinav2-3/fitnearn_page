import { motion as m } from "framer-motion";

const Header = () => {
  return (
    <header className="flex justify-between headerBg items-center lg:px-24 md:16 px-8 py-4">
      <m.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <figure className="flex gap-4 items-center">
          <img
            src={"/images/FitnEarnLogo.png"}
            alt="Logo"
            className="w-11 h-11 md:w-14 md:h-14"
          />
          <h1 className="text-4xl hidden md:block font-bold bg-gradient-to-r from-[#DB2777] to-[#F97316] bg-clip-text text-transparent">
            FitnEarnPal
          </h1>
        </figure>
      </m.div>
      <m.nav
        className="flex gap-5 text-xl text-primary_white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <a href={"#"}>Home</a>
        <a href={"#feature"}>Features</a>
        <a href={"#howitworks"}>How It Works</a>
        <button className="hidden py-3 px-10 w-full h-full headerBg border border-[#DB2777] rounded-3xl text-primary_white font-semibold">
          Sign Up Form
        </button>
      </m.nav>
      <aside>
        <m.button
          className="py-3 hidden md:block px-10 w-full h-full headerBg border border-[#DB2777] rounded-3xl text-primary_white font-semibold"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Sign Up Form
        </m.button>
      </aside>
    </header>
  );
};

export default Header;
