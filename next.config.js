const withPWA = require("next-pwa")({
    dest: "public",
    disable: false,
    register: true,
    scope: "/",
    sw: "service-worker.js",
    skipWaiting: true,
});

module.exports = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["res.cloudinary.com", "cdn.simpleicons.org"],
    },
});
