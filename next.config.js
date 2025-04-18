/** @type {import('next').NextConfig} */


module.exports = {
    images: {
        remotePatterns: [
            {
                hostname: '*'
            },
            {
                hostname: '**'
            },
            {
                hostname: '.jpg'
            },
            // {
            //     hostname: 'i.postimg.cc'
            // },
            // {
            //     hostname: 'www.splashlearn.com'
            // },
            // {
            //     hostname: 'community.atlassian.com'
            // },
            // {
            //     hostname: 'static.demilked.com'
            // },
            // {
            //     hostname: 'thunderdungeon.com'
            // },
            // {
            //     hostname: 'englishonline.britishcouncil.org'
            // },
            // {
            //     hostname: 'digitalsynopsis.com'
            // }
        ]
    }
};
