'use client';

import Image from 'next/image';

export default function LoginButton() {
  const URL = `?`;

  const kakaoLogin = function () {
    // window.location.href = `${URL}/kakao`;
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code';
  };
  const googleLogin = function () {
    // window.location.href = `${URL}/google`;
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
client_id=${process.env.GOOGLE_AUTH_CLIENT_ID}
&redirect_uri=https://boost-wiz.vercel.app/loading
&response_type=code
&scope=email+profile`;
  };

  return (
    <div className="inline-flex flex-col h-[101px] items-center justify-center gap-[12px] relative">
      <Image
        src="/common/KAKAO_LOGIN.png"
        alt="kakao Logo"
        className="cursor-pointer"
        onClick={kakaoLogin}
        width={302}
        height={45}
      />{' '}
      <Image
        src="/common/GOOGLE_LOGIN.png"
        alt="Google Logo"
        className="cursor-pointer"
        onClick={googleLogin}
        width={302}
        height={45}
        priority
      />
    </div>
  );
}
