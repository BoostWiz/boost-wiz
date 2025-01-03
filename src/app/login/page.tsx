import Image from 'next/image';
import LoginButton from './loginbutton';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-[10px] relative">
      <div className="relative self-stretch overflow-hidden w-full h-full bg-[url(/common/loginbg.png)] bg-cover bg-[50%_50%]">
        <div className="w-full h-[calc(100vh-64px)] bg-[#3a3a3a9e]" />{' '}
      </div>
      <div className="flex flex-col w-[23.75rem] items-center justify-center gap-[25px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="self-stretch mt-[-1.00px] text-primary text-center relative text-title">
          로그인 · 회원가입
        </div>
        <p className="self-stretch text-center relative text-xl text-lightGray">
          강력하고 신비한 힘
          <br />
          마법의 야구를 펼치는 곳, kt wiz
        </p>
        <div className="inline-flex flex-col h-[101px] items-center justify-center gap-[12px] relative">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
