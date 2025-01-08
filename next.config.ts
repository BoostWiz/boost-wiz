import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites() {
    return [
      {
        source: '/api/:path*', // 클라이언트가 호출할 경로
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
  images: {
    domains: [
      'wizzap.ktwiz.co.kr',
      '54.180.228.165',
      'phinf.pstatic.net',
      'i.ytimg.com',
    ],
  },
};

export default nextConfig;
