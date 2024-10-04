import { baseUrlFestivalApi } from "../constans/ApiBaseUrl";

export const fetchFestivals = async (
  eventStartDate,
  areaCode,
  numOfRows,
  pageNo,
) => {
  try {
    const url = new URL(baseUrlFestivalApi);
    url.searchParams.append("eventStartDate", eventStartDate);
    url.searchParams.append("areaCode", areaCode);
    url.searchParams.append("numOfRows", numOfRows);
    url.searchParams.append("pageNo", pageNo);

    const response = await fetch(url.href);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.body.items.item;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    alert("API 요청 중 오류 발생, 잠시 후 다시 시도해주세요.");
  }
};
