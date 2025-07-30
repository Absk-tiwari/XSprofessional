const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    // async rewrites() {
    //     return [
    //         {
    //             source: "/api/:path*",
    //             destination: "http://127.0.0.1:8000/api/:path*",
    //         },
    //     ];
    // },
    basePath:'/store',
    assetPrefix: '/store',
    images: {
        loader: 'default',
        path: '/store/assets/img', // Ensures next/image works
        domains: isDev ? ['localhost']: ['xs.dftech.in'],
    },
};
