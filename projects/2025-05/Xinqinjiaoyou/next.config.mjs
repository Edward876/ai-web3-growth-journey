import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  distDir: '.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    config.externals = [...(config.externals || []), './projects/**'];
    
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules/**', '**/projects/**'],
    };

    return config;
  },
};

export default withMDX(config);
