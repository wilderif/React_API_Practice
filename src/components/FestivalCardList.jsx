import { useRef, useCallback } from "react";
import { useFetchFestivals } from "../hooks/useFetchFestivals";
import FestivalCard from "./FestivalCard";

const FestivalCardList = ({ eventStartDate, areaCode }) => {
  const { festivals, loading, hasMore, setPage } = useFetchFestivals(
    eventStartDate,
    areaCode,
  );

  const observer = useRef();
  const lastFestivalElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <>
      {festivals.map((festival, index) => {
        if (festivals.length === index + 1) {
          return (
            <FestivalCard
              ref={lastFestivalElementRef}
              key={festival.contentid}
              festival={festival}
            />
          );
        } else {
          return <FestivalCard key={festival.contentid} festival={festival} />;
        }
      })}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default FestivalCardList;
