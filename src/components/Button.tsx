const Button = ({
  img,
  title,
  desc,
}: {
  img: any;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-center py-1 px-7 rounded-xl gap-4 button">
      <img src={img} alt={title} />
      <aside className="flex flex-col">
        <span className="text-xs">{desc}</span>
        <h1 className="text-2xl">{title}</h1>
      </aside>
    </div>
  );
};

export default Button;
