import { FaTwitter, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from "./Button";
import AppleVector from "../../public/images/Vector.png";
import GooglePlayVector from "../../public/images/Group.png";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="footerBg min-h-[55vh] px-24 py-8">
      <div className="flex w-full">
        <aside className="w-1/3 flex gap-4 flex-col">
          <figure className="flex gap-4 items-center">
            <img src={"/images/FitnEarnLogo.png"} alt="Logo" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#DB2777] to-[#F97316] bg-clip-text text-transparent">
              FitnEarnPal
            </h1>
          </figure>
          <p className="text-secondary_white leading-5">
            FitnEarnPal is your all-in-one place where you <br /> can train
            people as per your schedule. It’s a <br /> place where you can
            upload workout videos, <br /> create live sessions, write blogs and
            much more. <br /> Available on Android and iOS. Join our <br />{" "}
            community of coaches today!
          </p>
          <a
            href="mailto:help-support@fitnearn.com"
            className="text-secondary_white flex gap-2 items-center"
          >
            <IoMdMail /> help-support@fitnearn.com
          </a>
          <div className="flex gap-8">
            <a
              href={"#"}
              className="bg-neutral-800 w-8 grid place-items-center h-8 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href={"#"}
              className="bg-neutral-800 w-8 grid place-items-center h-8 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href={"#"}
              className="bg-neutral-800 w-8 grid place-items-center h-8 rounded-full"
            >
              <FaFacebook />
            </a>
            <a
              href={"#"}
              className="bg-neutral-800 w-8 grid place-items-center h-8 rounded-full"
            >
              <FaGithub />
            </a>
          </div>
        </aside>
        <FooterLinks />
        <aside className="flex-1 p-12">
          <h1 className="font-semibold text-xl">Download Now</h1>
          <div className="flex flex-col gap-8 mt-4 w-[90%]">
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
          </div>
        </aside>
      </div>
      <hr className="mt-7" />
      <div className="flex justify-between pt-8 text-secondary_white text-xs">
        <h4>© Copyright 2024, All Rights Reserved.</h4>
        <h4>Made with ❤️ in India</h4>
        <h4>Reg@2024</h4>
      </div>
    </footer>
  );
};

export default Footer;
