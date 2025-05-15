import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Royal-Beach-Treasures-Website';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true 
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
