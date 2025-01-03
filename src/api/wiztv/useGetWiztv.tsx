interface ApiResponse {
  data: {
    list: HighlightItem[];
  };
}

export async function fetchHLVideo(
  searchWord: string,
  itemCount: number,
  pageNum: number,
): Promise<HighlightItem[]> {
  const queryParams = new URLSearchParams({
    searchWord: searchWord,
    itemCount: itemCount.toString(),
    pageNum: pageNum.toString(),
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/article/wizhighlightlistpage?${queryParams}`,
    {
      method: 'GET',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();
  return data.list;
}

async function fetchStoryVideo(
  searchWord: string,
  itemCount: number,
  pageNum: number,
): Promise<any> {
  const queryParams = new URLSearchParams({
    searchWord: searchWord,
    itemCount: itemCount.toString(), // number를 string으로 변환
    pageNum: pageNum.toString(),
  });

  const response = await fetch(`/api/article/wizstorylistpage?${queryParams}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();
  return data;
}

// export function useGetWiztv() {
//   const handleSubmit = async <T,>(e: any) => {
//     e.preventDefault();
//     try {
//       // 검색키워드 조회
//       if (id) {
//         if (block.url && !validateURL(block?.url)) {
//           return alert('올바른 URL을 입력해주세요');
//         } else {
//           const blockData = { ...block };
//           if (imgUrl) {
//             blockData['imgUrl'] = imgUrl;
//           }
//           await updateBlock({
//             accessToken: token,
//             blockData,
//           });
//         }
//       } else {
//         // 일반 조회
//         // 만약 하이라이트, 선수조회 탭이라면 HL 페치 사용

//         // 만약 일상, 위즈 예능 탭이라면 Story 페치 사용
//         if

//         await addBlock({
//           accessToken: token,
//           blockData: newBlock,
//         });
//       }
//       router.push('/admin');
//       resetBlock();
//     } catch (error) {
//       console.log(error);
//       alert('오류가 발생했습니다. 다시 시도해주세요.');
//       if (imgUrl) {
//         await deleteImage(imgUrl);
//       }
//     }
//   };

//   return { handleSubmit, };
// }
