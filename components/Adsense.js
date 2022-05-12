import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

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
                className="adsbygoogle"
                style={{ display: 'block', textAlign: 'center' }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-2370440619895423"
                data-ad-slot="8899511156"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default Adsense;
