export function convertDateString(dateString: string) {
  const date = new Date(dateString);
  let formattedDate = date.toLocaleDateString('ko-KR'); // "2024. 12. 27."
  return formattedDate.endsWith('.') ? formattedDate.slice(0, -1) : formattedDate;
}