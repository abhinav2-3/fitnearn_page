const FooterLinks = () => {
  return (
    <div className="flex flex-wrap w-full md:w-2/5">
      <aside className="w-1/2 flex flex-col p-10 gap-3">
        <h1 className="font-bold">Useful Links</h1>
        <a href={"#"} className="text-secondary_white">
          Home
        </a>
        <a href={"#feature"} className="text-secondary_white">
          Features
        </a>
        <a href={"#howitworks"} className="text-secondary_white">
          How It Works
        </a>
        <a href={"#"} className="text-secondary_white">
          Sign Up Form
        </a>
      </aside>
      <aside className="w-1/2 flex flex-col p-10 gap-3">
        <h1 className="font-bold">Policies</h1>
        <a href={"#"} className="text-secondary_white">
          About Us
        </a>
        <a href={"#feature"} className="text-secondary_white">
          Privacy Policy
        </a>
        <a href={"#howitworks"} className="text-secondary_white">
          Term & Conditions
        </a>
        <a href={"#"} className="text-secondary_white">
          Data Deletion
        </a>
      </aside>
    </div>
  );
};

export default FooterLinks;
