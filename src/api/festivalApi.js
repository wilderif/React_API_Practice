import axios from "axios";
import { baseUrlFestivalApi } from "../constans/apiBaseUrl";

export const fetchFestivals = async (
  eventStartDate,
  areaCode,
  numOfRows,
  pageNo,
) => {
  if (areaCode === "0") {
    areaCode = "";
  }
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
        _type: "json", // 응답 형식 (json)
      },
    });

    // 성공적으로 데이터를 가져왔을 경우, 해당 데이터를 반환
    return response.data.response.body.items.item;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    alert("API 요청 중 오류 발생, 잠시 후 다시 시도해주세요.");
  }
};
