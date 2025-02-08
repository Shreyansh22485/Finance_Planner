/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
        ],
    },

    experimental: {
        serverActions: {
            bodySizeLimit: "5mb",
        }
    },

    async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'Cache-Control',
                value: 'no-store',
              },
            ],
          },
        ];
      },
};

export default nextConfig;
