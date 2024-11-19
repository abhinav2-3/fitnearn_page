const TrainerCard = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="lg:w-[30%] md:w-1/2 w-full h-[55vh] hover:-translate-y-4 duration-200 ">
      <img
        src={imgSrc}
        alt={"title"}
        width={200}
        height={400}
        className="w-full h-full backdrop-grayscale grayscale transition-all duration-300 hover:grayscale-0 hover:cursor-pointer"
      />
    </div>
  );
};

export default TrainerCard;
