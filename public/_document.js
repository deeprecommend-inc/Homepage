import Head from 'next/head';

const Page = props => (
    <div>
        <Head>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2370440619895423"
                crossOrigin="anonymous"
            ></script>
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.css"
                integrity="sha384-knaESGLxlQRSHWSJ+ZbTX6/L1bJZWBsBYGb2O+g64XHFuO7CbIj9Pkf1aaVXzIZJ"
                crossOrigin="anonymous"
            />
        </Head>
    </div>
);

export default Page;
