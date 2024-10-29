/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseURL: "http://localhost:3000", // This represents the base URL for running our frontend project.
    URL: "https://api.theheavenlygifts.com/api", // Change only the domain part, keeping "/api" intact
    storageURL: "https://api.theheavenlygifts.com", // Change only the laravel primary domain
    API_PROD_URL: "https://api.theheavenlygifts.com/api",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.theheavenlygifts.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
