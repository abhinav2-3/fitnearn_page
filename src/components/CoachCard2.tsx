const CoachCard2 = ({
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
      <div className="flex flex-col items-start gap-2">
        <img src={imgSrc} alt="Logo" />
        <h1 className="text-primary_white font-semibold lg:text-xl text-base pl-2">
          {title}
        </h1>
        <h3 className="text-secondary_white pl-2">
          Helps you gain global audience
        </h3>
      </div>
    </div>
  );
};

export default CoachCard2;
