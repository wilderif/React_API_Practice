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
      const newFestivals = await fetchFestivals(
        eventStartDate,
        areaCode,
        10,
        page,
      );
      setFestivals((prevFestivals) => [...prevFestivals, ...newFestivals]);
      setHasMore(newFestivals.length > 0);
      setLoading(false);
    };

    loadFestivals();
  }, [eventStartDate, areaCode, page]);

  return { festivals, loading, hasMore, setPage };
};
