import { useState, useEffect, useRef, useCallback } from "react";
import FestivalCard from "./FestivalCard";
import { fetchFestivals } from "../api/festivalApi";

const FestivalCardList = ({ eventStartDate, areaCode }) => {
  const [festivals, setFestivals] = useState([]); // 축제 데이터 상태
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const [loading, setLoading] = useState(false); // 데이터 로딩 상태
  const [hasMore, setHasMore] = useState(true); // 추가 데이터가 있는지 여부
  const observer = useRef(); // Intersection Observer 참조

  // // API에서 축제 데이터 가져오기
  // const loadFestivals = async (page) => {
  //   setLoading(true);
  //   const newFestivals = await fetchFestivals(
  //     eventStartDate,
  //     areaCode,
  //     10,
  //     page,
  //   );
  //   console.log(newFestivals);
  //   setFestivals((prevFestivals) => [...prevFestivals, ...newFestivals]);
  //   setHasMore(newFestivals.length > 0); // 추가 데이터가 있는지 확인
  //   setLoading(false);
  // };

  // // 컴포넌트가 처음 렌더링될 때, 그리고 페이지가 변경될 때 API 호출
  // useEffect(() => {
  //   loadFestivals(page);
  // }, [page]);

  // // Intersection Observer를 사용해 스크롤이 하단에 도달했는지 감지
  // const lastFestivalElementRef = useCallback(
  //   (node) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPage((prevPage) => prevPage + 1); // 페이지 번호 증가
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore],
  // );

  return (
    <>
      {/* {festivals.map((festival, index) => {
        if (festivals.length === index + 1) {
          // 마지막 축제 요소에 ref 추가
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
      {loading && <p>Loading...</p>} */}
    </>
  );
};

export default FestivalCardList;
