import { useState, useEffect } from "react";
import { fetchFestivals } from "../api/festivalApi";

export const useFetchFestivals = (eventStartDate, areaCode) => {
  const [festivals, setFestivals] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadFestivals = async () => {
      setLoading(true);
      console.log("page", page);
      const newFestivals = await fetchFestivals(
        eventStartDate,
        areaCode,
        10,
        page,
      );
      if (newFestivals.length > 0) {
        setFestivals((prevFestivals) => [...prevFestivals, ...newFestivals]);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    };

    loadFestivals();
  }, [page]);

  return { festivals, loading, hasMore, setPage };
};
