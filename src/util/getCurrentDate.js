const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}${month}${day}`; // YYYYMMDD 형식으로 리턴
};

export default getCurrentDate;
