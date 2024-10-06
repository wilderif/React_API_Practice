import { tourApiKey } from "./ApiKey";

export const baseUrlFestivalApi =
  "https://apis.data.go.kr/B551011/KorService1/searchFestival1?MobileOS=AND&MobileApp=MyFestivalApp&_type=json&arrange=D" +
  "&serviceKey=" +
  tourApiKey;

export const baseUrlDetailApi =
  "https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=AND&MobileApp=MyFestivalApp&_type=json" +
  "&serviceKey=" +
  tourApiKey;

// 지역 코드 조회
// https://apis.data.go.kr/B551011/KorService1/areaCode1?&MobileOS=AND&MobileApp=MyFestivalApp&_type=json&serviceKey=w46AZlVErDcysi%2FDs9cpC05M%2F96viVtoZdVutHKKJiK%2BfU9pYBQ%2BdgHFAuQXx2lgQ%2B6au3AVDdUJZJdpyR1v9w%3D%3D

// 축제 조회
// https://apis.data.go.kr/B551011/KorService1/searchFestival1?MobileOS=AND&MobileApp=MyFestivalApp&_type=json&serviceKey=w46AZlVErDcysi%2FDs9cpC05M%2F96viVtoZdVutHKKJiK%2BfU9pYBQ%2BdgHFAuQXx2lgQ%2B6au3AVDdUJZJdpyR1v9w%3D%3D&eventStartDate=20241004
