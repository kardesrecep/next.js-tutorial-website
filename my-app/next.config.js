/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "images.pexels.com",
            
        ]
    }
}

module.exports = nextConfig


/* 
yeni version
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
}


*/