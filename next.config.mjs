/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '**',//all path name i will recive picture
          },
        ],
      },

};

export default nextConfig;
