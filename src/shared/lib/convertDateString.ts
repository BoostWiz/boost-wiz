export function convertDateString(dateNum: number) {
  const date = new Date(dateNum);
  let formattedDate = date.toLocaleDateString('ko-KR'); // "2024. 12. 27."
  return formattedDate.endsWith('.') ? formattedDate.slice(0, -1) : formattedDate;
}