/** @type {import('next').NextConfig} */
const nextConfig = {
  //   Para evitar errores de imagenes de cierta pagina
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
