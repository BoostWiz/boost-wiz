export function replacePathToImgSrc(htmlString: any, baseUrl: any) {
  // DOMParser를 사용하여 HTML 문자열을 파싱
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // 모든 img 태그를 선택
  const imgTags = doc.querySelectorAll("img");

  imgTags.forEach((img) => {
    const src = img.getAttribute("src");
    // src가 상대 경로일 경우에만 처리
    if (src && !src.startsWith("http://") && !src.startsWith("https://")) {
      // baseUrl과 결합하여 절대 경로 생성
      const absolutePath = new URL(src, baseUrl).href;
      img.setAttribute("src", absolutePath);
    }
  });

  // 수정된 HTML 문자열 반환
  return doc.body.innerHTML;
}