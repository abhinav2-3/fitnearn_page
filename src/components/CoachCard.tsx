const CoachCard = ({
  className,
  imgSrc,
  title,
}: {
  className: string;
  imgSrc: string;
  title: string;
}) => {
  return (
    <div className={`flex justify-items-end absolute ${className}`}>
      <div className="flex flex-col items-end gap-2">
        <img src={imgSrc} alt="Logo" />
        <h1 className="text-primary_white font-semibold text-xl">{title}</h1>
        <h3 className="text-secondary_white">Helps you gain global audiance</h3>
      </div>
    </div>
  );
};

export default CoachCard;
