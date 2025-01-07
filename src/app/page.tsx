export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      {/* 첫 번째 컨텐츠 */}
      <div
        className="w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/home-poster.webp')", // 배경 이미지 경로
        }}
      >
        <div className="flex items-center justify-center h-full text-crimsonRed text-4xl font-bold">
          Welcome to Our Team
        </div>
      </div>

      {/* 두 번째 컨텐츠 */}
      <div className="w-full h-[100vh] bg-red-500 flex items-center justify-center text-white text-2xl font-bold">
        Content 2
      </div>

      {/* 세 번째 컨텐츠 */}
      <div className="w-full h-[100vh] bg-yellow-500 flex items-center justify-center text-black text-2xl font-bold">
        Content 3
      </div>

      {/* 네 번째 컨텐츠 */}
      <div className="w-full h-[100vh] bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
        Content 4
      </div>
    </div>
  );
}
