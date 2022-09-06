module.exports = {
    i18n: {
        locales: ['en', 'ja'],
        defaultLocale: 'en',
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        return config;
    },
};
