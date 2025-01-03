import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    // console.log(process.env.NEXT_PUBLIC_API_URL);
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
  images: {
    domains: ['wizzap.ktwiz.co.kr', '54.180.228.165'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 모든 도메인 허용
      },
    ],
  },
};

export default nextConfig;
