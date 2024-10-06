import axios from "axios";
import { baseUrlFestivalApi, baseUrlDetailApi } from "../constans/apiBaseUrl";

import formatDate from "../util/formatDate";

export const fetchFestivals = async (
  eventStartDate,
  areaCode,
  numOfRows,
  pageNo,
) => {
  if (areaCode === "0") {
    areaCode = "";
  }
  if (eventStartDate) {
    eventStartDate = formatDate(new Date(eventStartDate));
  }
  console.log("fetchFestivals", eventStartDate, areaCode);

  try {
    // API URL 설정
    const apiUrl = baseUrlFestivalApi;

    // axios를 사용하여 API 호출
    const response = await axios.get(apiUrl, {
      params: {
        eventStartDate: eventStartDate, // 이벤트 시작일
        areaCode: areaCode, // 지역 코드
        numOfRows: numOfRows, // 한 번에 가져올 항목 수
        pageNo: pageNo, // 페이지 번호
      },
    });

    return response.data.response.body.items.item;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    alert("API 요청 중 오류 발생, 잠시 후 다시 시도해주세요.");
  }
};

export const fetchFestivalDetail = async (id) => {
  try {
    const apiUrl = baseUrlDetailApi;

    const response = await axios.get(apiUrl, {
      params: {
        contentId: id,
      },
    });

    return response.data.response.body.items.item; // 상세 정보
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    alert("API 요청 중 오류 발생, 잠시 후 다시 시도해주세요.");
  }
};
