/** @type {import('next').NextConfig} */

const nextConfig = {
    //below line is commented to check the vercel build is working or not
    // experimental:{
    //     ppr:'incremental',
    // },
    images: {
        domains: ['media.licdn.com'],
    },
};

export default nextConfig;
