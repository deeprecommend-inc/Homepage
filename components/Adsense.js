import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AdSense from 'react-adsense';

const Adsense = () => {
    const { asPath } = useRouter();

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, [asPath]);

    return (
        <div key={asPath}>
            <ins
                class="adsbygoogle"
                tyle={{ display: 'block', textAlign: 'center' }}
                data-ad-client="ca-pub-2370440619895423"
                data-ad-slot="4751129579"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default Adsense;
