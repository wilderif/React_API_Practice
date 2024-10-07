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
    const apiUrl = baseUrlFestivalApi;

    const response = await axios.get(apiUrl, {
      params: {
        eventStartDate: eventStartDate,
        areaCode: areaCode,
        numOfRows: numOfRows,
        pageNo: pageNo,
      },
    });

    return response.data.response.body.items.item;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    alert("API 요청 중 오류 발생, 잠시 후 다시 시도해주세요.");
  }
};

export const fetchFestivalDetail = async (id) => {
  console.log("fetchFestivalDetail", id);
  try {
    const apiUrl = baseUrlDetailApi;

    console.log("apiUrl", apiUrl);

    const response = await axios.get(apiUrl, {
      params: {
        contentId: id,
        contentTypeId: "15",
        defaultYN: "Y",
        firstImageYN: "Y",
        addrinfoYN: "Y",
        overviewYN: "Y",
        mapinfoYN: "Y",
      },
    });

    console.log("response", response);

    return response.data.response.body.items.item[0];
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    alert("API 요청 중 오류 발생, 잠시 후 다시 시도해주세요.");
  }
};
