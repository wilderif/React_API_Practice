import { tourApiKey } from "./ApiKey";

export const baseUrlFestivalApi =
  "https://apis.data.go.kr/B551011/KorService1/searchFestival1?MobileOS=AND&MobileApp=MyFestivalApp&_type=json&arrange=D" +
  "&serviceKey=" +
  tourApiKey;

export const baseUrlDetailApi =
  "https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=AND&MobileApp=MyFestivalApp&_type=json" +
  "&serviceKey=" +
  tourApiKey;
