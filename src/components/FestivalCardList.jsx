import festivalImage from "../assets/tmp_festival_image.png";

import FestivalCard from "./FestivalCard";

const TEMP_FESTIVALS = [
  {
    id: 1,
    title: "Festival 1",
    image: festivalImage,
    dateStart: "2021-01-01",
    dateEnd: "2021-01-03",
    location: "Location 1",
  },
  {
    id: 2,
    title: "Festival 2",
    image: festivalImage,
    dateStart: "2021-02-01",
    dateEnd: "2021-02-03",
    location: "Location 2",
  },
  {
    id: 3,
    title: "Festival 3",
    image: festivalImage,
    dateStart: "2021-03-01",
    dateEnd: "2021-03-03",
    location: "Location 3",
  },
];

const FestivalCardList = () => {
  return (
    <>
      {TEMP_FESTIVALS.map((data) => {
        return <FestivalCard key={data.id} festival={data} />;
      })}
    </>
  );
};

export default FestivalCardList;
