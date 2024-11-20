import { motion as m } from "framer-motion";

const Button = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <m.div
      className="flex items-center py-1 px-7 rounded-xl gap-4 button"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <img src={img} alt={title} />
      <aside className="flex flex-col">
        <span className="text-xs">{desc}</span>
        <h1 className="text-2xl">{title}</h1>
      </aside>
    </m.div>
  );
};

export default Button;
