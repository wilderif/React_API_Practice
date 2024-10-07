import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import FestivalCard from "./FestivalCard";

import useSearchStore from "../stores/searchStore";
import { fetchFestivals } from "../api/festivalApi";

const FestivalCardList = () => {
  const [festivals, setFestivals] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  // const [initialFetch, setInitialFetch] = useState(false); // 최초 페칭 여부 관리

  const eventStartDate = useSearchStore((state) => state.date);
  const areaCode = useSearchStore((state) => state.region);

  // areaCode가 변경될 때 데이터를 초기화하고 다시 페칭
  useEffect(() => {
    setPage(1);
    setFestivals([]);
    loadFestivals(1);
  }, [eventStartDate, areaCode]);

  useEffect(() => {
    console.log(festivals);
  }, [festivals]);

  const loadFestivals = async (pageToLoad = page) => {
    const newFestivals = await fetchFestivals(
      eventStartDate,
      areaCode,
      10,
      pageToLoad,
    );

    setFestivals((prevFestivals) => [...prevFestivals, ...newFestivals]);
    newFestivals.length === 10 ? setHasMore(true) : setHasMore(false);
    setPage(pageToLoad + 1);
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
