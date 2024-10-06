import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import FestivalCard from "./FestivalCard";
import { fetchFestivals } from "../api/festivalApi";

const FestivalCardList = ({ eventStartDate, areaCode }) => {
  const [festivals, setFestivals] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [initialFetch, setInitialFetch] = useState(false); // 최초 페칭 여부 관리

  useEffect(() => {
    console.log(eventStartDate, areaCode);

    loadFestivals();
  }, []);

  useEffect(() => {
    console.log(festivals);
  }, [festivals]);

  const loadFestivals = async () => {
    if (initialFetch) {
      return;
    }
    setInitialFetch(true);
    const newFestivals = await fetchFestivals(
      eventStartDate,
      areaCode,
      10,
      page,
    );

    setFestivals((prevFestivals) => [...prevFestivals, ...newFestivals]);
    newFestivals.length > 0 ? setHasMore(true) : setHasMore(false);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={festivals.length}
      next={loadFestivals}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
    >
      <div>
        {festivals &&
          festivals.map((festival) => {
            return (
              <FestivalCard key={festival.contentid} festival={festival} />
            );
          })}
      </div>
    </InfiniteScroll>
  );
};

export default FestivalCardList;
