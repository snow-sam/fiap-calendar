/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,      // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
}

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});


module.exports = withPWA(nextConfig);
