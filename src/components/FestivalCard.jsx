const FestivalCard = ({ festival }) => {
  return (
    <div className="mt-6 w-full">
      <img
        src={festival.image}
        alt={festival.title}
        className="w-full rounded-xl"
      />
      <div>
        <h2 className="mt-2 text-base font-bold">{festival.title}</h2>
        <p className="mt-2 text-xs">
          {festival.dateStart} - {festival.dateEnd}
        </p>
        <p className="text-xs">{festival.location}</p>
      </div>
    </div>
  );
};

export default FestivalCard;
